import axios from "axios";
import { ADD_BLOGWRITER_FAILED, ADD_BLOGWRITER_REQUEST, ADD_BLOGWRITER_SUCCESS, DELETE_BLOGWRITER_FAILED, DELETE_BLOGWRITER_REQUEST, DELETE_BLOGWRITER_SUCCESS, GETONE_BLOGWRITER_FAILED, GETONE_BLOGWRITER_REQUEST, GETONE_BLOGWRITER_SUCCESS, GET_BLOGWRITER_FAILED, GET_BLOGWRITER_REQUEST, GET_BLOGWRITER_SUCCESS, UPDATE_BLOGWRITER_FAILED, UPDATE_BLOGWRITER_REQUEST, UPDATE_BLOGWRITER_SUCCESS } from "../../constant/backend/blogWriterContant";

export const blogWriterAddAction = (article,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGWRITER_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/blogArticle`, {article,project_id},config)
        dispatch({type:ADD_BLOGWRITER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getBlogWriterAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_BLOGWRITER_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/blogArticle`,config)
        dispatch({type:GET_BLOGWRITER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_BLOGWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const getOneBlogAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_BLOGWRITER_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/blogArticle/${id}`,config)
        dispatch({type:GETONE_BLOGWRITER_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_BLOGWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteBlogAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_BLOGWRITER_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/blogArticle/${id}`,config)
        dispatch({type:DELETE_BLOGWRITER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_BLOGWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const updateBlogAction = (article) => async(dispatch,getState) => {
    try {
        dispatch({type:UPDATE_BLOGWRITER_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.put(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/blogArticle/${article}`,{article},config)
        dispatch({type:UPDATE_BLOGWRITER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: UPDATE_BLOGWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}
