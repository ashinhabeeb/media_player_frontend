import { commonApi } from "./commonApi"
import { serverURl } from "./serverURL"

//add video
export const AddVideoApi = async(reqbody)=>{
    return await commonApi('POST',`${serverURl}/videos`,reqbody)
}
//get all video
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverURl}/videos`)
}

//add video to video history
export const addVideoHsitoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverURl}/history`,reqbody)
}

//api to get video from history
export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverURl}/history`)
}

//api to delete a video from allvideos
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverURl}/videos/${id}`)
}

//api to delete video from history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverURl}/history/${id}`)
}

//api to add category api
export const addCategoryapi = async(reqbody)=>{
    return await commonApi('POST',`${serverURl}/category`,reqbody)
}

//api to get category

export const getAllCategoryApi = async()=>{
    return await commonApi('GET',`${serverURl}/category`)
}

//api to delete
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverURl}/category/${id}`)
}

//api to add videoDetials to a category

export const addVideoToCategoryApi = async(id,reqbody)=>{
    return await commonApi('PUT',`${serverURl}/category/${id}`,reqbody)
}

//api to delte video from category 

// export const categoryVideoDeleteAPi = async(id)=>{
//     return await commonApi('DELETE',`${serverURl}/category/${id}`)
// }