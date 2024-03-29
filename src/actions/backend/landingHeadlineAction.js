import axios from "axios";
import { ADD_LANDINGHEADLINE_FAILED, ADD_LANDINGHEADLINE_REQUEST, ADD_LANDINGHEADLINE_SUCCESS, DELETE_LANDINGHEADLINE_FAILED, DELETE_LANDINGHEADLINE_REQUEST, DELETE_LANDINGHEADLINE_SUCCESS, GETONE_LANDINGHEADLINE_FAILED, GETONE_LANDINGHEADLINE_REQUEST, GETONE_LANDINGHEADLINE_SUCCESS, GET_LANDINGHEADLINE_FAILED, GET_LANDINGHEADLINE_REQUEST, GET_LANDINGHEADLINE_SUCCESS } from "../../constant/backend/LandingHeadlineConstant";


export const addLandingHeadlineAction = (headline,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LANDINGHEADLINE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPageHeadline`, {headline,project_id},config)
        dispatch({type:ADD_LANDINGHEADLINE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLandingHeadlineAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LANDINGHEADLINE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPageHeadline`,config)
        dispatch({type:GET_LANDINGHEADLINE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLandingHeadlineAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LANDINGHEADLINE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPageHeadline/${id}`,config)
        dispatch({type:GETONE_LANDINGHEADLINE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLandingHeadlineAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LANDINGHEADLINE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPageHeadline/${id}`,config)
        dispatch({type:DELETE_LANDINGHEADLINE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

