import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    50: "#E8E9FF",
    100: "#C5C7FF",
    200: "#A2A6FF",
    300: "#7F85FF",
    400: "#5C64FF",
    500: "#1E21FF",
    600: "#1A1DE6",
    700: "#141497",
    800: "#0F0D6B",
    900: "#0A094F",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    fonts: {
      heading: `'Noto Sans', sans-serif`,
      body: `'Noto Sans', sans-serif`,
    },
  },
});
