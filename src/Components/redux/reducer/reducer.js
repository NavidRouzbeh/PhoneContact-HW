import {createSlice} from "@reduxjs/toolkit";

const initialState=[
    {id: 1, firstName: 'Ali', lastName: 'Abbasi', number:'09368705796', state:true},
    {id: 2, firstName: 'Arman', lastName: 'Orang', number:'09386975676', state:true},
    {id: 3, firstName: 'Pouya', lastName: 'Maqsoudi', number:'09394658848', state:false},
    {id: 4, firstName: 'Maryam', lastName: 'Rouzbeh', number:'09127985796', state:true},
]

export const CardSlice=createSlice({
    name:'contact',
    initialState,
    reducers: {
        addContact: (state,action)=>{
            state.push(action.payload)
        },
        deleteContact: (state,action)=>{
            const index=state.findIndex(item => item.id===action.payload)
            state.splice(index,1)
        },
        updateContact: (state,action)=>{
            const index=state.findIndex(item => item.id===action.payload.id)
            state[index] = action.payload
        },
        checkContact: (state,action)=>{
            const index = state.findIndex(item => item.id === action.payload)
            state[index].state = !state[index].state

        }

    }
});

export const {addContact,deleteContact,updateContact,checkContact} = CardSlice.actions
export default CardSlice.reducer;