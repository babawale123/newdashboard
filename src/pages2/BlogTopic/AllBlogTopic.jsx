import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlogTopicAction, getBlogTopicAction } from "../../actions/backend/blogTopicAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllBlogTopic = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getBlogTopic = useSelector((state)=>state.getBlogTopic)
  const {loading,error,topics} = getBlogTopic

  const deleteBlogTopic = useSelector((state)=>state.deleteBlogTopic)
  const {loading:deleteLoading,error:deleteError,success} = deleteBlogTopic

  const saveBlogTopic = useSelector((state)=>state.saveBlogTopic)
  const  {loading:articleLoading,error:articleError} = saveBlogTopic

  useEffect(() => {
    dispatch(getBlogTopicAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteBlogTopicAction(id))
    setMessage("Item deleted Successful")
    setTimeout(()=>{
        setMessage("")
    },4000)
    }
   
}

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
          <Link className="article-btn"  
          style={{ 
            fontSize: "14px",
            width:"20%",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            padding:"5px",
            
        }} 
        to='/blogtopic'>Add Blog Topic</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {articleError && <div className=' bar error'>{articleError}</div>}
               {error && <div className=' bar error'>{error}</div>}

               {topics && topics.slice(0,10).map((blog)=>(
                <div className="card" key={blog.id}>
                        <p>{blog.topic.slice(0,300)}....</p>
                        <Link to={`/all_blog_topic/${blog.id}`}>Read more</Link><br/>
                        <a onClick={()=>handleDelete(blog.id)}>Delete</a>
                        
                </div>
                ))}
              </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllBlogTopic;
