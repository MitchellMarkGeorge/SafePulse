import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";

export default function PageBox({ icon, pageName, onClick = () => {}}) {
  return (
    <Box
      shadow="md"
      width={40}
      height={24}
      borderWidth="1px"
      borderRadius="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      onClick={onClick}
    >
        <HStack width="100%">
            <Icon height={10} width={10} as={icon}/>
            <Text textAlign="center">{pageName}</Text>
        </HStack>
    </Box>

  );
}
