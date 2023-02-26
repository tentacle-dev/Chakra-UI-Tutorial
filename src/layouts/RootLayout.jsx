import { Grid, GridItem } from "@chakra-ui/layout"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" alignItems="top">
      <GridItem
      as="asign"
      colSpan={{ base : 6 , lg:2 , xl:1}}
      bg="purple.400"
      minHeight={{lg : '100vh'}}
      p={{base : '30px' , lg: '30px'}}
      >
      <Sidebar />
      </GridItem>
      <GridItem as="main"
      p="40px"
      colSpan={{ base : 6 , lg: 4 , xl: 5}}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
