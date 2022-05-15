import { Box, Button, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
import alarmClock from "../alarm.png";
import Logo from "./Logo";

export default function OverdoseTimer({ session, userData }) {
  const TIMER_STATE = {
    INITAL: 0,
    MORE_TIME: 1,
    OVERDOSE_WARNING: 2,
  };

  const [timerState, setTimerState] = React.useState(TIMER_STATE.INITAL);
  const [time, setTime] = useState(30);
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
        console.log("hello");
        setOverdoseWarning(true);
      }, 30000);
    } else {
      setTime((time) => time - 1);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  useEffect(() => {
    if (timerState === TIMER_STATE.MORE_TIME) {
      setTimeout(() => {
        console.log("hello");
      }, 1000);
    }
  }, [timerState]);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      backgroundColor="red.500"
    >
      <Box textAlign="center" backgroundColor="red.500">
        <Logo color="gray.100" />
        {isOver && !overdoseWarning ? (
          <Text color="gray.100" marginTop="1rem" fontWeight="black">
            Warning: Going into extra 30 seconds
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
            <Button marginTop="1rem" width={64} color="red.500" size="lg">
{/* call send request to backend             */}
              Dial 911
            </Button>
          ) : null}
          {!overdoseWarning ? (
            <Button marginTop="1rem" width={64} color="red.500" size="lg">
              EMERGENCY
            </Button>
          ) : (
            <Button marginTop="1rem" width={64} color="red.500" size="lg">
              Save Me
              {/* go to save me page */}
            </Button>
          )}
          <Button marginTop="1rem" width={64} color="red.500" size="lg">
            Stop
            {/* go to safety check page (will then redirect to home when done) */}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
