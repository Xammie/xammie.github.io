const path = require('path');

exports.createPages = async ({actions: {createPage}, graphql, reporter}) => {
    const {data, errors} = await graphql(`
        {
            blogs: allMdx(
                sort: {order: ASC, fields: frontmatter___date}
            ) {
                nodes {
                    id
                    uri
                }
            }
        }
    `);

    // Handle errors
    if (errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = require.resolve(`./src/templates/BlogDetail.tsx`);

    data.blogs.nodes.forEach(({id, uri}) => {
        createPage({
            component: template,
            path: uri,
            context: {
                id: id,
            },
        })
    })
}

exports.createResolvers = ({createResolvers}) => {
    createResolvers({
        Mdx: {
            uri: {
                type: "String",
                resolve(source) {
                    const slug = path.basename(source.fileAbsolutePath, path.extname(source.fileAbsolutePath));

                    return `/blog/${slug}/`;
                },
            },
        },
    })
}