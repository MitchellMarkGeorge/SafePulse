import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import SaveMeInfo from "../components/SaveMeInfo";

export default function SaveMe() {
  return (
    <Box backgroundColor="red.500" padding="1rem">
      <VStack height="100%" overflow="auto" spacing={3}>
        <Logo iconColor="gray.100" />
        <SaveMeInfo
          title="Call 911"
          text="Make sure you call 911 immediately."
        />
        <SaveMeInfo
          title="Stimulate"
          text="Check if the person is responsive, can you wake them up?"
        />
        <SaveMeInfo
          title="Airway"
          text="Make sure there is nothing in the mouth blocking the airway, or stopping the person from breathing. Remove anything that is blocking the airway."
        />
        <SaveMeInfo
          title="Ventilate"
          text="Help them breathe. Plug the nose, tilt the head back and give one breath every 5 seconds."
        />
        <SaveMeInfo
          title="Evaluate"
          text="Do you see any improvement? Are they breathing on their own? If not, prepare naloxone."
        />
        <SaveMeInfo
          title="Medicate"
          text="Inject one dose (1cc) of naloxone into a muscle "
        />
        <SaveMeInfo
          title="Evaluate and Support"
          text="Evaluate and support. Is the person breathing? Naloxone usually takes effect in 3-5 minutes. If the person is not awake in 5 minutes, give one more 1cc dose of naloxone.

          It is important to stay with the person until they have woken up or emergency services have arrived. If you need to leave the person alone for any reason, place them into the recovery position before you leave to keep the airway clear and to prevent choking. To place somebody in the recovery position:
          
          Turn them onto their side
          Place their bottom hand under their head for support
          Place their top leg at a 90 degree angle to the body, with the top knee touching the ground to prevent the person from rolling onto their stomach"
        />
      </VStack>
    </Box>
  );
}
