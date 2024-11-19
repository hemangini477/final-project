import { createSlice } from "@reduxjs/toolkit";

export const plantSlice = createSlice({
  name: "plant",
  initialState: [
    {
      img: "/final-project/public/Fiddleleaf Fig.jpg",
      name: "Fiddleleaf Fig",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "/final-project/public/Monstera.jpg",
      name: "Monstera",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "/final-project/public/Pothos.jpg",
      name: "Pothos",
      cost: 700,
      quantity: 0,
    },
    {
      img: "/final-project/public/Snake Plant.avif",
      name: "Snake Plant",
      cost: 900,
      quantity: 0,
    },
    {
      img: "/final-project/public/Spider Plant.png",
      name: "Spider Plant",
      cost: 1100,
      quantity: 0,
    },
    {
      img: "/final-project/public/Tree Philodendron.jpeg",
      name: "Tree Philodendron",
      cost: 1000,
      quantity: 0,
    },
  ],

  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        // if(state[index].name === "Monstera" && state[index].quantity >= 3) {
        //     return;
        // }
        state[index].quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = plantSlice.actions;

export default plantSlice.reducer;
