import React, { createContext, useState } from "react";
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
import { Provider } from "react-redux";
import store from "./store";
import Feedbacks from "./components/Feedbacks";
import { LoginContext } from "./context/context";


let HomeComponent = () => {
    return (
        <div>
            <Introduction/>
            <Dishes/>
        </div>
        
    )
}
let MainComponent= () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const value = {isLoggedIn,setIsLoggedIn};
    return (
        <div>
            <Provider store={store}>
                <LoginContext.Provider value={value}>
                    <Header/>
                    <Outlet/>
                </LoginContext.Provider>
            </Provider>
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
            },
            {
                path: "/feedbacks",
                element: <Feedbacks/>
            }
        ],
        errorElement: <ErrorPage/>
    }
])

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);

root.render(<RouterProvider router={mainRouter}/>);









