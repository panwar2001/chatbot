import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  age: 18,
  name:'',
  countDown:5
}
export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: { 
    updateName: (state,action)=>{
        state.name =action.payload;
    },
    updateAge: (state,action)=>{
        state.age= action.payload;
    },
    updateCountDown: (state)=>{
        state.countDown=state.countDown-1;
    }
  },
})

export const {updateAge,updateName,updateCountDown} = infoSlice.actions;
export default infoSlice.reducer;