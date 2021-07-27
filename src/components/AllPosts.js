import { Container, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
       
    <Container maxW="75%" maxH="sm" centerContent p={8} >
            <VStack spacing={8} w="100%" >
                {posts.map((post)=>(
                    <Switch>
                        <Route key={post.id} path={post.path} exact={post.exact}><Post post={post} key={post.id}/></Route>
                    </Switch>
                    
                ))}
                    
            </VStack>
        </Container>
        
        </Router>
)
}
export default AllPosts;