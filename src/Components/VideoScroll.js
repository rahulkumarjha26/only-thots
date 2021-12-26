
import React, { Component, useEffect, useRef, useState } from 'react'
import data from '../data'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget'
import touchWithMouseHOC from '../../src/touchWithMouseHOC'
import TouchCarousel from '../TouchCarousel'
import "../Styling/VideoScroll.css"
import video1 from "../assets/videos/video-1.m4v"
import video2 from "../assets/videos/video-2.m4v"
import video3 from "../assets/videos/video-3.mp4"
import video4 from "../assets/videos/video-4.mp4"
import video5 from "../assets/videos/video-5.mp4"


let height = window.screen.height;

const cardSize = height - height / 10;
const cardPadCount = 1

function CarouselContainer(props) {

    const { cursor, carouselState, ...rest } = props
    const translateY = (cursor - cardPadCount) * cardSize
    return (
        <NonPassiveTouchTarget className='carousel-container'>
            <NonPassiveTouchTarget
                className='carousel-track'
                style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
                {...rest}
            />
        </NonPassiveTouchTarget>
    )
}

const Container = touchWithMouseHOC(CarouselContainer);

const Video = ({ key, modelName, url }) => {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [mute, setMute] = useState(false);

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                    setPlaying(true);
                } else {
                    videoRef.current.pause();
                    setPlaying(false);
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });



    return (
        <div key={key} className='video' style={{ display: "flex", flexDirection: "column", height: height - height / 10, marginBottom: "50px", width: "100%", maxWidth: "500px" }}>
            <div style={{ background: "skyblue" }}>
                <div className='blurred-container' style={{ height: "40px", width: "100%", display: 'flex', alignItems: 'center' }}>
                    <div style={{ paddingLeft: "18px", fontFamily: "Libre Franklin, sans-serif", color: "#414141", fontSize: "14px", }}>
                        {modelName}
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", overflow: 'hidden' }}>
                <video onClick={() => setMute(!mute)} ref={videoRef} preload='none' key={videoRef} muted={!mute || !playing} controls={false} autoPlay loop style={{ width: "100%", background: "black" }} >
                    <source src={url} type="video/mp4"></source>
                </video>
            </div>

        </div>
    )
}

const VideoScroll = () => {

    return (
        <div style={{ height: "90%", width: "90%", marginTop: height / 15, display: "grid", placeItems: "center", }}>
            <div className='video-container' style={{ height: height - height / 10 }}>
                {videos.map((video) => {
                    return (
                        <Video key={video.key} modelName={video.modelName} url={video.url} />
                    )

                })}
            </div>
        </div>
    )
}



const videos = [
    {
        key: 1,
        modelName: "Bella Bumzy",
        url: video2,
    },
    {
        key: 2,
        modelName: "Sam Slayre",
        url: video3,
    },
    {
        key: 3,
        modelName: "Maria Moobs",
        url: video4,
    },
    {
        key: 4,
        modelName: "Zayla",
        url: video5,
    },
]

export default VideoScroll;