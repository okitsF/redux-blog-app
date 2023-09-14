import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:'0',name:'Zoro'},
    {id:'1',name:'Sanji'},
    {id:'2',name:'Luffy'},
    {id:'3',name:'Brook'},

]

const usersSlice= createSlice({
    name:'users',
    initialState,
    reducers:{
    },
}) 

export const selectAllUsers= (state)=>state.users;
export default usersSlice.reducer