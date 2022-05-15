import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box textAlign="center">
        <Logo />
        <Spinner
          marginTop="1.5rem"
          textAlign="center"
          size="xl"
          color="red.500"
        />
      </Box>
    </Box>
  );
}
