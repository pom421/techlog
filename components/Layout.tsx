import React from "react";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

import Banner from "../components/Banner";

function Header() {
  return (
    <Box>
      <header>PixelDragon in JS adventureLand and pump it up!</header>
    </Box>
  );
}

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
        <title>Pom's techlog, journey in adventureland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bg={useColorModeValue("gray.200", "gray.600")}
      >
        <Banner />

        <Header />

        <main role="main" style={{ flexGrow: 1 }}>
          <Container>{children}</Container>
        </main>

        <Footer />
      </Flex>
    </>
  );
}

export default Layout;
