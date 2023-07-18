import React from 'react';
import { Stack, selectClasses } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ( {selectCat, setSelectCat} ) => (
    <Stack 
    direction ="row"
    sx={{
        overflow: 'auto',
        height:{ sx : 'auto ' , md: '95%'},
        flexDirection: { md : 'column' }
    }}>
    {categories.map((category) => (
        <button
            className='category-btn'
            onClick={ () => setSelectCat(category.name)}
            style = {{
                background: category.name ===  selectCat && '#FC1503', color :'#fff'
            }}
            key={category.name}>
            
        <span style = {{ color: category.name === selectCat ? 'white' : 'red' , marginRight : '15px' }}>{category.icon}</span>
        <span style = {{ opacity:category.name === selectCat ? '1' : '0.8'}}>{category.name}</span>

        </button>
       
    ))}

    </Stack>
  )


export default SideBar