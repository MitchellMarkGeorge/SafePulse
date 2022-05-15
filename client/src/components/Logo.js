import { Heading, HStack } from "@chakra-ui/react";
import { RiHeartPulseFill } from "react-icons/ri";
import { Icon } from "@chakra-ui/react";
import React from "react";

export default function Logo({ size = "3xl", iconColor = "red.500", justify = false }) {
  return (
    <HStack justifyContent={justify ? "center" : null}>
      <Icon
        boxSize={12}
        as={RiHeartPulseFill}
        color={iconColor}
      />
      <Heading as="h1" size={size}>
        SafePulse
      </Heading>
    </HStack>
  );
}
