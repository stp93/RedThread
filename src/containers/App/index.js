import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import AllPosts from "../../components/AllPosts";
import Navbar from "../../components/Navbar";

const App = () => {
    // const [posts,setPosts] = useState([]);
    // useEffect(()=>{
        
    //     db.collection("posts")
    //     .orderBy("createdAt", "desc")
    //     .get()
    //     //getting the querySnapshot
    //     .then((querySnapshot) => {
    //         //mapping through the array
    //         const data = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));
    //         //setting the state of posts
    //         setPosts(data);
    //     });
    // }, []);
   
    // useEffect(()=>{
    //     db.collection("posts")
    //     .orderBy("createdAt", "desc")
    //     .onSnapshot((querySnapshot) => {
    //         const _posts = [];

    //         querySnapshot.forEach((doc) =>{
    //             _posts.push({
    //                 id: doc.id,
    //                 ...doc.data()
    //             })
    //         })
            
    //         setPosts(_posts)
    //     });
    // }, []);

    
    return(
      <>
      
      <BrowserRouter >
      <Navbar/>
      <AllPosts/>
      
        <Switch>
            {/* <Route exact path="/" component={AllPosts}/>
            <Route exact path="/posts" component={Post}/> */}
            
            

        </Switch>
      </BrowserRouter>
      </>
    )
  }

export default App;