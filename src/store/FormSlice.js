import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    nama: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
}

export const FormSlice = createSlice ({
    name: "personal",
    initialState:{
        personal: initialValue
    },
    reducers:{
        handleEdit: (state, action) => {
            // console.log("dalam form s",action.payload)
            // const newName = state.personal
            // newName.map(item => {
            //     item.isEditing = !item.isEditing
            //     item.title = action.payload.title
            // })
            
             state.personal = action.payload
            //  console.log(state.personal)
        }
    }
})

export const {handleEdit} = FormSlice.actions;
export default FormSlice.reducer;