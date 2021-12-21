import React from 'react';
import "../Styling/Home.css";
import image from "../assets/headerbg.jpeg"
import ReactPlayer from 'react-player'
import links from "../assets/videos/links";
import video1 from "../assets/videos/video-2.m4v";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className='header'>
                    <div style={{ marginTop: "20px" }}>
                        <img width={"100px"} src={image}></img>
                    </div>
                    <div style={{ fontSize: "28px", fontFamily: "Pacifico, cursive", color: "pink" }}>Only Thots</div>
                    <div style={{ transform: "scaleX(-1)", marginTop: "20px" }}>
                        <img width={"100px"} src={image}></img>
                    </div>

                </div>
                <div className='content'>

                    <video src={video1} onDurationChange={(e) => console.log(e)} autoPlay loop></video>
                    {/* <div ><ReactPlayer height={"100%"} width={"100%"} url={links[0].link} /></div> */}



                </div>
            </div >
        )
    }
}


export default Home;