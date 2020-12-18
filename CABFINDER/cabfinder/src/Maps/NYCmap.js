import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import * as CORS from "../data/nyctrips.json";
import { GlobalContext, GlobalState } from "../context/GlobalState";
import axios from "axios";

export default function Mockmap() {
  const [viewport, setViewport] = useState({
    latitude: 40.769,
    longitude: -73.9549,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const { rideDetails } = useContext(GlobalContext);
  const [coordinate, setCoordinate] = useState({ data: {} });
  var cd = 0.0;
  useEffect(() => {
    async function fetchrData() {
      cd = await axios.get("/coordinate");
      console.log(cd);
      setCoordinate(cd);
      // console.log(coordinate);
    }
    fetchrData();
  }, []);

  const [best, setBest] = useState({ data: {} });
  var bd = "";
  useEffect(() => {
    async function fetchrData() {
      bd = await axios.get("/bestdriver");
      console.log(bd);
      setBest(bd);
      // console.log(coordinate);
    }
    fetchrData();
  }, []);
  const [selectedCORS, setselectedCORS] = useState(null);
  const [route, setRoute] = useState();
  const [step, setStep] = useState([]);
  const [payment, setPayment] = useState(0);

  // const payment = distance*8;
  var temp1 = cd.lon + "," + cd.lat;

  const url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/-73.96595994094105,40.759146427722946;" +
    "-73.98370465792024,40.722932618685746," +
    "?geometries=geojson&steps=true&access_token=" +
    "pk.eyJ1Ijoic2F0aWlpc2hoaCIsImEiOiJja2llc2htZDUwMjE1MzBtcHJpMXF6YmV6In0._l-kT3vk_xXaqAIjEqh0gQ";
  useEffect(async () => {
    const jsonResponse = await axios.get(url);
    console.log(jsonResponse);
    var distance = jsonResponse.data.routes[0].distance * 0.001;
    var duration = jsonResponse.data.routes[0].duration / 60;
    var steps = jsonResponse.data.routes[0].legs[0].steps;
    var coords = jsonResponse.data.routes[0].geometry;
    setStep(steps);
    setRoute(coords);
    setPayment(distance * 8 + 4 * duration);
  }, []);


  // , -73.99587581076469
  // 40.759146427722946, -73.96595994094105
  // 40.722932618685746, -73.98370465792024

  console.log(payment);

  const data = {
    type: "Feature",
    geometry: route,
  };
  // var radius = $svg.getAttribute('width') / 2;
  // map.featuresAt({x: center.x, y: center.y}, {
  //   radius: radius,
  //   includeGeometry: true,
  //   layer: pois
  // }, function(err, features) {
  //  if (err || !features.length) {
  //     popup.remove();
  //     return;
  // }})

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2F0aWlpc2hoaCIsImEiOiJja2llc2htZDUwMjE1MzBtcHJpMXF6YmV6In0._l-kT3vk_xXaqAIjEqh0gQ"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {CORS.features.map((COR) => (
          <Marker key={COR.id} latitude={COR.Lat} longitude={COR.Lon}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setselectedCORS(COR);
              }}
            >
              <img src="/images/ticon.png" />
            </button>
          </Marker>
        ))}
        
          {CORS.features.map((CORA)=>{
            if(CORA.name=="Marleen")
            <Marker key ={CORA.id}
                    latitude={CORA.Lat}
                    longitude={CORA.Lon}>
                      <button
                      onClick={(e) => {
                        e.preventDefault();
                        setselectedCORS(CORA);
                      }}>
                          <img src="/images/start.png"
                          style={{width:"100px",
                          height:"100px"}}/>
                      </button>
            </Marker>
           
            
          })}
          {/* <img src="/images/start.png"
              style={{width:"100px",
                      height:"100px"
            }} */}
             

        {selectedCORS ? (
          <Popup
            latitude={selectedCORS.Lat}
            longitude={selectedCORS.Lon}
            onClose={() => {
              setselectedCORS(null);
            }}
          >
            <div style={{ backgroundColor: "black" }}>
              {/* <h6>Date/Time:{selectedCORS.DT}</h6> */}
              <h6>id:{selectedCORS.id}</h6>
              <h6>name:{selectedCORS.name}</h6>
              <h6>Rating:{selectedCORS.Rating}</h6>
              <h6>Date:{selectedCORS.date}</h6>
              
              {/* <h6>Time:{selectedCORS.time}</h6> */}
              {/* <p>{selectedCORS.properties.Description}</p>  */}
            </div>
          </Popup>
        ) : null}

        <Source id="route1" type="geojson" data={data} />
        <Source id="route2" type="geojson" data={selectedCORS} />
        {/* <Marker 
key={coordinate.data.}
longitude={coordinate.data.lon}
latitude = {coordinate.data.lat}
>
<img src ="/images/start.png" />
</Marker> */}

        <Layer
          id="route"
          type="line"
          source="route1"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#1db7dd",
            "line-width": 8,
            "line-opacity": 0.8,
          }}
        />
        <Layer
          id="route"
          type="circle"
          source="route2"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
            paint={{
              'circle-radius':{
                'base':1.75,
                'stops': [
                  [12, 2],
                  [22, 180]
                  ]
              },
              'circle-color':[
                "rgb",
                ["get"],
                0,
                ["0"]

              ]
            }}
            
            
            
        />
        <div className="row-md-10 mt-5">
          <div className="col-md-100">
            <div
              style={{
                // marginBottom: "350px",
                width: "340px",
                backgroundColor: "gray",
                
                height:"90px",
                opacity:"80%"
              }}
              className="card card-body"
            >
              <h6 style={{ color: "black", fontSize: "20px" }}>
                Payment:${payment} 
              </h6>
              {/* <h6
                style={{color:"black",fontSize:"20px"}}
              >
                Best Driver: {best.data.name}</h6> */}
            </div>
          </div>
        </div>
      </ReactMapGL>
    </div>
  );
}
