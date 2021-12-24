
import React, { Component, useEffect, useRef } from 'react'
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
height = (height - height / 10);

const cardSize = height;
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
        <React.StrictMode>
            <TouchCarousel
                component={Container}
                cardSize={cardSize}
                cardCount={videos.length}
                cardPadCount={cardPadCount}
                autoplay={5e3}
                vertical
                loop
                renderCard={RenderCard}
            />
        </React.StrictMode>
    )
}



const RenderCard = (index, modIndex) => {

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

        <div style={{ display: "flex", background: "black", height: height, width: "100%", overflow: "hidden", justifyContent: "center", alignItems: "flex-start" }}>
            <video ref={videoRef} autoPlay key={item.key} muted controls={false} loop width={"100%"} style={{ background: "black" }} >
                <source src={item.video} type="video/mp4"></source>
            </video>


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
        key: 2,
        video: video1,
    },
    {
        key: 3,
        video: video2,
    },
    {
        key: 4,
        video: video3,
    },
    {
        key: 5,
        video: video4,
    },
    {
        key: 6,
        video: video5,
    }

]

export default VideoScroll;