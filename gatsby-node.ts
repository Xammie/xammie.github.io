import { resolve } from 'path';

exports.createPages = async ({
    actions: { createPage, createRedirect },
    graphql,
    reporter,
}) => {
    const { data, errors } = await graphql(`
        {
            blogs: allMdx(sort: { frontmatter: { date: ASC } }) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }

    const template = resolve('./src/templates/BlogDetail.tsx');

    data.blogs.nodes.forEach(({ id, internal, frontmatter: { slug } }) => {
        createPage({
            component:
                template + '?__contentFilePath=' + internal.contentFilePath,
            path: `/blog/${slug}/`,
            context: { id },
        });
    });

    const redirect = redirectFactory(createRedirect);

    redirect({
        fromPath: '/blog',
        toPath: '/',
        isPermanent: true,
        redirectInBrowser: true,
    });
};

function redirectFactory(createRedirect) {
    return function (options) {
        createRedirect({
            ...options,
            fromPath: `${options.fromPath}/`,
        });
        createRedirect(options);
    };
}
