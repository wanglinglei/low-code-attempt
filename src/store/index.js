import {configureStore} from '@reduxjs/toolkit'
import layout from '@/pages/layout'
const store =configureStore({
    reducer:{
        layout
    }
})

export default store