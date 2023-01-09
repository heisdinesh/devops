import Success from "./Success"
import "./styles/payment.css";
import {Route, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
 

const Payment = ({route}) => {

  let navigate = useNavigate();
  
  

  const location = useLocation();
  // console.log(location.state.total);
  return (
      <>
    <div className="app-container">
    <div className="top-box">
      <p>PAYMENT DETAILS</p>
      <div className="middle-box">
        <h1>
              <span>$</span>
        </h1>
        <p>Pay To CodeBreaker Ltd.</p>
      </div>
      <div className="radio-checkbox">
        <label>
          <input
            className="pointer"
            type="radio"
            defaultValue="Cash"
            name="money"
          />
          Cash on Delivery
        </label>
        <div>
              <button class = "Proceedbutton" onClick={() => navigate("/Success")}>
                
            
              <b>
                <h2>Proceed</h2>
              </b>
          </button>
        </div>
      </div>
    </div>
      </div>
      </>
  )
}

export default Payment;