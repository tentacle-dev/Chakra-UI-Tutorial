import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs>
      <TabList>
        <Tab>Name</Tab>
        <Tab>Address</Tab>
        <Tab>Phone Number</Tab>
        <Tab>Gender</Tab>

      </TabList>
      <TabPanels>
        <TabPanel>
          Thanush
        </TabPanel>
        <TabPanel>
          291/6,2/1,Edward Avenue
        </TabPanel>
        <TabPanel>
          777032505
        </TabPanel>
        <TabPanel>
          Male
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
