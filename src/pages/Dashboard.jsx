import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";

export default function Dashboard() {
  return(
    <SimpleGrid columns={4} p={10} spacing={10} minChildWidth="300px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base : 'red' , md:'blue' ,lg:'yellow' , xl:'green'}}
        fontSize={{base: '12px' , md:'24px' , lg : '36px' , xl:'48px'}}>Thanush</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

    </SimpleGrid>
  )
}
