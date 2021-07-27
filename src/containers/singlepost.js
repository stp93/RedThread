import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import db from "../lib/firebase";

function Single(post){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        const single = db.collection("posts").doc(post.id)

        single
            .get()
            .then(function (doc) {
                if(doc.exists){
                    let{title} = doc.data();
                    setTitle(title); 
                }
            })
            .catch(function(error){
                console.log(error)
            });
    }, []);

    return (
        <Box overflow="scroll" h="8rem" bg="gray.100" p={4} rounded="md" w="100%">
                <Text >{title}</Text>
                
            </Box>
    )
}
export default Single;