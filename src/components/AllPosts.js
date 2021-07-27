import { Container, StackDivider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';
import Post from './Post';

const AllPosts = () => {
const [posts,setPosts] = useState([]);

useEffect(()=>{
    
    db.collection("posts")
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
        setPosts(data);
      });
}, []);

useEffect(()=>{
    
    db.collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) =>{
            _posts.push({
                id: doc.id,
                ...doc.data()
            })
        })
        
        setPosts(_posts)
    });
}, []);


return(
    <Container 
    bg="#f0f0f0" 
    maxW={[600,700,800]} 
    centerContent p={6}
     >
        <VStack spacing={6} w="100%" divider={<StackDivider p={1} borderColor="gray.300" />}>
            {posts.map((post)=>(
                <>
                    <Post post={post} key={post.id}/>
                </>
            ))}  
        </VStack>
    </Container>
    )
}
export default AllPosts;