// import React ,{useState,useEffect} from 'react';
// import ReactMapGL,{Marker,Popup} from 'react-map-gl';
// import * as DOTS from "../data/ita-taxistop.json";
// // import * as CORS from '../data/csvjson.json';
// // import * as IDDS from "../data/india_district.json";
// export default function Mapgl(){
//     const [viewport,setViewport]=useState({
//         latitude:19.190485189296755,
//         longitude: 73.445084097808,
//         width:"100vw",
//         height:"100vh",
//         zoom:10
//     });

//     const [selectedDOTS,setselectedDOTS] = useState(null);
//     // const [selectedCORS,setselectedCORS] = useState(null)
// return(
//     <div>
//         <ReactMapGL {...viewport}
//         mapboxApiAccessToken={"pk.eyJ1Ijoic2F0aWlpc2hoaCIsImEiOiJja2llOXI3MXQxcjByMnlvNTFyZDQzdWFoIn0.unBNQkoB77Q8pYzxEPfFCw"}
//         onViewportChange={viewport=>{
//             setViewport(viewport);
//         }}
//         >
//             {DOTS.features.map((DOT)=>(
//                 <Marker key={DOT.properties.Name}
//                 latitude={DOT.geometry.coordinates[1]}
//                 longitude={DOT.geometry.coordinates[0]}
//                 >
//                     <button onClick={(e)=>{
//                         e.preventDefault();
//                         setselectedDOTS(DOT);
//                     }}>
//                     <img src ="/images/ticon.png" />
//                     </button>
//                 </Marker>
//             ))}

//             {selectedDOTS ? (
//             <Popup latitude={selectedDOTS.geometry.coordinates[1]}
//                    longitude={selectedDOTS.geometry.coordinates[0]} 
//                    onClose={()=>{
//                     setselectedDOTS(null);   
//                    }}
//                     >
//                 <div style={{fontColor:"black",backgroundColor:"black"}}>
//                     <h6>{selectedDOTS.properties.Name}</h6>
//                     {/* <p>{selectedDOTS.properties.Description}</p>  */}
//                 </div>
//             </Popup>
//             ) : null}
           

//         </ReactMapGL>
//     </div>
// )
// }