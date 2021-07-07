import React from "react";

import { Box, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";

export default function Post({ title }): JSX.Element {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box bg="tomato" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{title}</Heading>
          <Text mt={4}>
            {
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text every since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
        </Box>
      </VStack>
    </>
  );
}
