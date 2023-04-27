import React from 'react'
import { Box, Flex, Spacer, Link, Button, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import AddTask from './AddTask';

export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box zIndex={1} bg="white" pos={'fixed'} w="100%" p="4" borderBottom='1px' borderColor='gray.200'>
      <Flex px={8} alignItems={'center'}>
        <Box>
          <Link href='/' fontSize={16}>
            Tasks-App
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={onOpen} colorScheme='purple' variant='outline'><AddIcon boxSize={3} mr={2} /> Add Task</Button>
        </Box>
      </Flex>
      <AddTask isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
