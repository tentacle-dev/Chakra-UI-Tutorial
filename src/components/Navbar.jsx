import { UnlockIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 500,
      isClosable: true,
      status:'success',
      position:'top',
      icon:<UnlockIcon />

    });
  }
  return (
    <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer />

        <HStack spacing={10}>
          <Avatar src='/img/mario.png' name="mario">
            <AvatarBadge width='1.3em' bg='teal.500'>
              <Text fontSize='xs' color='white'>3</Text>
            </AvatarBadge>
          </Avatar>
            <Text>tanush@gmail.com</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>

    </Flex>
    // <Flex bg="gray.500" justify="space-around" wrap="wrap" gap={2}>
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" bg="green" flexGrow={1}>3</Box>
    //     <Box w="150px" h="50px" bg="yellow" flexGrow={2}>4</Box>
    // </Flex>

  )
}
