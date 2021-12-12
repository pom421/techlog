import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorModeValue,
  useColorMode,
  Flex,
  IconButton,
  Link,
  Stack,
} from "@chakra-ui/react";

import { default as NextLink } from "next/link";

import * as React from "react";

const Header = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box as="section" pt="0" pb="12" width="100%">
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        py="3"
        px={{ base: "3", md: "6", lg: "8" }}
        color="white"
        bg={useColorModeValue("blue.600", "blue.400")}
      >
        <Box as="h1" textStyle="first-title" marginEnd="2">
          Adventureland
        </Box>

        <Stack direction={["column", "row"]} spacing="24px" align="center">
          <Link as={NextLink} href="/">
            Article
          </Link>
          <Link as={NextLink} href="a-propos">
            À propos
          </Link>
          <IconButton
            color={useColorModeValue("white", "gray.800")}
            bg={useColorModeValue("blue.500", "blue.200")}
            _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
            _active={{
              bg: useColorModeValue("blue.600", "blue.300"),
              transform: "scale(0.8)",
            }}
            onClick={toggleColorMode}
            variant="outline"
            aria-label="Toggle"
            icon={<SunIcon />}
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
