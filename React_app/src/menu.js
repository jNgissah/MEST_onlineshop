import React from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid';
import Drawer from './drawer';
import "./index.css"



const Todolist = () => {


   

    return (
        <div>

            <div className="menu1" >
            <Grid container spacing={0} style={{ margin: 0, margin:0 }}>
                    <Grid item lg={4} md={4}>
                        <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px", color:"white" }}> <span style={{color:"red"}}>e</span>Sale</p>
                </Grid>

                <Grid item lg={8} md={8} >
                    <ul style={{ float: "right" }}>
                        <li><a href="#"> NEW ARRIVAL </a> </li>
                        <li><a href="#"> MEN </a></li>
                        <li><a href="#"> WOMEN </a></li>
                        <li><a href="#"> TRAVEL </a></li>
                        <li> <button style={{ padding: 5, border: "none" }}> Sign Up  </button></li>
                        <li> <button style={{ padding: 5, border: "none", color:"white", backgroundColor:"red" }}> Sign Up </button></li>
                        <li> <ShoppingCart style={{fontSize:"20px"}} /> </li>
                    </ul>
                </Grid>
          
          </Grid>
         </div>

            <div className="menu2">
                <Drawer/>
            </div>

        </div>

    )
}

export default Todolist