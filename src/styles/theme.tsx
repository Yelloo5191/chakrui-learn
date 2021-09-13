/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

// color scheme: https://coolors.co/dad2d8-143642-0f8b8d-ec9a29-a8201a
const theme = extendTheme({
	colors: {
		brand: {
			secondary: "#F1F1F1",
			primary: "#F1F1F1",
			text: "#0C485E",
			boxbg: "#E6E6E6",
			header: {
				bg: "rgb(125,214,246,25%)",
				title: "#1AA7EC",
			}
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "brand.text",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "brand.secondary",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;
