import { Route, Routes } from "react-router-dom";

export const menuRoutes = [
    {
        path: "/",
        component: ()=> import("../components/pages/Home")
    },
    {
        path: "/about",
        component: ()=> import("../components/pages/About")
    },
    {
        path: "/products",
        component: ()=> import("../components/pages/Products")
    },
    {
        path: "/location",
        component: ()=> import("../components/pages/Location")
    },
    {
        path: "/contact",
        component: ()=> import("../components/pages/Contact")
    },
    {
        path: "/orders",
        component: ()=> import("../components/pages/Orders")
    },
    {
        path:"*",
        component: ()=> import("../components/pages/NotFound")
    },
]