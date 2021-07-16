exports.createPages = async ({actions: {createPage}, graphql, reporter}) => {
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

    // Handle errors
    if (errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = require.resolve(`./src/templates/BlogDetail.tsx`);

    data.blogs.nodes.forEach(({id, slug}) => {
        createPage({
            component: template,
            path: `/blog/${slug}/`,
            context: {
                id: id,
            },
        })
    })
}

// exports.createResolvers = ({createResolvers}) => {
//     createResolvers({
//         Mdx: {
//             path: {
//                 type: "String",
//                 resolve(source, args, context) {
//                     const model = context.nodeModel.getNodeById({id: source.id, type: "Mdx"})
//                     console.log(source, model);
//                     return source.id;
//                 },
//             },
//         },
//     })
// }