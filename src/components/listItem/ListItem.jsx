import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './ListItem.scss'
import { useNavigate } from 'react-router-dom';

export default function ListItem({index, time, ageRestricted, year, name, genre, trailer, thumbnail}) {
  
  const [isHover, setIsHover] = useState(false);
  //const trailer = "https://www.youtube.com/embed/yQEondeGvKo?autoplay=1";
  const navigate = useNavigate();
  const watchTrailer = () => {
    //<Watch trailer={trailer}/>
    navigate('/watch', {
      state: {
        trailer: trailer,
      }
    })
  }

  return (
    <div className='listitem'
          onMouseEnter={()=> setIsHover(true)}
          onMouseLeave={()=> setIsHover(false)}
          style={{left: isHover && index * 225 - 50 + index * 2.5}}
          
          >
        {/* <img src='https://wallpapercave.com/dwp2x/wp1839582.jpg' alt=''></img> */}
        <img src={thumbnail} alt=''></img>
        {isHover && (
          <>

          <iframe width="1000" height="700" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <div className="itemInfo" onClick={watchTrailer}>
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUpAltOutlined className='icon'/>
              <ThumbDownAltOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>{time}</span>
              <span className='limit'>{ageRestricted}</span>
              <span>{year}</span>
            </div>
            <div className="desc">
            {name}
            </div>
            <div className="genre">
            {genre}
            </div>
          </div>
          </>
        )}
    </div>
  );
}

// // Series


// [
//   {
//     time: '3 hour 13 min',
//     ageRestricted: '+18',
//     year: '2021',
//     name: 'Money Heist',
//     genre: 'Thriller',
//   },
//   {
//     time: '1 hour 30 mins',
//     ageRestricted: '+16',
//     year: '2020',
//     name: 'Stranger Things',
//     genre: 'Horror',
//   },
//   {
//     time: '2 hour 30 mins',
//     ageRestricted: '+16',
//     year: '2021',
//     name: 'Good doctor',
//     genre: 'Sci-Fi',
//   },
//   {
//     time: '2 hour 45 mins',
//     ageRestricted: '+18',
//     year: '2021',
//     name: 'Peaky Blinders',
//     genre: 'Thriller',
//   },
//   {
//     time: '2 hour 12 mins',
//     ageRestricted: '+18',
//     year: '2020',
//     name: 'Breaking Bad',
//     genre: 'Sci-Fi',
//   },
//   {
//     time: '2 hour 12 mins',
//     ageRestricted: '+18',
//     year: '2012',
//     name: 'Death Note',
//     genre: 'Drama',
//   },
//   {
//     time: '1 hour 30 mins',
//     ageRestricted: '+18',
//     year: '1997',
//     name: 'Kota Factory',
//     genre: 'Drama',
//   },
//   {
//     time: '3 hour 12 mins',
//     ageRestricted: '+16',
//     year: '2020',
//     name: 'Dark',
//     genre: 'Sci-Fi',
//   },
//   {
//     time: '2 hour 30 mins',
//     ageRestricted: '+14',
//     year: '2018',
//     name: 'Vampire Diaries',
//     genre: 'Horror',
//   },
//   {
//     time: '10 hour 12 mins',
//     ageRestricted: '+18',
//     year: '2013',
//     name: 'Vikings',
//     genre: 'Action',
//   },
// ]