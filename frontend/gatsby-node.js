const path = require('path');
const { buildSiteTree, canonicalName } = require('gatsby-source-silverstripe');
const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
	plugins: [new LoadablePlugin()],
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src/'),
		},
	}
  })
}

exports.createPages = async ({graphql, actions, getNodesByType }) => {
	const requiredClasses = [
		"SilverStripe\\CMS\\Model\\SiteTree",
		"SilverStripe\\SiteConfig\\SiteConfig",
	];
	const errors = [];
	requiredClasses.forEach(type => {
		const exists = getNodesByType('SilverStripeDataObject').find(node => node.ancestry.includes(type));
		if (!exists) {
			errors.push(
				`Required dataobject "${canonicalName(type)}" is missing from the schema. Cannot build site tree.
				Check your canView permissions?`
			);
		}
	});
	if (errors.length) {
		errors.map(e => console.error(e));
	} else {
		buildSiteTree({ graphql, actions });
	}	

	Promise.resolve();
}

const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://official-joke-api.appspot.com/random_ten`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
	  jokes: resultData,
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}