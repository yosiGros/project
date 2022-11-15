import React from 'react'
import { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const myUser = JSON.parse(localStorage.getItem('user'))
console.log(myUser.id);
const Photos = () => {
    const [photos, setPhotos] = useState([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${myUser.id}/photos`)
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [])
  
    return (<div>
        <h1>photos:</h1>
        <Carousel>
            {photos.map((item, idx) =>
                
                    <div key={idx} style={{ "border": "solid 1px",  "display": "inline-block"}}>
                   <img loading='lazy' className="legend" src={item.thumbnailUrl}/>
                   </div>
              )}
               </Carousel> 
        
    </div>)

}

export default Photos;