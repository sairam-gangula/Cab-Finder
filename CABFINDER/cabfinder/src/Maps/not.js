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
  const [coordinate, setCoordinate] = useState({
    lat: 0.0,
    lon: 0.0,
    elon: 0.0,
    elat: 0.0,
  });
  useEffect(() => {
    async function fetchrData() {
      const cd = await axios.get("/coordinate");
      console.log(cd);
      setCoordinate(cd);

      console.log("coordinate", coordinate);
    }
    fetchrData();
  }, [coordinate]);

  const [selectedCORS, setselectedCORS] = useState(null);
  const [route, setRoute] = useState();
  const [step, setStep] = useState([]);
  const [payment, setPayment] = useState(0);

  // const payment = distance*8;
    const temp1 = cd.data.lo +","+cd.data.lat;

  const url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/-73.96595994094105,40.759146427722946;"+
    temp1+"?geometries=geojson&steps=true&access_token=" +
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

  console.log(payment);

  const data = {
    type: "Feature",
    geometry: route,
  };
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

        <h6 style={{ color: "black" }}>Payment:{payment}</h6>
      </ReactMapGL>
    </div>
  );
}
