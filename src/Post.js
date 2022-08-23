import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Truncate from 'react-truncate';

export const Post = () => {
    const [list, setList] = useState([]);

    // const truncateString = () (string = '', maxLength = 50) =>    
    // string.length > maxLength 
    //   ? `${string.substring(0, maxLength)}…`
    //   : string

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:3000/reviews')
            .then(response => { console.log(response.data); setList(response.data) });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)

    }, []);
    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {list.map((item) => (

                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>


                        <CardMedia
                            component="img"
                            image={item.picLink}
                            alt="picture"
                        />
                        <CardContent> 


                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}

                            </Typography>
                            <Typography variant="storyline" color="text.secondary"> <b>Storyline:</b>
                                <br></br>
                                {item.storyline}
                            </Typography>
                            <br></br>
                            <Typography variant="review" color="text.secondary"> <b>Review:</b>
                                <br></br>
                                {item.review}
                            </Typography>

                        </CardContent>

                    </Card>
                    </Grid>
                    )
            )}
                </Grid>
            )
}



            {/* <div className="card text-center m-3">
    <h5 className="card-header">Display Posts: </h5>
    <div className="card-body">
        <ul> {list.map(item => { if (item.id <= 5) return <li key={item.id} >{item.title} ; {item.body} </li> })}

        </ul>
    </div>
</div> */}
