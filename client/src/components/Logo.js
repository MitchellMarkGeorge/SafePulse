import { Heading } from "@chakra-ui/react";
import { RiHeartPulseFill } from "react-icons/ri";
import { Icon } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <Heading size="2xl">
      <Icon
        width={10}
        height={10}
        lineHeight="100%"
        as={RiHeartPulseFill}
        color="red.500"
      />
      SafePulse
    </Heading>
  );
}
