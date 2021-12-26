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
                <div className='header' style={{ height: height / 18 }}>
                    <div style={{ fontSize: height / 35, fontFamily: "Pacifico, cursive", color: "#2EBBAB", paddingInline: "32px" }}>Only <text style={{ color: "goldenrod" }}>Thots</text></div>

                    <div className='loaderGradient' style={{ height: "6px", width: "100%", display: "block" }}>
                    </div>
                </div>

                <VideoScroll />

                <div className='blurred-container' style={{ position: "absolute", width: "100%", height: "40px", left: 0, bottom: 0, zIndex: 3 }}>

                </div>
            </div >

        )
    }
}


export default Home;

