import { Box, Button, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { GiLips } from "react-icons/gi";
import { FaDizzy } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { RiLungsFill, RiTempColdFill } from "react-icons/ri";
import React from "react";
import { MdSick } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../services/routes";

export default function SafetyCheck() {
    const navigate = useNavigate()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <VStack textAlign="center" spacing={4}>
        <Heading textAlign="center">Are you free from these symptoms?</Heading>

        <HStack>
          <Icon as={GiLips} boxSize={8}/>
          <Text fontSize="2xl">Blue lips or nails</Text>
        </HStack>

        <HStack>
          <Icon as={FaDizzy}boxSize={8} />
         <Text fontSize="2xl">Dizziness and confusion</Text>
        </HStack>

        <HStack>
          <Icon as={IoIosEye}boxSize={8} />
          <Text fontSize="2xl">Extremely small pupils</Text>
        </HStack>

        <HStack>
          <Icon as={RiTempColdFill}boxSize={8} />
          <Text fontSize="2xl">Clammy or cold skin</Text>
        </HStack>

        <HStack>
          <Icon as={MdSick}boxSize={8} />
           <Text fontSize="2xl">Choking or coughing</Text>
        </HStack>

        <HStack>
          <Icon as={RiLungsFill}boxSize={8} />
          <Text fontSize="2xl">Trouble breathing</Text>
        </HStack>
        <HStack>
            <Button colorScheme="green" onClick={() => navigate(ROUTES.SAVE_ME)}>Yes</Button>
            <Button colorScheme="red" onClick={() => navigate(ROUTES.HOME)}>No</Button>
        </HStack>
      </VStack>
    </Box>
  );
}
