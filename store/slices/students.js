import { createSlice } from "@reduxjs/toolkit";

const registeredStudents = createSlice({
    name: 'students',
    initialState: {
        students: []
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
            console.log(state.students);
        },
    }
})

export const addStudent = registeredStudents.actions.addStudent;
export default registeredStudents.reducer;