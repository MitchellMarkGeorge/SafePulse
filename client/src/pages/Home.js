import {
  Box,
  Heading,
  useToast,
  Text,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import PageBox from "../components/PageBox";
import { auth } from "../services/firebase";
import {
  RiMedicineBottleFill,
  RiMapPin2Fill,
  RiFirstAidKitFill,
  RiPhoneFill,
} from "react-icons/ri";
import { MdEmergency } from "react-icons/md";
import { RiHeartPulseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getUserData } from "../services/db";
import { ROUTES } from "../services/routes";
import { useAuthContext } from "../contexts/AuthContext";

export default function Home() {
  //   const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userData, setUserData } = useAuthContext();
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
      setIsLoading(false);
    }
  }, []);

  const gotToSagfeUsePage = () => {
    navigate(ROUTES.SAFE_USE);
  };

  if (isLoading) return <Loading />;
  return (
    // use loading component?
    <Box padding="2rem" height="100%">
      <Box>
        <Logo size="2xl" />
        {/*  need to change size of logo for this page             */}
        <Heading size="3xl" marginBottom="1rem" marginTop="1.5rem">
          Hello {userData?.name}!
        </Heading>
        <Text color="gray.500">Supportive Resources</Text>
        <Divider marginBottom="1rem" />
        <SimpleGrid columns={2} spacing={10} marginBottom="2rem">
          <PageBox icon={RiPhoneFill} pageName="Overdose Response" />
          <PageBox icon={RiMapPin2Fill} pageName="Safe Injection Site Map" />
          <PageBox icon={RiFirstAidKitFill} pageName="Naloxone Kit Map" />
          <PageBox icon={RiMedicineBottleFill} pageName="Narcan Kit Tutorial" />
        </SimpleGrid>

        <Text color="gray.500">Live Support and Resources</Text>
        <Divider marginBottom="1rem" />
        <SimpleGrid columns={2} spacing={10} marginBottom="2rem">
          <PageBox icon={RiPhoneFill} pageName="Connex Ontario" />
          <PageBox icon={RiPhoneFill} pageName="Health Connect Nurse" />
        </SimpleGrid>

        <Text color="gray.500">Overdose Emergency Response</Text>
        <Divider marginBottom="1rem" />
        <SimpleGrid columns={2} spacing={10} marginBottom="2rem">
          <PageBox icon={MdEmergency} pageName="Emergency Response" />
          <PageBox
            icon={RiHeartPulseFill}
            pageName="SafeUse Platform"
            onClick={() => navigate(ROUTES.SAFE_USE)}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
