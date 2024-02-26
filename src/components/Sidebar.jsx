import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import { Category } from '@mui/icons-material'


const Sidebar = ({selected, setSelected}) => (
    <Stack direction="row" sx={{overflowY:"auto", height:{sx: "auto", md:"95%"},
    flexDirection:{md:"column"}}}>
        {categories.map((category) => (
            <button onClick={() => setSelected(category.name)} className='category-btn' style={{background:category.name === selected && "#FC1503", color:"white"}} key={category.name}>
                <span style={{color: category.name === selected ? "white": "red", marginRight:"15px"}}>{category.icon}</span>
                <span style={{opacity: category === selected ? "1" : "0.8"}}>{category.name}</span>
            </button>
        ))}
    </Stack>
 
)

export default Sidebar