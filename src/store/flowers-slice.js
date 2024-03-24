import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
  name: "flowers",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addFlower(state, action) {
      const payload = action.payload;
      console.log(payload);
      if (state.items.find(item=>item.id===payload.plant.id)) {
        if (payload.countLit===0) {
          console.log("the best");
          const items =state.items.filter((item) => item.id != payload.plant.id);
          return {...state,items}
        }
        else if (state.items.find(item=>item.id===payload.plant.id).count>=1) {
          console.log('better');
          const flower = state.items.find(
            (flower) => flower.id === payload.plant.id
          );
          payload.directly
            ? (flower.count = payload.countLit)
            : (flower.count += payload.countLit);
        }
      } else {
        state.items.unshift({ ...payload.plant, count: payload.countLit });
      }
    },
    removeFlower(state, action) {},
  },
});

export const flowersActions = flowersSlice.actions;

export const flowersReducers = flowersSlice.reducer;
