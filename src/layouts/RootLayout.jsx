import { Grid, GridItem } from "@chakra-ui/layout"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" alignItems="top">
      <GridItem
      as="asign"
      colSpan="1"
      bg="purple.400"
      minHeight="100hv"
      p="30px"
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem as="main"
      p="40px"
      colSpan="5"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
