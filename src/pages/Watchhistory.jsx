import { faHouse,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'



function Watchhistory() {

  const [allHistory,setallhistory] = useState([])
  const [deletStatus,setDeleteStatus] = useState(false)

    const getAllHistryVideos = async()=>{
    const result = await getAllVideoHistoryApi()
    setallhistory(result.data)
  }
    // console.log(allHistory)

    const handleDeleteHistory = async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result)
    if(result.status>=200 && result.status<300){
      setDeleteStatus(true)
    }

  }

  useEffect(()=>{
    getAllHistryVideos()
    setDeleteStatus(false)
  },[deletStatus])


  return (
    <div className='p-4'>
      <div className='d-flex mt-5'>
        <h4>Watch History</h4>
        <Link to={'/Home'} style={{textDecoration:'none'}} className="ms-auto"><h5><FontAwesomeIcon icon={faHouse} /><span class='Home'>Back Home</span></h5></Link>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-1"></div>
          <div className="col-md-10 p-3 table-responsive">
           {
            allHistory.length>0?         
               <table className='table mt-5'>
              <thead>
                <tr>
                  <th>SL.NO</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>Timestamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                 
                  allHistory?.map((item,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td>{item?.url}</td>
                  <td>{item?.time}</td>
                  <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
                  ))
                }
              </tbody>

            </table>
            :

            <h2 className='text-center text-warning '>No watch history</h2>}
          </div>

          <div className="col-md-1"></div>
       </div>

      </div>
    </div>
  )
}

export default Watchhistory
