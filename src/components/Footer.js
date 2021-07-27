import {
    Box,
    Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack,
    Icon, IconButton, Text, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { FiFacebook, FiInstagram, FiMenu, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("right")
    return(
        <Box position="sticky" bottom={0}  p={4} bg="#f09029" zIndex={1}>
        <Container maxW="100%" centerContent>
            <Flex justifyContent="space-between" alignItems="center" w="100%" position="sticky" top={0}>
            <Text 
            fontSize={{base: "1.5rem",  sm: "2rem", md: "3rem"}} 
            align="left" 
            color="#f3f3f3">Book Club</Text>
                <HStack spacing={3}>
                    <Icon as={FiFacebook}/>
                    <Icon as={FiInstagram}/>
                    <Icon as={FiTwitter}/>
                    </HStack> 
                    <IconButton variant="ghost" aria-label="Menu" icon={<FiMenu/>} onClick={onOpen}>
                    </IconButton>
                    <Drawer placement="bottom" size="lg" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                        <DrawerBody>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                
            </Flex>
        </Container>
        </Box>
    )
}
export default Footer;