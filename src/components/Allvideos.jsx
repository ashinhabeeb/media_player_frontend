import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi,addVideoToCategoryApi } from '../services/allApi'



function Allvideos({addVideoStatus,setVideostatusremove}) { //destructuring

  const [allVideo,setAllVideo] = useState([])
  
  //state to delete video status
  const [deletevideoStatus,setdeleteVideoStatus] = useState({})

  // side effect
  const getAllvideo = async()=>{
    const result = await getVideoApi()
    // console.log(result)
    setAllVideo(result.data)
  }

  console.log(allVideo)

const ondrop=(e)=>{
  e.preventDefault()
}

const videoDrop = async(e)=>{

  const {Category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(Category,video)

  const newArray = Category.allVideos.filter((item)=>item.id!=video.id)
  const newCategory = {
    Category:Category.Category,
    allVideos:newArray,
    id:Category.id
  }
  const result = await addVideoToCategoryApi(Category.id,newCategory)
  console.log(result)
  if(result.status>=200 && result.status<300){
    setVideostatusremove(result.data)
    
  }
}

// useEffect to handle side effect
    useEffect(()=>{
      getAllvideo()
    },[addVideoStatus, deletevideoStatus])
 
  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>videoDrop(e)}>
    <h4>All videos</h4>
  
    {
    allVideo.length>0?
      <div className="container">
        <div className="row">

          {
          allVideo.map((item)=>(
             <div className="col-md-3 p-3">
             <Videocard video={item} setdeleteVideoStatus={setdeleteVideoStatus} />
             </div>
          ))

          }
           
        </div>
      </div>
     
        :
      

        <div className='container'>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img src="https://th.bing.com/th/id/OIP.iPurgkBT3qhLgxBlv_YVFgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-100 p-3'/>
                <h5 className='text-center text-warning '>No Video Added yet....</h5>
            </div>
            <div className="col-md-4"></div>
        </div>

        </div>

    }
    </div>
  )
}

export default Allvideos
