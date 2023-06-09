import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneProductDescAction } from "../../actions/backend/productDescAction";

const ProductDescMore = () => {

  const dispatch = useDispatch()
  const getOneProductDesc = useSelector((state)=>state.getOneProductDesc)
  const {loading,error,productDesc} = getOneProductDesc

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneProductDescAction(id))
  }, [])
  
 

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {productDesc && productDesc.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.product_description}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_productDesc">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDescMore;
