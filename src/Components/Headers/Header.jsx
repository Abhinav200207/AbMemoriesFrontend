import React, { useState } from "react";
import { Home, HomeOutlined, Add, AddOutlined, SearchOutlined, Search, AccountCircle, AccountCircleOutlined, } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [tab, setTab] = useState(window.location.pathname);
    return (
        <div className="header">
            <Link to="/" onClick={() => setTab("/")}>
                {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
            </Link>

            <Link to="/ceratePost" onClick={() => setTab("/ceratePost")}>
                {tab === "/ceratePost" ? <Add style={{ color: "black" }} /> : <AddOutlined />}
            </Link>

            <Link to="/search" onClick={() => setTab("/search")}>
                {tab === "/search" ? <Search style={{ color: "black" }} /> : <SearchOutlined />}
            </Link>

            <Link to="/userAccount" onClick={() => setTab("/userAccount")}>
                {tab === "/userAccount" ? <AccountCircle style={{ color: "black" }} /> : <AccountCircleOutlined />}
            </Link>
        </div>
    );
};