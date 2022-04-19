import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import projects from "./reducers/projects";
import team from "./reducers/team";
import main from "./reducers/main";




const store = configureStore({
    reducer: {
        projects,
        team,
        main
    }, middleware:[]
})
const makeStore = () => store
export const wrapper = createWrapper(makeStore)


