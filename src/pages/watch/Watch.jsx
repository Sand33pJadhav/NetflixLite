import { ArrowBackOutlined } from '@material-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react'
import './Watch.scss'

export default function Watch({trailer}) {
  const navigate = useNavigate();
  const loc = useLocation();
  
  const navigateToHome = () => {
      navigate('/home')
  };

  if(loc.state.trailer === null){
    trailer = "https://www.youtube.com/embed/yQEondeGvKo?autoplay=1"
  }
  else{
    trailer = loc.state.trailer;
  }

  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined onClick={navigateToHome}/>
            <span onClick={navigateToHome}>Go Back</span>
        </div>
        {/* <video className='video' autoPlay progress controls src='https://f.vimeocdn.com/_videos/home/desktop-masthead-720p-2.mp4'/> */}
        <iframe width="1000" height="700" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
