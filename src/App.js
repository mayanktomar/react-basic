import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Dishes from "./components/Dishes";
import Users from "./components/Users";
import AboutUs from "./components/AboutUs";
import ErrorComponent from "./components/errorComponent";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import UserDetailComponent from "./components/UserDetailComponent";

let HomeComponent = () => {
    return (
        <div>
            <Introduction/>
            <Dishes/>
        </div>
        
    )
}
let MainComponent= () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainComponent/>,
        children: [
            {
                path: "/",
                element: <HomeComponent/>
            },
            {
                path: "/dishes",
                element: <Dishes/>
            },
            {
                path: "/aboutus",
                element: <AboutUs/>
            },
            {
                path: "/founders",
                element: <Users/>
            },
            {
                path: "/founders/:userId",
                element: <UserDetailComponent/>
            },
            {
                path: "/contactus",
                element: <ContactUs/>
            }
        ],
        errorElement: <ErrorPage/>
    }
])

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);

root.render(<RouterProvider router={mainRouter}/>);









