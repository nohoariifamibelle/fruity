import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    list: [
        {
            name: "Ananas",
            url: "/images/ananas.jpg",
            price: 6,
            id: nanoid(8)
        },
        {
            name: "Pomme",
            url: "/images/pomme.jpg",
            price: 2,
            id: nanoid(8)
        },
        {
            name: "Mangue",
            url: "/images/mangue.jpg",
            price: 4,
            id: nanoid(8)
        },
        {
            name: "Banane",
            url: "/images/banane.jpg",
            price: 2,
            id: nanoid(8)
        },
        {
            name: "Fraise",
            url: "/images/fraise.jpg",
            price: 6,
            id: nanoid(8)
        },
        {
            name: "Orange",
            url: "/images/orange.jpg",
            price: 2,
            id: nanoid(8)
        },
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState
})

export default fruits.reducer