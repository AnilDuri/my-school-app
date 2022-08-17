import { createSlice } from "@reduxjs/toolkit";

const registeredStudents = createSlice({
    name: 'students',
    initialState: {
        students: []
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
    }
})

export const addStudents = registeredStudents.actions.addStudent;
export default registeredStudents.reducer;