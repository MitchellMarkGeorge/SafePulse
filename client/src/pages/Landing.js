import { Text, Box, Button, Image, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import React from "react";
import Logo from "../components/Logo";
import { RiArrowRightCircleFill } from "react-icons/ri";
import landing_screen from "../landing_screen.png";
import { ROUTES } from "../services/routes";

export default function Landing() {
  const navigate = useNavigate();

  const getStartedClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Box textAlign="center">
        <Logo />
        <Text color="gray.500" marginTop="1rem" marginBottom="1.5rem">
          One call away from OK, not OD
        </Text>
        <Image src={landing_screen} />
        <Button
          colorScheme="red"
          variant="solid"
          marginTop="1.5rem"
          width={72} 
          onClick={getStartedClick}
          rightIcon={<RiArrowRightCircleFill />}
        >
          Get Started
        </Button>
        <Text marginTop="1rem" color="gray.500">
          Already a member?{" "}
          <Link as={ReactRouterLink} to={ROUTES.LOGIN} color="teal.500">
            Login
          </Link>
        </Text>
        <Text marginTop="1rem" color="gray.500">
        Designed for mobile only
        </Text>
      </Box>
    </Box>
  );
}
