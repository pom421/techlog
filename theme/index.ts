import { extendTheme } from "@chakra-ui/react";
import tokens from "./tokens";
import styles from "./globals";
import textStyles from "./texts";
import components from "./components";

const customTheme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: { ...styles },
  ...tokens,
  components: { ...components },
  textStyles: { ...textStyles },
};

// console.log({ customTheme });

const theme = extendTheme(customTheme);

export default theme;
