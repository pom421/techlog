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
        &nbsp;in 2022
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

      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bg={useColorModeValue("gray.200", "gray.600")}
      >
        <Container maxW="container.lg">
          <Header />
        </Container>

        <main role="main" style={{ flexGrow: 1 }}>
          <Container maxW="container.md">{children}</Container>
        </main>

        <Container maxW="container.lg" textAlign="center">
          <Footer />
        </Container>
      </Flex>
    </>
  );
}

export default Layout;
