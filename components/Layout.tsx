import React from "react";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

import Header from "./Header";

function Footer() {
  return (
    <footer>
      <p>
        Made with&nbsp;
        <span role="img" aria-label="heart">
          ❤️
        </span>
        &nbsp;in 2021
      </p>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Head>
        <title>Adventureland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.lg">
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="100vh"
          bg={useColorModeValue("gray.200", "gray.600")}
        >
          <Header />

          <main role="main" style={{ flexGrow: 1 }}>
            <Container>{children}</Container>
          </main>

          <Footer />
        </Flex>
      </Container>
    </>
  );
}

export default Layout;
