import React from "react";
// import Counter from "./features/counter/Counter"
import PostList from "./features/Post/postList";
import AddPostForm from "./features/Post/AddPostForm";



function App() {
 
  return (
    <main className="App">
      <AddPostForm/>
     <PostList/>
    </main>
  );
}

export default App;
