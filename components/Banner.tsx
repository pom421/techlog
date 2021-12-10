import { BellIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import * as React from "react";
import { BannerLink } from "./BannerLink";

const Banner = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="section" pt="0" pb="12">
      <Stack
        direction={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{ base: "3", md: "6", lg: "8" }}
        color="white"
        bg={useColorModeValue("blue.600", "blue.400")}
      >
        <HStack spacing="3">
          <Icon as={BellIcon} fontSize="2xl" h="10" />
          <Text fontWeight="medium" marginEnd="2">
            Blog en version beta
          </Text>
        </HStack>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>

        {/* <BannerLink w={{ base: "full", sm: "auto" }} flexShrink={0}>
        Resend email
      </BannerLink> */}
      </Stack>
    </Box>
  );
};

export default Banner;
