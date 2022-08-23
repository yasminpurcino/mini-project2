import React, { useState, useEffect } from 'react'
import axios from 'axios'


export function InputPost(props) {
    const [postId, setPostId] = useState(0);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [review, setReview] = useState('');
    const [imgLink, setImgLink] = useState('');

   

    //  const {register, handleSubmit} = useForm({
    //  defaultValues: props.InputPost
    //      ? props.InputPost
    //      : {
    //          id: "",
    //          titile: "",

    //      },
    //  }); 

    const handleSubmit = ((e) => {
        e.preventDefault()
//        console.log(data);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'https://jsonplaceholder.typicode.com/posts/json' },
        //     body: data,
        //     mode: 'cors'
        // };
        const newPost= { userId:1, picLink:imgLink, title:title, review:review, storyline:body}
        axios.post('http://localhost:3000/reviews', newPost)
          //  .then(response => response.json())
            .then(data =>{console.log(data); setPostId(data.id)});

    });


    return (
        <div >
            <h2> Review</h2>
            <form onSubmit={handleSubmit}>  
                <input type="text" placeholder="Movie's ImgLink" onChange={e => setImgLink(e.target.value)} />
                <input type="text" placeholder="Movie's Name" onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="Storyline" onChange={e => setBody(e.target.value)} />
                <input type="text" placeholder="Review" onChange={e => setReview(e.target.value)} />

                {/* <input type="text" {...register("title")} placeholder="Titlte" name="title"/>
                 <input type="text" {...register("body")} placeholder="Text" name="body"/> */}

                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}