import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState =[
  {
    id:"1",
    title:"Learn Redux tool-kit",
    content:"I've heard good things.",
    date:sub(new Date(),{minits:10}).toISOString(),
    reactions:{
      heart:0,
      wow:0,
      rocket:0,
      coffee:0,
      thumbsUp:0,
    }
  },
  {
    id:"2",
    title:"Slices...",
    content:"The more i say slice,the more i want pizza.",
    date:sub(new Date(),{minits:5}).toISOString(),
    reactions:{
      heart:0,
      wow:0,
      rocket:0,
      coffee:0,
      thumbsUp:0,
    }

  },
]

const postSlice=createSlice({
  name:"posts",
  initialState,
  reducers:{
    postAdded:{
     reducer(state,action){
        state.push(action.payload)
      },
      //adding  states as object 
      prepare( title,content,userId){
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            date:new Date().toISOString(),
            userId,
            reactions:{
              heart:0,
              wow:0,
              rocket:0,
              coffee:0,
              thumbsUp:0,
              nezuk:0,
            }
          }
        }
      }
    },
    //new feature
    reactionAdded(state,action){
      const {postId,reaction} = action.payload
      const existingPost = state.find(post=>post.id===postId)
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }

  }
})

export const { postAdded, reactionAdded } =postSlice.actions;
export const selectAllPosts= (state)=>state.posts;
export default postSlice.reducer