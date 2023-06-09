import React, { useEffect, useRef, useState } from "react";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import "./styles/ProductDesc.css";

import product from "../assets/product.png";

import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";

import { AiOutlineAudio } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { emailSubjectAction } from "../actions/ai/emailSubjectAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { addSubjectAction } from "../actions/backend/emailSubjectAction";
import {useNavigate} from "react-router-dom"


const EmailSubject = () => {
  // state to keep track of number of output
  const [productName, setProductName] = useState([])
  const [emailDesc, setEmailDesc] = useState([])
  const myDiv = useRef(null)
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()
  const [message, setMessage] = useState("")
  const navigate = useNavigate()


  const dispatch = useDispatch()
  const emailSubject = useSelector((state) => state.emailSubject)
  const {loading, error, success, email} = emailSubject

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveSubject = useSelector((state)=>state.saveSubject)
  const {loading:subjectLoading,error:subjectError,success:subjectSuccess} = saveSubject

  useEffect(() => {
      dispatch(getProjectAction())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(emailDesc)
   dispatch(emailSubjectAction(productName,emailDesc))

  }

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addSubjectAction(divData,projectId))
    setMessage("Saved successfully")
    setTimeout(()=>{
      setMessage("")
    },4000)
    navigate('/allEmailSubject')
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
    //
  };
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="instagram-ad inner-page-container">
              {/* header */}
              <ProjectHeader
                image={product}
                title="Email Subject"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                
                  {/* product description */}
                  <p className="product-p">Product Name*</p>
                  <textarea
                   onChange={(e)=>setProductName(e.target.value)}
                   value={productName}
                    name=""
                    id=""
                    style={{
                      display: "block",
                      width: "100%",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  ></textarea>

                    <p className="product-p">Email Description*</p>
                  <textarea
                   onChange={(e)=>setEmailDesc(e.target.value)}
                   value={emailDesc}
                    name=""
                    id=""
                    style={{
                      display: "block",
                      width: "100%",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  ></textarea>             
                  <div
                    className="mic"
                    style={{
                      display: "block",
                      textAlign: "right",
                      margin: "10px 0",
                    }}
                  >
                    {isAudio ? (
                      <div className="audio">
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <RiVoiceprintFill />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <CiPause1 />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <FiStopCircle />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsAudio(false);
                          }}
                        >
                          <HiOutlinePencil />
                        </button>
                      </div>
                    ) : (
                      <AiOutlineAudio
                        className="icon-div mic-icon"
                        onClick={handleAudio}
                      />
                    )}
                  </div>
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Email Subject Line
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                <form onSubmit={handleForm}>
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}

                {subjectLoading && <Loader />}
                {subjectSuccess && <div className='bar success'>{message}</div>}
                {email && email.map((you)=>(
                  <div className="sec-1" contentEditable suppressContentEditableWarning={true} ref={myDiv}>
                  <BCDIcons />
                  {you.generated_lines.map((d)=>(
                                        
                    <p>
                     {d}
                    </p>
                    
                    ))}
                    </div>
                    ))}
                    <br />
                      <p className="product-p">Select Project*</p>
                        <select
                      onChange={(e)=>setProjectId(e.target.value)} 
                      value={projectId}
                      name=""
                      id=""
                      className="select"
                      style={{
                        display: "block",
                        width: "100%",
                        background: "var(--primary-blue)",
                        borderRadius: "var(--border-radius-xs)",
                        border: "none",
                        outline: "none",
                        height: "10%",
                        margin: "5px 0",
                        padding: "5px",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "rgba(0, 22, 51, 0.5)",
                      }}
                      >
                      <option value="" selected disabled hidden>Select project</option>
                      
                      {
                        project && project.map((pro, i)=>(
                          <option key={i} value={pro.id}>{pro.name}</option>
                          ))
                        }
                        </select>
                      <br />
                      <button className="article-btn" style={{ fontSize: "14px" }}>
                      Save Article Rewriter
                      </button>
                      </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmailSubject;
