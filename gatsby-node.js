exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({ node, name: 'slug', value: node.frontmatter.title || '' });
  }
};
