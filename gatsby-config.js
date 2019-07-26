require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'MassiveUX'
	},
	plugins: [
		'gatsby-plugin-theme-ui',
		{
			resolve: 'gatsby-source-youtube-v2',
			options: {
				channelId: [ `${process.env.CHANNEL_ID}` ], // Can be array of channel IDs, this is Gatsby's channel,
				apiKey: `${process.env.apiKey}`, // Must register for a YouTube API key,
				maxVideos: 50 // This is default
			}
		}
	]
};
