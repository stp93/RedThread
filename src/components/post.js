import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CommentButton from "./CommentButton";
const Post = ({post}) => {
    // const [singlePost, setSinglePost] = useState("")

    // const handleSubmit = async () => {

    //     const data = await db.collection("posts").doc(post.id)
    //     setSinglePost(data)

    //     return(
    //         <>
            
    //         {/* console.log(" hit"),
    //         <Link to={`/posts/${post.id}`}>{post.title}</Link>
    //         <Route path="/posts/:postId" component={Single}></Route> */}
    //         {/* <OnePost post={post}/> */}
    //         <Single/>
    //         </>
            
    //     )
    // }
    
   return(
        <HStack id={post.id} key={post.id} w="100%" alignItems="flex-start">
            <Box overflow="scroll" h="8rem" bg="gray.100" p={4} rounded="md" w="100%">
                <Text>{post.title}</Text>
            </Box>
            {/* <VoteButtons post={post}/> */}
                <CommentButton post={post}/>
                {/* <Link to={{pathname:`/post/${post.id}` , state: {singlePost}}}>Link</Link> */}
                {/* <Button component={Link} to={`/${post.id}`}/> */}
                {/* <Link to={`/posts/${post.id}`} post={post} component={SinglePost}>Link</Link> */}
        </HStack>
    )
    }

export default Post;