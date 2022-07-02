import React from 'react'
import "./Construction.css"
import { Typography } from '@mui/material'
import cons from "./cons.jpg"

const Construction = () => {
    return (
        <div>
            <div className="login">
                <div className="innerDiv">
                    {/* <Typography variant="h3" style={{ padding: "2vmax" }}>Website</Typography> */}
                    <Typography variant="h3" style={{ padding: "2vmax" }}>Website Under Construction</Typography>
                    <img alt="Logo" src={cons}/>
                    <Typography variant="h6" style={{ padding: "2vmax" }}>Frontend Github Repository: <a href="https://github.com/">Link</a></Typography>
                    <Typography variant="h6" style={{ padding: "2vmax" }}>Backend Github Repository: <a href="https://github.com/Abhinav200207/Social-Media-Web-App">Link</a></Typography>
                </div>
            </div>
        </div>
    )
}

export default Construction