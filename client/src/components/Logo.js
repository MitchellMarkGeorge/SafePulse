import { Heading } from "@chakra-ui/react";
import { RiHeartPulseFill } from "react-icons/ri";
import { Icon } from "@chakra-ui/react";
import React from "react";

export default function Logo({ size = "3xl", color = "red.500"}) {
  return (
    <Heading as='h1' size={size}>
      <Icon
        width={10}
        height={10}
        lineHeight="100%"
        as={RiHeartPulseFill}
        color={color}
      />
      SafePulse
    </Heading>
  );
}
