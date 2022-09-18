import {resolve} from 'path';

exports.createPages = async ({actions: {createPage, createRedirect}, graphql, reporter}) => {
    const {data, errors} = await graphql(`
        {
            blogs: allMdx(
                sort: {order: ASC, fields: frontmatter___date}
            ) {
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

    data.blogs.nodes.forEach(node => {
        createPage({
            path: node.frontmatter.slug,
            component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
            },
        });
    });

    const redirect = redirectFactory(createRedirect);

    redirect({
        fromPath: '/blog',
        toPath: '/',
        isPermanent: true,
        redirectInBrowser: true,
    })
};

function redirectFactory(createRedirect) {
    return function (options) {
        createRedirect({
            ...options,
            fromPath: `${options.fromPath}/`,
        });
        createRedirect(options);
    }
}