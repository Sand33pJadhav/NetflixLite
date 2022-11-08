import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './Featured.scss'
import { useNavigate } from 'react-router-dom'

export default function Featured({type}) {

    const navigate = useNavigate();

    const navigateToWatch = () => {
        const trailer='https://www.youtube.com/embed/yQEondeGvKo?autoplay=1';
        navigate('/watch', {
            state: {
              trailer: trailer,
            }
        });
    };

  return (
    <div className='featured'>
        <img
            src='https://wallpapercave.com/dwp2x/wp4286137.jpg'
          alt=''></img>
        {type && (
            <div className="category">
                <span>{type === 'movies' ? "Movies" : "Series"}</span>
                <select name="genre">
                    <option>Genre</option>
                    <option value='all'>All</option>
                    <option value='action'>Action</option>
                    <option value='adventure'>Adventure</option>
                    <option value='animation'>Animation</option>
                    <option value='biography'>Biography</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='documentary'>Documentary</option>
                </select>
                
            </div>
        )}
        <div className="info">
            <img
            src='https://www.freepnglogos.com/uploads/stranger-things-logo-png/stranger-things-coloring-pages-ofertasvuelo-20.png'
            alt=''>
            </img>
            <span className="desc">
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. 
            As they search for answers, the children unravel a series of extraordinary mysteries.
            </span>

            <div className="buttons">
                <button className="play" onClick={navigateToWatch}>
                    <PlayArrow className='playArrow'/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
