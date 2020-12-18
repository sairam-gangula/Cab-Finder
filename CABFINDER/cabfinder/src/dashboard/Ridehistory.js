import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { GlobalContext, GlobalState } from "../context/GlobalState";
// import { rideGlobalContext } from "../context/GlobalState";
import axios from "axios";
// import AppReducer from "../context/AppReducer";


function Ridehistory() {

  const { rideDetails } = useContext(GlobalContext);
  const [ridez, setRidez] = useState({data:{}});
  useEffect(() => {
    async function fetchrData() {
      const  userides = await axios.get("/crides");
      console.log(userides);
      setRidez(userides);
      // console.log(ridez);
    }
    fetchrData();
  }, []);
  return (
    <div style={{ marginTop: "50px", opacity: "80%" }}>
      <h3
        style={{
          marginLeft: "650px",
          marginTop: "50px",
          fontSize: "25px",
          backgroundColor: "#FB9403",
        }}
        className="badge"
      >
        Your Ride History
      </h3>
      <h1>
        {" "}
        {rideDetails.map((rideDetail) => (
          <div className="row-md-100 mt-5">
            <div className="col-md-1000">
              <div
                style={{
                  marginLeft: "350px",
                  width: "800px",
                  backgroundColor: "#FB9403",
                }}
                className="card card-body "
              >
                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Ride ID:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {/* {rideDetail.id} */}
                  {ridez.data.ID}
                </h6>

                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Start State:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                {ridez.data.ststreet}
                </h6>

                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  start city
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                {ridez.data.stcity}
                </h6>

                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  start street
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                {ridez.data.ststreet}
                </h6>
                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  End state
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {ridez.data.endstate}
                </h6>

                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  End city:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "10px" }}>
                  {ridez.data.endcity}
                </h6>
                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                  
                > End Street:
                </label>
                 <h6 style={{ fontSize: "25px", marginBottom: "10px" }}>
                  
                  {ridez.data.endstreet}</h6>
                
                <label
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                > Type of car chosen:
                 </label>
                 <h6 style={{ fontSize: "25px", marginBottom: "10px" }}>
                  
                  {ridez.data.type}</h6>
               
              </div>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
}

export default Ridehistory;
