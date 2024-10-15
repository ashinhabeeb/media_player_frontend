// import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVieoStatus}) { //destructuring

    const [videoDetails,setVideoDetails] = useState({
      caption:"",
      imageUrl:"",
      embedLink:""
    })

    const [show, setShow] = useState(false);

    console.log(videoDetails)

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

    const handleCancel = ()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        embedLink:""
      })
    }

    const handleAdd = async()=>{
      const {caption,imageUrl,embedLink} = videoDetails

      if(!caption || !imageUrl || !embedLink){
        toast.info('please fill the form completely')
      }
      else{
        if(videoDetails.embedLink.startsWith('https://www.youtube.com/watch?v=')){
          const embedL =`https://www.youtube.com/watch?v=${videoDetails.embedLink.slice(32,46)}`
  
          const result = await AddVideoApi({...videoDetails,embedLink:embedL})
          console.log(result)
          if(result.status>=200 && result.status<300){
            toast.success('uploaded video succesfully')
            handleClose()
            setAddVieoStatus(result.data)
          }
          else{
            toast.error('somethig went wrong')
          }
         }
         else{
          const embedL =`https://www.youtube.com/embed/${videoDetails.embedLink.slice(-31)}` 
          // setVideoDetails({...videoDetails,embedLink:embedL})
    
          const result = await AddVideoApi({...videoDetails,embedLink:embedL})
          console.log(result)
          if(result.status>=200 && result.status<300){
            toast.success('uploaded video succesfully')
            handleClose()
            setAddVieoStatus(result.data)
          }
          else{
            toast.error('somethig went wrong')
          }
         }
      }
    } 
    

  return (
    <>
      <div className='d-flex align-tems-center' >
        <h1 class='watchHistory'>upload new vidoes</h1>
        <button className='btn pb-3 fs-4' onClick={handleShow}><FontAwesomeIcon icon={faUpload} /></button>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='p-3 '>
                <p>please fill the form</p>
                <form action="" className='p-3 border border-dark rounded mt-3'>
                    <div className='mb-3'>
                        <input type="text" value={videoDetails.caption} placeholder='video Caption' className='form-control'onChange={(e)=>{setVideoDetails({...videoDetails,caption:e.target.value})}} />
                    </div>
                    <div className='mb-3'> 
                        <input type="text" value={videoDetails.imageUrl} placeholder='Videp Image'className='form-control mb-3' onChange={(e)=>{setVideoDetails({...videoDetails,imageUrl:e.target.value})}}  />
                    </div>
                    <div className='mb-3'>
                        <input type="text" value={videoDetails.embedLink} placeholder='Video Url' className='form-control mb-3'onChange={(e)=>setVideoDetails({...videoDetails,embedLink:e.target.value})} />
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} position='top-center' theme="colored" />
    </>
  )
}

export default Add
