import { Box, FormControl,Button, FormLabel, Checkbox, Input , FormHelperText, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW='600px'>
      <Form>
        <FormControl isRequired mb='40px'>
          <FormLabel>Task Name</FormLabel>
          <Input type='text' name='title' />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Task Description</FormLabel>
          <Textarea name='description' placeholder="Please enter a detailed description ................." />
        </FormControl>
        <FormControl display='flex' alignItems='Center' mb='40px' >
          <Checkbox 
          name='isPriority'
          colorScheme='purple' 
          size='lg'/>
          <FormLabel mb='0' ml='12px'>Make this a priority task</FormLabel>
        </FormControl>
        <Button type='submit'>Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === 'True'
  }

  console.log(task)

  return redirect('/')
}
