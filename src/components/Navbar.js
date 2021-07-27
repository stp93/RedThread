import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from 'react';
import AddNewPost from "./AddNewPost";

const Navbar = () => {
    return(
        <Box position="sticky" top={0} p={4} bg="gray.100" zIndex={1}>
            <Container maxW="100%" centerContent>
                <Flex justifyContent="space-between" alignItems="center" w="100%" position="sticky" top={0}>
                <Text fontSize="5xl" align="left">Book Club</Text>
                    <AddNewPost/>
                </Flex>
            </Container>
        </Box>
    )
}
export default Navbar;