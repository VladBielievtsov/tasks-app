import React from 'react'
import { 
  Card, 
  CardBody, 
  Flex, 
  Box,
  Text, 
  Spacer, 
  Switch, 
  Menu, 
  MenuButton, 
  Link, 
  MenuList, 
  MenuItem 
} from '@chakra-ui/react';

import IconEllipsis from './IconEllipsis'

interface TaskCardProrps {
  title: string
  desc: string
  count: number
}

export default function TaskCard({title, desc, count}: TaskCardProrps) {
  return (
    <Card mb={7}>
      <CardBody>
        <Flex alignItems={'center'}>
          <Text fontWeight={'700'} fontSize={'xl'}>{count + 1}. {title}</Text>
          <Spacer />
          <Switch colorScheme="purple" size='md' />
          <Menu>
            <MenuButton as={Link} _hover={{ bg: "gray.100" }} borderRadius={4} display={'block'} minW={'8'} maxH={'8'} p={2} ml={2}>
              <IconEllipsis />
            </MenuButton>
            <MenuList>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Box mt={3} pt={3} borderTop={'1px'} borderColor={'gray.200'}>
          <Text>
            {desc}
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}
