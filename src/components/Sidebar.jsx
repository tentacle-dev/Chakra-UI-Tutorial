import { AddIcon, CalendarIcon, InfoIcon } from '@chakra-ui/icons'
import { ListItem,List, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function sidebar() {
  return (
    <List color='white' fontSize="20px" spacing={4}>
        <ListItem>
            <NavLink to="/">
                {/* <ListIcon as='calendarIcon'></ListIcon> */}
                <CalendarIcon m={2} />
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Create">
                <AddIcon m={2}></AddIcon>
                New Task
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Profile">
                <InfoIcon m={2}></InfoIcon>
                Profile
            </NavLink>
        </ListItem>
    </List>
  )
}
