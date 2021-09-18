import reducer, { handleEdit } from './FormSlice'

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            personal:{
                nama: "",
                email: "",
                phone: "",
                nationality: "",
                message: "",
            }
        }
    )
})

test('should handle correct all value', () => {
    const inputState = {
        nama: "Ivan",
        email: "ivannizar@gmail.com",
        phone: "082233161719",
        nationality: "Indonesia",
        message: "Hmmmm apa yaaa terserah",
    }
    const prevState ={
        personal:{
            nama: "",
            email: "",
            phone: "",
            nationality: "",
            message: "",
        }
    }
    expect(reducer(prevState, handleEdit(inputState))).toEqual(
        {
            personal:{
                nama: "Ivan",
                email: "ivannizar@gmail.com",
                phone: "082233161719",
                nationality: "Indonesia",
                message: "Hmmmm apa yaaa terserah",
            }
        }
    )
})

test('should handle incorrect name value', () => {
    const inputState = {
        nama: "Ivan1234",
        email: "ivannizar@gmail.com",
        phone: "082233161719",
        nationality: "Indonesia",
        message: "Hmmmm apa yaaa terserah",
    }
    const prevState ={
        personal:{
            nama: "",
            email: "",
            phone: "",
            nationality: "",
            message: "",
        }
    }
    expect(reducer(prevState, handleEdit(inputState))).toEqual(
        {
            personal:{
                nama: "",
                email: "",
                phone: "",
                nationality: "",
                message: "",
            }
        }
    )
})

test('should handle incorrect email value', () => {
    const inputState = {
        nama: "Ivan",
        email: "ivannizargmailcom",
        phone: "082233161719",
        nationality: "Indonesia",
        message: "Hmmmm apa yaaa terserah",
    }
    const prevState ={
        personal:{
            nama: "",
            email: "",
            phone: "",
            nationality: "",
            message: "",
        }
    }
    expect(reducer(prevState, handleEdit(inputState))).toEqual(
        {
            personal:{
                nama: "",
                email: "",
                phone: "",
                nationality: "",
                message: "",
            }
        }
    )
})

test('should handle incorrect phone value', () => {
    const inputState = {
        nama: "Ivan",
        email: "ivannizar@gmail.com",
        phone: "082233161719hahahah",
        nationality: "Indonesia",
        message: "Hmmmm apa yaaa terserah",
    }
    const prevState ={
        personal:{
            nama: "",
            email: "",
            phone: "",
            nationality: "",
            message: "",
        }
    }
    expect(reducer(prevState, handleEdit(inputState))).toEqual(
        {
            personal:{
                nama: "",
                email: "",
                phone: "",
                nationality: "",
                message: "",
            }
        }
    )
})