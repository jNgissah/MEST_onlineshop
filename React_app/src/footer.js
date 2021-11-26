import React from 'react';
import Grid from '@mui/material/Grid';
import "./index.css"



const Mainfunction = () => {



    return (
        <div className="footer" >
            <Grid container spacing={0}>

                <Grid lg={3} xs={12} md={4} >
                    <p>
                        <span style={{ color: "red" }}>e</span>Sale
                </p>
                </Grid>
                <Grid lg={4} xs={12} md={4} style={{fontSize:"12px", marginTop:5}}>
                    <p style={{textAlign:"center"}}>Cpyright  2018 MonsterMun, Inc</p>
                </Grid>

                <Grid lg={5} xs={12} md={4} style={{paddingTop:20}} >
                    
                    <a href="#" > Policy and Cookie </a>
                        <a href="#" >Policy intellectual </a>
                        <a href="#" >Property </a>
                    
                </Grid>

           </Grid>

        </div>
    )
}

export default Mainfunction