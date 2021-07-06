import { Heading } from "@chakra-ui/react";
import React from "react";

export interface Heading1Props {
  children: React.ReactNode;
}

export const Heading1 = (props: Heading1Props): JSX.Element => {
  const { children } = props;

  return (
    <Heading as="h1" size="4xl" isTruncated>
      {children}
    </Heading>
  );
};
