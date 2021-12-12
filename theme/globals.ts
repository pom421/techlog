import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    "@font-face": [
      {
        fontFamily: "Cabin",
        fontStyle: "normal",
        fontWeight: "normal",
        src:
          "url('cabin-v14-latin-regular-webfont.woff2') format('woff2')," +
          " url('cabin-v14-latin-regular-webfont.woff') format('woff')",
      },
      {
        fontFamily: "Gabriela",
        fontStyle: "normal",
        fontWeight: "normal",
        src:
          "url('gabriela-v8-latin-regular.woff2') format('woff2')," +
          " url('gabriela-v8-latin-regular.woff') format('woff')",
      },
    ],
    body: {
      fontFamily: '"Cabin", -apple-system, sans-serif',
      fontWeight: "normal",
      color: "gray.700",
      background: mode("white", "gray.800")(props),
    },
    a: {
      color: mode("blue.400", "red.300")(props),
    },
  }),
};

export default styles;
