import { ADD_BLOGWRITER_FAILED, ADD_BLOGWRITER_REQUEST, ADD_BLOGWRITER_SUCCESS, DELETE_BLOGWRITER_FAILED, DELETE_BLOGWRITER_REQUEST, DELETE_BLOGWRITER_SUCCESS, GETONE_BLOGWRITER_FAILED, GETONE_BLOGWRITER_REQUEST, GETONE_BLOGWRITER_SUCCESS, GET_BLOGWRITER_FAILED, GET_BLOGWRITER_REQUEST, GET_BLOGWRITER_SUCCESS, UPDATE_BLOGWRITER_FAILED, UPDATE_BLOGWRITER_REQUEST, UPDATE_BLOGWRITER_SUCCESS } from "../../constant/backend/blogWriterContant";

export const addBlogWriterReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_BLOGWRITER_REQUEST:
            return {loading:true}
        case ADD_BLOGWRITER_SUCCESS:
            return {loading:false, success:true}
        case ADD_BLOGWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getBlogWriterReducer = (state={blogs:[]}, action) => {
    switch (action.type) {
        case GET_BLOGWRITER_REQUEST:
            return {loading:true}
        case GET_BLOGWRITER_SUCCESS:
            return {loading:false, success:true, blogs:action.payload}
        case GET_BLOGWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneBlogWriterReducer = (state={blog:[]}, action) => {
    switch (action.type) {
        case GETONE_BLOGWRITER_REQUEST:
            return {loading:true}
        case GETONE_BLOGWRITER_SUCCESS:
            return {loading:false, success:true, blog:action.payload}
        case GETONE_BLOGWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteBlogWriterReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_BLOGWRITER_REQUEST:
            return {loading:true}
        case DELETE_BLOGWRITER_SUCCESS:
            return {loading:false, success:true}
        case DELETE_BLOGWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const updateBlogWriterReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_BLOGWRITER_REQUEST:
            return {loading:true}
        case UPDATE_BLOGWRITER_SUCCESS:
            return {loading:false, success:true}
        case UPDATE_BLOGWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}