import React from 'react';
import "../Styling/Home.css";
import image from "../assets/headerbg.jpeg"
import ReactPlayer from 'react-player'
import links from "../assets/videos/links";
import video1 from "../assets/videos/video-2.m4v";
import VideoScroll from './VideoScroll';

let height = window.screen.height;

console.log(height);

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className='header' style={{ height: height / 16 }}>
                    {/* <div style={{ marginTop: "32px" }}>
                        <img width={height / 10} src={image}></img>
                    </div> */}
                    <div style={{ fontSize: height / 35, fontFamily: "Pacifico, cursive", color: "#2EBBAB", paddingInline: "32px" }}>Only <text style={{ color: "goldenrod" }}>Thots</text></div>
                    {/* <div style={{ transform: "scaleX(-1)", marginTop: "32px" }}>
                        <img width={height / 10} src={image}></img>
                    </div> */}
                    <div className='loaderGradient' style={{ height: "6px", width: "100%", display: "block" }}>
                        .
                    </div>
                </div>
                <div className='content'>
                    <div >
                        <VideoScroll />
                    </div>
                </div>
                <div className='blurred-container' style={{ position: "sticky", width: "100%", height: "50px", left: 0, bottom: 0, }}>

                </div>
            </div >

        )
    }
}


export default Home;

