import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function SaveMeInfo({ title, text}) {
  return (
    <Box padding={5} shadow="md" borderWidth="1px" backgroundColor="gray.100" borderRadius="1rem" width="100%">
        <Heading fontSize="xl">{title}</Heading>
        <Text marginTop={2}>{text}</Text>
    </Box>
  )
}
