import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from 'react';
import AddNewPost from "./AddNewPost";

const Navbar = () => {
    return(
        <Box position="sticky" top={0} p={4} bg="#f09029" zIndex={1}>
            <Container maxW="100%" centerContent>
                <Flex justifyContent="space-between" alignItems="center" w="100%" position="sticky" top={0}>
                <Text 
                fontSize={{base: "1.5rem",  sm: "2rem", md: "3rem"}} 
                align="left" 
                color="#f3f3f3">Book Club</Text>
                    <AddNewPost/>
                </Flex>
            </Container>
        </Box>
    )
}
export default Navbar;