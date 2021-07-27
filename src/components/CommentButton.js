import {
    Box, Button, Container, Drawer,
    DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerFooter, DrawerHeader,
    DrawerOverlay, HStack, Text, Textarea,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import db from "../lib/firebase";



const CommentButton = ({post}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("")
    const [isSaving] = useState(false);
    
    useEffect(()=>{
    
        db.collection("posts").doc(post.id).collection("comments")
        .orderBy("createdAt", "desc")
        .get()
        
        //getting the querySnapshot
        .then((querySnapshot) => {
            //mapping through the array
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            //setting the state of posts
            setComments(data);
          });
    }, [post.id]);

    useEffect(()=>{
    
        db.collection("posts").doc(post.id).collection("comments")
        .orderBy("createdAt", "desc")
        .onSnapshot((querySnapshot) => {
            const _comments = [];
    
            querySnapshot.forEach((doc) =>{
                _comments.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            
            setComments(_comments)
        });
    }, []);

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("posts").doc(post.id).collection("comments").add({
            comment,
            commentId: post.id,
            createdAt: date.toUTCString(),
        });
        // onClose();
        setComment("");
    };

   return(
        <>
        <Button 
        variant="link" 
        h={"1.5rem"} 
        w={"30%"} 
        ref={btnRef} 
        borderColor="#ed8a00" 
        onClick={onOpen}>
        Comments
      </Button>
      <Drawer
        isOpen={isOpen}
        size="lg"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
              <Box key={post.id} p={2} paddingBottom={6, 3}>
                <Text lineHeight="1.75" fontSize="md">{post.title}</Text>
                <Text fontSize=".75rem">{post.createdAt}</Text>
              </Box>
            </DrawerHeader>

        <DrawerBody>
          <Container  overflow="scroll" h="100%" bg="gray.100" p={4} rounded="md"   >
            <VStack  spacing={4} w="100%" >
                {comments.map((com)=>(
                    <>
                    <Box padding={2} 
                        w="100%" 
                        bg="#ffb15e" 
                        rounded="md" 
                        align="left" >
                        <Text fontSize="1rem" key={com.id}>{com.comment}</Text>
                        <Text fontSize=".75rem">{com.createdAt}</Text>
                    </Box>
                    </>
                    ))}  
                </VStack>
            </Container>  
        </DrawerBody>
          <DrawerFooter >
              <VStack spacing={4} w="100%" >
          <Textarea 
            h="3rem" 
            id="post-comment" 
            placeholder="Whatever dick thing you have to say..."
            type="post-comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            />
            <HStack align="right" p={4} spacing={4}>
                <Button onClick={onClose} >Close</Button>
                <Button onClick={handleSubmit} colorScheme="telegram" isLoading={isSaving}>Save</Button>
            </HStack>
            </VStack>
          </DrawerFooter>
          
        </DrawerContent>
      </Drawer>
    </>
    )

}
export default CommentButton