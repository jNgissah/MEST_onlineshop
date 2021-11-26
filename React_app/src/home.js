import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from './images/1.jpg';
import Image1 from './images/DIY-beard-balm_925x.jpg';
import Image2 from './images/green-t-shirt_925x.jpg';
import Image3 from './images/anchor-bracelet-mens_925x.jpg';
import axios from 'axios';
import "./index.css"



const Mainfunction = () => {


  const [data, setData]= React.useState([])

    const display1 = [
        {image:Image1 , link:"pomade" },
        {image:Image2 , link:"shirt" },
        { image: Image3, link:"souvenir" },
    ]


    const getdata = async () => {
        await axios.get('http://localhost:3001/api/getdata')
            .then(function (response) {
                setData(response.data)
            })
    }


    if (data.length === 0) {
        getdata()
    }
    console.log(data)
    return (
      <div>
            <div>
                <div className="landingpage">
                    <div>
                    <h1 style={{ margin: 0 }}>Nice Watch </h1>
                    <h3 style={{ margin: 0 }}>cheaper price </h3>
                    </div>
                    <button className="button">
                        see more
                    </button>
                </div>
            <img src={Image} width="100%" />
        </div>


            <Grid container spacing={0} style={{ margin: 0, padding: 0, width: "100%" }} >

                {display1.map((list,index)=>
                    <Grid className="taker" item xs={12} lg={4} md={4} style={{ position: "relative", width: "100%" }} >

                        <img src={list.image} width="100%" />
                        <a href={"/"+list.link} className="inner">
                            SHOP NOW
                        </a>




                    </Grid>
                    )
                }
             

            </Grid>




            <Container maxWith="lg" style={{ marginTop: 40 }}>

                <h3 className="title">
                    NEW ARRIVAL
                </h3>

                <Grid container spacing={2}  >
                    {data.filter(bug=>bug.category==="NEW ARRIVAL").map((list,index)=>

                        <Grid className="taker" item xs={12} lg={4} md={4} style={{ position: "relative", width: "100%" }} >

                            <img src={require("../../images/" +list.image+".jpg" ).default} width="100%" />
                            <div className="inner2">

                                <span style={{ fontSize: "20px" }}> { list.item_name} </span>
                                <span className="inner2_button"> {"$" + list.price} </span>
                            </div>




                        </Grid>

                   ) }
                 

                </Grid>




            </Container>
          
              <Container maxWith="lg" style={{ marginTop: 40 }}>

                <h3 className="title">
                    MEN
                </h3>

                <Grid container spacing={2}  >

                    {data.filter(bug => bug.category === "MEN").map((list, index) =>

                        <Grid className="taker" item xs={12} lg={4} md={4} style={{ position: "relative", width: "100%" }}>
                            
                            <img src={require("../../images/" + list.image + ".jpg").default} width="100%" />
                            <div className="inner2">

                                <span style={{ fontSize: "20px" }}> {list.item_name} </span>
                                <span className="inner2_button" >{ "$"+list.price} </span>
                            </div>




                        </Grid>


                    )}

                </Grid>




            </Container>
          
            <br />
            <br />
        </div>
       
    )
}

export default Mainfunction