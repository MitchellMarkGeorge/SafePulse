import React from "react";
import image from "../404.png";
import { Image, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../services/routes";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <VStack>
        <Heading textAlign="center" size="2xl">
          Page Not Found!
        </Heading>
        <Image boxSize="md" src={image} />
        <Button
          colorScheme="red"
          width={64}
          onClick={() => navigate(ROUTES.HOME)}
        >
          Go Home
        </Button>
      </VStack>
    </Box>
  );
}
