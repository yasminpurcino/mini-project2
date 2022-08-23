import React, { useReducer, useState, useEffect } from 'react';
//import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
export const Home = () => {
    const [list, setList] = useState([]);
    const TextTruncate = require('react-text-truncate');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectReview, setSelectReview] = React.useState(0);
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:3000/reviews')
            .then(response => { console.log(response.data); setList(response.data) })
            .catch(error => console.error(error));
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    const renderModal = (post) => {
        console.log(post)
        return ( <div>
            {
                post ?
                    <div key={post.id} style={{ width: 100, height: 100, backgroundColor: 'white' }}>
                        <h1>{post.id}</h1>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                    : null
            }</div>
        )
    }
    return (
        <div className='home'>
            <img src="https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/45/1600x800/landscape-1509983908-best-movies-2017.jpg?resize=980:*"
                className="imgHome" alt="movieImages" />
            <br></br>
            <h1 className="title">NEW REVIEWS</h1>
            {console.log(list)}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                {list.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Card sx={{ maxWidth: 345, margin: 3 }} elevation={5}>
                            <CardMedia
                                component="img"
                                className="imgReview"
                                image={item.picLink}
                                alt="picture"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="storyline" color="text.secondary"> <b>Storyline:</b>
                                    <br></br>
                                    <TextTruncate line={3} element="span" truncateText="…" text={item.storyline}
                                        textTruncateChild={<button onClick={() => { setSelectReview(item.id); setIsOpen(true) }} href="#" className="button">Read More</button>} />
                                </Typography>
                                <br></br>
                                {/* <Typography variant="review" color="text.secondary"> <b>Review:</b>
                  <br></br>
                  {item.review}
                </Typography> */}
                            </CardContent>
                        </Card>
                    </Grid>
                )
                )}
                <Modal isOpen={modalIsOpen} onClose={() => setIsOpen(false)} center>
                    <h2>Simple centered modal</h2>
                    {console.log(selectReview)}
                  <div>{renderModal(list[selectReview-1])}</div>
                </Modal>
            </Grid>  </div>
    )
}



//Jurassic Park
//https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_480x.progressive.jpg?v=1573584652















