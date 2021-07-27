import { useEffect } from "react";
import db from '../lib/firebase';

const SinglePost = ({post}) => {
    // const [singlePost, setSinglePost] = useState("")
   
    useEffect(()=>{
        db.collection("posts").doc(post.id)
         .get().then((doc) => {
         if (doc.exists) {
             console.log(doc)
             
         } else {
             
             console.log("No such document!");
         }
         }).catch((error) => {
         console.log("Error getting document:", error);
         });
         
     })
     
}
export default SinglePost