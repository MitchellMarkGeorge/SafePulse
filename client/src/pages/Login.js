import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";

import { RiHeartPulseFill } from "react-icons/ri";
import { logIn } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await logIn(email, password);
      // should automatically route to home page if successful
    } catch (error) {
      setIsLoading(false);
      let toastTitle;
      if (error.code === "auth/user-not-found") {
        toastTitle = "Error: User not found";
      } else if (error.code === "auth/wrong-password") {
        toastTitle = "Error: Wrong password";
      } else if (error.code === "auth/invalid-email") {
        toastTitle = "Error: Invalid Email";
      } else {
        toastTitle = "Error: Unable to login"; // think about this
      }
      toast({
        title: toastTitle,
        status: "error",
        variant: "solid",
      });
      console.log(error.code);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box>
        <Heading size="2xl" textAlign="center">
          Login
          <Icon
            width={10}
            height={10}
            lineHeight="100%"
            as={RiHeartPulseFill}
            color="red.500"
          />
        </Heading>
        <Box
          as="form"
          marginTop="1rem"
          padding="1.5rem"
          shadow="md"
          borderWidth="1px"
          borderRadius="1rem"
          onSubmit={onSubmit}
        >
          <FormLabel htmlFor="email" color="gray.500">
            Email Address
          </FormLabel>
          <Input
            id="email"
            type="email"
            marginBottom="1rem"
            isRequired
            errorBorderColor="red.500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel htmlFor="password" color="gray.500">
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            isRequired
            errorBorderColor="red.500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            marginTop="1rem"
            type="submit"
            textAlign="center"
            width="100%"
            colorScheme="red"
            variant="solid"
            isLoading={isLoading}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
