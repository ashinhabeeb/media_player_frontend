import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'


function Home() {

  const [addVideoStatus,setAddVieoStatus] = useState({})
  const [videoStatusremove , setVideostatusremove] = useState({})

  return (
    <>
    <div className='d-flex p-md-5 p-3'>
      <Add setAddVieoStatus={setAddVieoStatus} />
      <Link to={'/watchhistory'} className='ms-auto' style={{textDecoration:'none'}}><h5><span class='watchHistory'>Watch History</span>
      <FontAwesomeIcon icon={faClockRotateLeft} className="ms-2" /></h5></Link>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <Allvideos addVideoStatus={addVideoStatus}  setVideostatusremove={setVideostatusremove} />
        </div>
        <div className='col-md-3'>
          <Category  videoStatusremove={videoStatusremove} />

        </div>
      </div>
    </div>
    </>
  )
}

export default Home