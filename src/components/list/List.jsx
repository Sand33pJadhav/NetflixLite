import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './List.scss'

export default function List({type, id, data}) {
  
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef()

    const handleClick = (direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className="list" id={id}>
        <span className="listTitle">{type}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display : !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                {data.map((d, index) => (
                    <ListItem index={index} time={d['time']} ageRestricted={d['ageRestricted']} year={d['year']} name={d['name']} genre={d['genre']} trailer={d['trailer']} thumbnail={d['thumbnail']}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
