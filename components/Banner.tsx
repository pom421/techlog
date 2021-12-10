import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  useColorModeValue,
  useColorMode,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import * as React from "react";

const Banner = (): JSX.Element => {
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
        <Box></Box>
        <HStack spacing="3">
          <Heading marginEnd="2">Adventureland</Heading>
          <Box textStyle="h1">This is a box</Box>
        </HStack>

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
      </Flex>
    </Box>
  );
};

export default Banner;
