import {
    Box, HStack, Text
} from "@chakra-ui/react";
import React from "react";
import CommentButton from "./CommentButton";

const Post = ({post}) => {

   return(
       <HStack id={post.id} key={post.id} w="100%" alignItems="flex-start">
            <Box overflow="scroll" h="8rem" bg="gray.100" p={4} rounded="md" w="100%">
                <Text>{post.title}</Text>
            </Box>
            {/* <VoteButtons post={post}/> */}
            <CommentButton post={post}/>
        </HStack>
    )                    
}
export default Post;