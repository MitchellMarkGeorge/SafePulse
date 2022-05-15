import React, { useState } from "react";

import {
  Box,
  Heading,
  FormLabel,
  Input,
  Icon,
  Button,
  useToast,
  HStack
} from "@chakra-ui/react";

import { RiHeartPulseFill } from "react-icons/ri";
import { signUp } from "../services/auth";
import { useAuthContext } from "../contexts/AuthContext";
import { ref, set } from "firebase/database";
import { db } from "../services/firebase";

// REWRITE COMPONENTS USING <Stack/>

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUserData } = useAuthContext();
  const toast = useToast();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await signUp(email, password);
      const userData = { name, phoneNumber }
      await set(ref(db, `user_data/${user.uid}`), userData);
      setUserData(userData)


      // should automatically route to home page if successful
    } catch (error) {
      setIsLoading(false);
      if (error.code === "auth/weak-password") {
        toast({
          title: "Error: Password is weak",
          description: "Password should be at least 6 characters",
          status: "error",
          variant: "solid",
        });
      } else if (error.code === "auth/email-already-in-use") {
        toast({
          title: "Error: Email already in use",
          status: "error",
          variant: "solid",
        });
      } else {
        toast({
          title: "Error: Unable to sign up",
          status: "error",
          variant: "solid",
        });
      }
      console.log(error.code);
      console.log(error.message);
    }
  };
  // put small graphic before form
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box>
      <HStack textAlign="center" justifyContent="center">
          <Heading size="2xl">Sign Up</Heading>
          <Icon
            width={10}
            height={10}
            lineHeight="100%"
            as={RiHeartPulseFill}
            color="red.500"
          />
        </HStack>
        <Box
          as="form"
          marginTop="1.5rem"
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
          <FormLabel htmlFor="name" color="gray.500">
            Name
          </FormLabel>
          <Input
            id="name"
            type="text"
            marginBottom="1rem"
            isRequired
            errorBorderColor="red.500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel htmlFor="phone_number" color="gray.500">
            Phone Number
          </FormLabel>
          {/*  have to shoe the format           */}
          <Input
            id="phone_number"
            type="tel"
            pattern="[0-9]{10}"
            marginBottom="1rem"
            isRequired
            errorBorderColor="red.500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
