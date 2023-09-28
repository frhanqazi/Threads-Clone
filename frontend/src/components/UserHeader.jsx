import {
  Box,
  VStack,
  Flex,
  Avatar,
  Text,
  MenuButton,
  Portal,
  Menu,
  MenuList,
  MenuItem,
  useToast,
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
const UserHeader = () => {
  const toast = useToast()
  const copyURL = () => {
    const currentURL = window.location.href
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        titel: 'Account Created',
        status: 'success',
        description: 'Profile Link copied',
        duration: 3000,
        isClosable: true,
      })
    })
    console.log(currentURL)
  }
  return (
    <VStack gap={4} alignItems={'start'}>
      <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Mark ZUCK
          </Text>
          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'sm'}>mark.zuck</Text>
            <Text
              fontSize={'xs'}
              bg={'gray.dark'}
              color={'gray.light'}
              p={1}
              borderRadius={'full'}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Mark Zuckerberg"
            src="/zuck-avatar.png"
            size="xl"
          ></Avatar>
        </Box>
      </Flex>
      <Text>Co founder, Investor, creator, socioopath</Text>
      <Flex w={'full'} justifyContent={'space-between'}>
        <Flex gap={2} alignItems={'center'}>
          <Text color={'gray.light'}>3.2K followers</Text>
          <Box w="1" h="1" bg={'gray.light'} borderRadius={'full'}></Box>
          <Link color={'grey.light'}>Instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={'pointer'}></BsInstagram>
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={'pointer'}></CgMoreO>
              </MenuButton>
              <Portal>
                <MenuList bg={'grey.dark'}>
                  <MenuItem bg={'grey.dark'} onClick={copyURL}>
                    Copy Link
                  </MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed Tab</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={'full'}>
        <Flex
          flex={1}
          borderBottom={'1.5px solid white'}
          justifyContent={'center'}
          pb="3"
          cursor={'pointer'}
        >
          <Text fontWeight={'bold'}> Threads</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={'1px solid gray'}
          justifyContent={'center'}
          color={'gray.light'}
          pb="3"
          cursor={'pointer'}
        >
          <Text fontWeight={'bold'}> Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader
