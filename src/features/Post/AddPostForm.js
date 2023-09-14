import  React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../user/usersSlice";


const AddPostForm = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [userID,setUserID]=useState("");

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const onTitleChanged= e =>setTitle(e.target.value);
    const onContentChanged= e => setContent(e.target.value);
    const onAuthorChanged= e => setUserID(e.target.value);


    const onSavePostClicked =()=>{
        if(title && content){
            dispatch(
                postAdded(title,content,userID)
            )
            setContent('');
            setTitle('');
        }
    }
    
    const canSave = Boolean(title) && Boolean(content) && Boolean(userID)

    const userOption = users.map(users=>(
        <option key={users.id} value={users.id}>
            {users.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a post</h2>
        <form>
            <label htmlFor="PostTitle">Post Title:</label>
            <input 
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postAuthor" > Author:</label>
            <select id="postAuthor" value={userID} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOption}
            </select>

            <label htmlFor="postContent">Post Content:</label>
            <textarea 
                type="text"
                id="poostContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Posts</button>    
        </form>
    </section>
  )
}

export default AddPostForm