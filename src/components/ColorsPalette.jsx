import React from 'react'

function ColorsPalette({colors, handleEditColor}) {
    return (
        <div className='colorsPalette'>   
            {colors.map((color)=>{
                return <div key={color} style={{backgroundColor: color}} className='color' onClick={()=>handleEditColor(color)}></div>
            })}
        </div>
    )
}

export default ColorsPalette;
