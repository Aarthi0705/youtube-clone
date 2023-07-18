import React,  { useState , useEffect } from 'react'
import  { useParams } from 'react-router-dom';
import  { Box } from '@mui/material';
import  { Videos, ChannelCard } from './';
import { fetchAPI } from '../utils/fetchAPI';

const ChannelDetail = () => {
  const [ channelDetail, setchannelDetail ] = useState(null);
  const  [ videos, setVideos ] = useState([])
  const { id } = useParams();
  console.log(channelDetail);
  useEffect(() =>{
    fetchAPI(`channels?part="snippet&id=${id}`)
    .then((data) => setchannelDetail(data?.items[0]));
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  },[id])
  return (
    <Box minHeight = "95vh">
    <Box>
      <div
        style={{
          height:'300px',
          background: ' radial-gradient(circle, rgba(222,174,238,1) 0%, rgba(136,171,212,1) 100%)',
           zIndex: 10,
        }}
      />
       <ChannelCard channelDetail={channelDetail} 
       marginTop='-110px'
       />
    </Box>
    <Box display="flex" p="2">
    <Box sx ={{ mr : { sm : '100px'}}}/>
    <Videos videos={videos} />
  
    </Box>
    </Box>
  )
}

export default ChannelDetail