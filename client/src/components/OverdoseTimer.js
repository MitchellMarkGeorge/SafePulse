import { Box, Button, Heading, VStack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../services/routes";
import Logo from "./Logo";

export default function OverdoseTimer({ session, userData }) {
    const navigate = useNavigate()
  const toast = useToast()
  const [time, setTime] = useState(10);
  const [isOver, setIsOver] = useState(false);
  const [overdoseWarning, setOverdoseWarning] = useState(false);

  const tick = () => {
    if (isOver) {
      // go to the second state
      return;
    }
    if (time === 0) {
      setIsOver(true);
      setTimeout(() => {
        setOverdoseWarning(true);
      }, 10000);
    } else {
      setTime((time) => time - 1);
    }
  };

  const emergency = () => {
      navigate(ROUTES.SAVE_ME);
  }

  const stop = () => {
      navigate(ROUTES.SAFETY_CHECK);
  }

  const dial911 = () => {
      toast({
          title: "Dailing 911...",
          variant: "solid",
          status: "loading",
          duration: 10000, // 10 seconds
          onCloseComplete: () => {
              toast({
                  title: "Emergency services have been notified",
                  description: "They should arrive soon to assist you",
                  variant: "solid",
                  status: "success",
                  duration: 5000
              })
          }
      })
      // might not actully call the api as that would spam teammate
  }


  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      backgroundColor="red.500"
    >
      <Box textAlign="center" backgroundColor="red.500">
        <Logo iconColor="gray.100" justify />
        {isOver && !overdoseWarning ? (
          <Text color="gray.100" marginTop="1rem" fontWeight="black">
            Warning: Going into extra 10 seconds
          </Text>
        ) : null}
        {/* <Image src={alarmClock} /> */}
        {!isOver && !overdoseWarning ? (
          <Heading
            fontSize="6rem"
            color="gray.100"
            marginBottom="1rem"
            marginTop="1rem"
          >
            {time}
          </Heading>
        ) : null}
        {overdoseWarning ? (
          <Box
            textAlign="center"
            padding="1rem"
            marginTop="1rem"
            backgroundColor="gray.100"
            color="red.500"
            shadow="md"
            borderWidth="1px"
            borderRadius="0.5rem"
          >
            <Heading size="2xl">Overdose Warning</Heading>
            <Text size="xl">Naxolone Required</Text>
          </Box>
        ) : null}
        <VStack>
          {/* navigate to safety check*/}
          {overdoseWarning ? (
            <Button marginTop="1rem" width={64} color="red.500" size="lg" onClick={dial911}>
{/* call send request to backend             */}
              Dial 911
            </Button>
          ) : null}
          {!overdoseWarning ? (
            <Button marginTop="1rem" width={64} color="red.500" size="lg" onClick={emergency}>
              EMERGENCY
            </Button>
          ) : (
            <Button marginTop="1rem" width={64} color="red.500" size="lg" onClick={emergency}>
              Save Me
              {/* go to save me page */}
            </Button>
          )}
          <Button marginTop="1rem" width={64} color="red.500" size="lg" onClick={stop}>
            Stop
            {/* go to safety check page (will then redirect to home when done) */}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
