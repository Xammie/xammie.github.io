import {resolve} from 'path';

exports.createPages = async ({actions: {createPage, createRedirect}, graphql, reporter}) => {
    const {data, errors} = await graphql(`
        {
            blogs: allMdx(
                sort: {order: ASC, fields: frontmatter___date}
            ) {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }

    const template = resolve('./src/templates/BlogDetail.tsx');

    data.blogs.nodes.forEach(({id, slug}) => {
        createPage({
            component: template,
            path: `/blog/${slug}/`,
            context: {
                id: id,
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