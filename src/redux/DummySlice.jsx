import { createSlice } from '@reduxjs/toolkit';
const dummy=createSlice({
    name:"dummy",
    initialState:{count:0,
    data:[],
    },
    reducers:{
        counter:(state)=>{
             state.count = state.count+1
    },
        addNote:(state,action)=>{
                state.data = [...state.data, {id:Date.now(), text: action.payload}]
            
        },
        deleteNote:(state,action)=>{
               state.data= state.data.filter((item)=>item.id!==action.payload.id)
            }
    ,
        editNote:(state,action)=>{
          state.data= state.data.map((i)=>
            action.payload.id===i.id?{id:action.payload.id,text:action.payload.text}:i
        )
             

            }
        
    }

})

export const {addNote, deleteNote,editNote,counter} =dummy.actions

export default dummy.reducer