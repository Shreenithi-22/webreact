import React from 'react'
import "./css/Layout.css";
import {Outlet,Link} from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/">Home</Link></li>
                <li>
                    <Link className="nav-link" to="/about">About</Link></li>
                <li>
                    <Link className="nav-link" to="/contact">Contact</Link></li>
                <li>
                    <Link className="nav-link" to="/service">Service</Link></li>
                <li>
                    <Link className="nav-link" to="/counter">Counter</Link></li>   
                <li>
                    <Link className="nav-link" to="/effect">Effect</Link></li>   
                <li>
                    <Link className="nav-link" to="/reducer">Reducer</Link></li>   
                <li>
                    <Link className="nav-link" to="/callbacks">Callbacks</Link></li>     
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
