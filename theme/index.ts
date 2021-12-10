import { extendTheme } from "@chakra-ui/react";
import tokens from "./tokens";
import { styles } from "./globals";
import { textStyles } from "./texts";
import { components } from "./components";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  ...styles,
  ...tokens,
  ...components,
  ...textStyles,
});

export default theme;
