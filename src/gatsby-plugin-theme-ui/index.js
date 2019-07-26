/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
	colors: {
		text: '#232129',
		background: '#fff',
		primary: '#000'
	},
	fonts: {
		default:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
	},
	fontSizes: [ 16, 18, 20, 22, 27, 36 ],
	lineHeights: {
		text: '1.45',
		heading: '1.1'
	},
	sizes: {
		container: 650
	},
	styles: {
		Layout: {
			backgroundColor: 'background',
			color: 'text',
			fontFamily: 'default',
			fontSize: 1,
			lineHeight: 'text'
		},
		Header: {
			backgroundColor: 'primary',
			color: 'background',
			fontWeight: 'bold',
			margin: 0,
			span: {
				display: 'block',
				fontSize: 3,
				margin: '0 auto',
				maxWidth: '90vw',
				padding: 3,
				width: 'container'
			}
		},
		Main: {
			margin: '0 auto',
			maxWidth: 'container',
			width: '90vw'
		},
		Container: {
			padding: 0,
			paddingBottom: 3,
			paddingTop: 3
		},
		h1: {
			color: 'text',
			fontSize: 2,
			lineHeight: 'heading'
		}
	}
};
