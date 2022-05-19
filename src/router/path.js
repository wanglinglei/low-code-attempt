import React from 'react'
import Home from '../pages/home'
import Login from '../pages/login'
import Content from '../pages/content'
const path = [
    
    {
        path: '/login',
        component: Login,
        exact:true
    },
    {
        path: '/home',
        component: Home,
        exact:true
    },{
        path: '/content',
        component: Content,
        exact:true
    },
]
export default path