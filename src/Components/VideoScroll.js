
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

const VideoScroll = (props) => {


    return (
        <div style={{ height: "90%", width: "90%", marginTop: height / 15, display: "grid", placeItems: "center", }}>
            <div className='video-container' style={{ height: height - height / 10 }}>
                {videos.map((video) => {
                    return (
                        <div className='video' style={{ display: "flex", flexDirection: "column", height: height - height / 10, marginBottom: "50px", width: "100%", maxWidth: "500px" }}>
                            <div style={{ background: "skyblue" }}>
                                <div className='blurred-container' style={{ height: "40px", width: "100%", display: 'flex', alignItems: 'center' }}>
                                    <div style={{ paddingLeft: "18px", fontFamily: "Libre Franklin, sans-serif", color: "#414141", fontSize: "14px", }}>
                                        {video.modelName}
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "100%", overflow: 'hidden' }}>
                                <video key={video.key} preload='none' autoPlay muted controls={false} loop style={{ width: "100%", background: "black" }} >
                                    <source src={video.video} type="video/mp4"></source>
                                </video>
                            </div>
                            {/* <div style={{ height: "40px", width: "100%", background: "blue" }}>

                            </div>
                            <video key={video.key} preload='none' autoPlay muted controls={false} loop height={height - height / 10} width={"100%"} style={{ background: "black", objectFit: "fill" }} >
                                <source src={video.video} type="video/mp4"></source>
                            </video>
                            <div style={{ height: "40px", width: "100%", background: "blue" }}>

                            </div> */}
                        </div>
                    )

                })}
            </div>
        </div>

        // <React.StrictMode>
        //     <TouchCarousel
        //         component={Container}
        //         cardSize={cardSize}
        //         cardCount={videos.length}
        //         cardPadCount={cardPadCount}
        //         autoplay={5000}
        //         vertical
        //         loop
        //         renderCard={RenderCard}
        //     />
        // </React.StrictMode>
    )
}



const RenderCard = (index, modIndex) => {

    const [play, setPlay] = useState(false);
    const [modelName, setModelName] = useState(null);

    const videoRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

    const item = videos[modIndex];

    return (

        <div style={{ display: "flex", background: "transparent", overflow: "hidden", height: height - height / 10, width: "100%", overflow: "hidden", justifyContent: "center", alignItems: "flex-start" }}>
            <video ref={videoRef} onClick={() => setPlay(!play)} preload='none' autoPlay key={item.key} muted controls={false} loop width={"100%"} style={{ background: "black", maxWidth: "500px" }} >
                <source src={item.video} type="video/mp4"></source>
            </video>
            <div className='blurred-container' style={{ fontFamily: "Libre Franklin, sans-serif", position: 'absolute', color: "#414141", padding: "10px", fontSize: "14px", width: "100%", display: "flex", justifyContent: "flex-start" }}>
                <div style={{ paddingLeft: "18px" }}>
                    {item.modelName}
                </div>
            </div>


            {/* <HoverVideoPlayer
                        preload='none'
                        muted={false}
                        sizingMode={"video"}
                        focused={true}
                        videoSrc={item.video}
                        style={{ width: "100%" }}
                        autoplay={5e3}
                    /> */}
        </div >

    )

}


const videos = [
    {
        key: 1,
        modelName: "Bella Bumzy",
        video: video2,
    },
    {
        key: 2,
        modelName: "Sam Slayre",
        video: video3,
    },
    {
        key: 3,
        modelName: "Maria Moobs",
        video: video4,
    },
    {
        key: 4,
        modelName: "Zayla",
        video: video5,
    },


]

export default VideoScroll;