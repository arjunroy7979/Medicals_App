import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../components/Data";

const userSlice = createSlice({
    name: "Users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const uu = state.find(user => user.id === id);
            if (uu) {
                return state.filter(f => f.id !== id)
            }
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer