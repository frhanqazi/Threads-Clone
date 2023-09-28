import { Avatar, VStack, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import React from 'react'

const UserPost = () => {
  return (
    <Link to={'markzuckerberg/post/1'}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={'column'} alignItems={'center'}>
          <Avatar
            size="md"
            name="Mark Zuckerberg"
            src="/zuck-avatar.png"
          ></Avatar>
          <Box w="1px" h={'full'} bg="gray.light" my={2}></Box>
          <Box position={'relative'} w="full">
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/kent-c-dodds"
              position="absolute"
              top={'0px'}
              left={'15px'}
              padding={'2px'}
            ></Avatar>
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/kent-c-dodds"
              position="absolute"
              bottom={'0px'}
              right={'-5px'}
              padding={'2px'}
            ></Avatar>
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/kent-c-dodds"
              position="absolute"
              bottom={'0px'}
              left={'4px'}
              padding={'2px'}
            ></Avatar>
          </Box>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost
