import {
  Box,
  Heading,
  useToast,
  Text,
  Input,
  FormLabel,
  Select,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import PageBox from "../components/PageBox";
import { auth } from "../services/firebase";

import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { addNewDrugSession, getUserData } from "../services/db";
import { ROUTES } from "../services/routes";
import { useAuthContext } from "../contexts/AuthContext";
import OverdoseTimer from "../components/OverdoseTimer";

export default function SafeUse() {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData, setUserData } = useAuthContext();
  const [address, setAddress] = useState("");
  const [accessInstructions, setAccessInstructions] = useState("");
  const [drug, setDrug] = useState("");
  const [session, setSession] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    if (!userData) {
      // if there was no userData, that means the user just logged in and the data has not been gotten from the database
      getUserData(auth?.currentUser?.uid)
        .then((snap) => {
          if (snap.exists()) {
            setIsLoading(false);
            setUserData(snap.val());
            // onOpen();
          } else {
            toast({
              title: "Error: Unable to get user data",
              variant: "solid",
              status: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Error: Unable to get user data",
            variant: "solid",
            status: "error",
          });
        });
    } else {
      // this means the user just signed up and their user data was just saved
    //   onOpen();
      setIsLoading(false);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const session = {
      address,
      drug,
      accessInstructions,
      date: new Date().toString(),
    };
    setSession(session)
    try {
      await addNewDrugSession(
        session,
        auth.currentUser.uid
      );
      onOpen();
    } catch (error) {
      toast({
        title: "Error: Unable to record drug usage session",
        status: "error",
        variant: "solid",
      });
    }
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <Drawer closeOnEsc={false} isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding={0}>
            <OverdoseTimer
                session={session}
              userData={userData}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box padding="2rem" height="100%">
        <Box>
          <Logo size="2xl" />
          <Heading size="3xl" marginBottom="1rem" marginTop="1.5rem">
            SafeUse
          </Heading>
          <Text marginBottom="1rem" color="gray.500">
            SafeUse provides a safe space that reduces the chance of overdosing
            while consuming drugs. Please provide the following details:
          </Text>
          <Box
            as="form"
            padding="1.5rem"
            shadow="md"
            borderWidth="1px"
            borderRadius="1rem"
            onSubmit={onSubmit}
          >
            <FormLabel htmlFor="address" color="gray.500">
              Address
            </FormLabel>
            <Input
              id="address"
              type="text"
              marginBottom="1rem"
              isRequired
              errorBorderColor="red.500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <FormLabel htmlFor="access_instructions" color="gray.500">
              Access Instructions
            </FormLabel>
            <Input
              id="access_instructions"
              type="text"
              marginBottom="1rem"
              isRequired
              errorBorderColor="red.500"
              value={accessInstructions}
              onChange={(e) => setAccessInstructions(e.target.value)}
            />

            <FormLabel htmlFor="drug" color="gray.500">
              Drug
            </FormLabel>
            <Select
              id="drug"
              placeholder="Select drug"
              isRequired
              onChange={(e) => setDrug(e.target.value)}
            >
              <option value="heroin">Heroin</option>
              <option value="cocaine">Cocaine</option>
              <option value="meth">Meth</option>
              <option value="fentanyl">Fentanyl</option>
              <option value="morphine">Morphine</option>
            </Select>

            <Button
              type="submit"
              width="100%"
              colorScheme="red"
              marginTop="1rem"
            >
              Start Timer
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
