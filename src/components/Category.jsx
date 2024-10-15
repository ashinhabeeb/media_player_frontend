import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
// import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoryapi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';



function Category({videoStatusremove}) {

  const [CategoryName, setCategoryName] = useState("")
  const [allcategory, setallcategory] = useState([])
  const [addedCategoryStatus,setaddedCategoryStatus] = useState({})
  const [deletestatus,setdeletestatus] = useState({})
  const [categoryVideoAddStatus,setcategoryVideoAddStatus] = useState({})

  

  console.log(CategoryName)


  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);handleCancel()}
  const handleShow = () => setShow(true);

  const handleCancel = ()=>{
  setCategoryName("")
  }
  const handleAdd = async()=>{
    if(CategoryName){
        const reqbody = {
        Category:CategoryName,
        allVideos:[]
      }
      const result = await addCategoryapi(reqbody)
      console.log(result)
      if(result.status>=200 && result.status<300){
        toast.success("category added successfully")
        handleClose()
        setaddedCategoryStatus(result.data)
      }
      else{
        toast.error("something went wrong")
        handleClose()
      }
    }
    else{
      toast.info('please add a category name')
    }
  
  }

  const getCategory = async()=>{
    const result = await getAllCategoryApi()
    setallcategory(result.data)
  }
 console.log(allcategory)

  const handleDelete = async(id)=>{
   const result = await deleteCategoryApi(id)
    console.log(result)
    if(result.status>=200 && result.status<300){
      setdeletestatus(result.data)
    }
    
  }

   const onDrag = async(e) =>{
    e.preventDefault() //to preven the refresh of component that result the data loss
   }

   const videoDrag =(e,video,Category)=>{
    console.log(video)
    console.log(Category)

    const datashare = {
      Category,
      video
    }

    e.dataTransfer.setData("datashare",JSON.stringify(datashare))
   }


    const videoDrop = async(e,categoryDetails)=>{
    console.log(categoryDetails)


    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails)


    if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id)){
      toast.error("video already in the category")
    }
    else{
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails)
      setcategoryVideoAddStatus(categoryDetails)

      const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails)
      
      if(result.status>=200 && result.status<300){
        toast.success("video added")
      }
      else{
        toast.error("something went wrong")
      }
  
    }
   
   }

  

 // side effect - outside data making changes in output 

  useEffect(()=>{
    getCategory()
  },[addedCategoryStatus,deletestatus,categoryVideoAddStatus,videoStatusremove])

  return (
    <>
    
        <h3>Category</h3>
        <div className="row">
        <Button  onClick={handleShow} variant="warning">Add Category</Button>{' '}
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='border border-dark rounded-3 p-2'>
                <input type="text" placeholder='Category Name ' className='form-control w-100' value={CategoryName} onChange={(e)=>setCategoryName(e.target.value)} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      
        

          { allcategory?.length>0 &&

          allcategory.map((item)=>(
            <div className='border border-secondary w-100 mt-3 p-3 rounded'   dropapable onDragOver={(e)=>onDrag(e)} onDrop={(e)=>videoDrop(e,item)}  >
            <div className='d-flex justify-content-between mb-3'>
             <h5>{item?.Category}</h5>
             <Button onClick={()=>handleDelete(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
           { 
           item?.allVideos?.length>0 && 
           item?.allVideos.map((video)=>(

            <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
             <Videocard video={video} isPresent={true} />
            </div>

           ))
           } 
            

          </div> 
          ))


               
              }
      
    </>
  )
}

export default Category
