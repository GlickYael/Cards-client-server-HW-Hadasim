import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";



function Card({ card }) {
    return (
        <div className='card' style={{ backgroundColor: `${card.color}` }}>
            <p>{card.text}</p>
            <div>
                <button><FaRegCircle /></button>
                <button><IoMdTrash /></button>
            </div>

        </div>
    )
}

export default Card
