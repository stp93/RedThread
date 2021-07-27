import {
    Box, Text, VStack
} from "@chakra-ui/react";
import React from "react";
import CommentButton from "./CommentButton";

const Post = ({post}) => {

   return(
       <VStack id={post.id} key={post.id} width={{ base: "100%", sm: "75%", md: "75%" }} alignItems="flex-start" >
            <Box overflow="scroll" h={{base:"8rem", sm:"8rem", md:"10rem"}} bg="#dedede" p={4} rounded="md" w="100%" shadow="md">
                <Text>{post.title}</Text>
            </Box>
            {/* <VoteButtons post={post}/> */}
            <CommentButton post={post}/>
        </VStack>
    )                    
}
export default Post;