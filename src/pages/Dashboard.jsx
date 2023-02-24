import { Box, Container, Heading, Text } from "@chakra-ui/layout";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bgColor:"purple.400",
    m:"10px",
    textAlign:"Center",
    filter:'blur(1px)',
    ':hover' : {
      color : 'black',
      fontWeight:'900',
      bg:'blue.200'

    }
    
  }
  return(
    <Container as="h1" maxWidth="4x1">
      <Heading m={2}>
        Chakra
      </Heading>
      <Text color={"blueviolet.50"} fontWeight={500}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestiae!</Text>
      <Box>
        <Text>Hello</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Ninjas

      </Box>
    </Container>
  )
}
