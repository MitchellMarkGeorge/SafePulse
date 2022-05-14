import { Text, Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'
import { RiArrowRightCircleFill } from "react-icons/ri"
import landing_screen from "../landing_screen.png"

export default function Landing() {
  return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Box textAlign="center">
          <Logo/>
          <Text color="gray.500" marginTop="1rem" marginBottom="1.5rem">One call away from OK, not OD</Text>
          <Image  src={landing_screen}/>
          <Button colorScheme="red" variant="solid" marginTop="1.5rem" rightIcon={<RiArrowRightCircleFill/>}>Get Started</Button>
          <Text marginTop="1rem" color="gray.500">Already a member, log in</Text>
          </Box>
      </Box>
  )
}
