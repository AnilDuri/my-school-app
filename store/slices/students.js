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
        removeStudent: (state, action) => {
            state.students.splice(action.payload, 1);
        },
        clearStudents: (state) => {
            state.students = [];
        }
    }
})

export const addStudent = registeredStudents.actions.addStudent;
export const removeStudent = registeredStudents.actions.removeStudent;
export const clearStudents = registeredStudents.actions.clearStudents;
export default registeredStudents.reducer;