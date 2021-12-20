const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: colors.cyan,
				secondary: colors.emerald,
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
			},
		},
	},
	plugins: [],
};
