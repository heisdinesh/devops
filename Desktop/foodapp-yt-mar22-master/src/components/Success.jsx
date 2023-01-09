
import tick from "../img/tick.png"
import "./styles/success.css";
const Success = () => {
  return (
  <>
  
  <div className="main">
    <div>
      <img
        src={tick}
        alt="Order Placed SuccessFully"
        className="green-tick"
      />
    </div>
    <div className="hide">
      <p />
      <b><h1>Order Placed Successfully!!!</h1></b>
      <p />
    </div>
  </div>
</>
    )
   
  

}

export default Success;