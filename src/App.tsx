import NewAccount from "./Pages/NewAccount";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Login from "./Login";
import React, {useState} from "react";
import Navigation from "./Navigation";
import CheckOut from "./Pages/CheckOut";
import Inventory from "./Pages/Inventory";

function App() {
    const [isLoggedIn, setLoginStatus] = useState(false);

    //https://reactrouter.com/docs/en/v6/getting-started/tutorial
    return (
        <Router>
            <Navigation isLoggedIn={false}/>

            <Routes>
                <Route path="/login" element={<Login onLogin={() => setLoginStatus(true)}/>}/>
                <Route path="/signup" element={<NewAccount/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
            </Routes>
        </Router>
    )
}

export default App
