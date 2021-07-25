import { Container, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import Post from '../../components/Post';
import db from '../../lib/firebase';


const App = () => {
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
      <>
      <Navbar/>
        <Container maxW="md" centerContent p={8}>
            <VStack spacing={8} w="100%">
                {posts.map((post)=>(
                    <Post post={post} key={post.id}/>
                ))}
            </VStack>
        </Container>
       
      </>
    )
  }

export default App;