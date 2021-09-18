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
            const regexNama = /^[A-Za-z ]+$/
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const regexPhone = /^[0-9]*$/
            if(!(action.payload.nama === "")){
                if(regexNama.test(action.payload.nama)&&
                    regexEmail.test(action.payload.email)&&
                    regexPhone.test(action.payload.phone)){
                        state.personal = action.payload
                }
            }
        }
    }
})

export const {handleEdit} = FormSlice.actions;
export default FormSlice.reducer;