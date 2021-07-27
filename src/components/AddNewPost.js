import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [title, setTitle] = useState("");
    const [isSaving] = useState(false);

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("posts").add({
            title,
            upVotesCount: 0,
            downVotesCount: 0,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString()
        });
        onClose();
        setTitle("");
    };

    return(
        <>
            <Button onClick={onOpen} size="sm" color="#f3f3f3" bg="#74adf2">
                Add New Post
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Add New Post</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <FormControl id="post-title">
                                <FormLabel>Post Title</FormLabel>
                                <Textarea type="post-title" size="xl" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <HStack spacing={4}>
                                <Button onClick={onClose} size="sm">Close</Button>
                                <Button onClick={handleSubmit} color="#f3f3f3" bg="#74adf2" disabled={!title.trim()} isLoading={isSaving}>Save</Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}
export default AddNewPost;