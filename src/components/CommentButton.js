import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import db from "../lib/firebase";

const CommentButton = ({post}) => {
    const [comment, setComment] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();
   const [isSaving] = useState(false);
   

    const handleSubmit = async () =>{
        
        const date = new Date()
        

        await db.collection("posts").doc(post.id).collection("comments").add({
            comment,
            date: date.toUTCString(),
        })
        onClose();
        setComment("");
        console.log(comment)
    }

   

    return(
        <>
            <Button onClick={onOpen} size="sm" colorScheme="telegram">
                Add Comment
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Add New Comment</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <FormControl id="post-comment">
                                <FormLabel>Whatever dick thing you have to say</FormLabel>
                                <Textarea type="post-comment" size="xl" value={comment} onChange={(e) => setComment(e.target.value)}/>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <HStack spacing={4}>
                                <Button onClick={onClose} size="sm">Close</Button>
                                <Button onClick={handleSubmit} colorScheme="telegram"  isLoading={isSaving}>Save</Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )

}
export default CommentButton