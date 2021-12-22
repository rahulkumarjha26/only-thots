
import React, { Component } from 'react'
import data from '../data'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget'
import touchWithMouseHOC from '../../src/touchWithMouseHOC'
import TouchCarousel from '../TouchCarousel'
import "../Styling/VideoScroll.css"
import HoverVideoPlayer from "react-hover-video-player";

import videoporn from "../assets/videoporn.mp4";
import video1 from "../assets/videos/video-1.m4v"
import video2 from "../assets/videos/video-2.m4v"
import video3 from "../assets/videos/video-3.mp4"
import video4 from "../assets/videos/video-4.mp4"
import video5 from "../assets/videos/video-5.mp4"

const videos = [
    {
        video: videoporn,
    },
    {
        video: video1,
    },
    {
        video: video2,
    },
    {
        video: video3,
    },
    {
        video: video4,
    },
    {
        video: video5,
    }

]

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

const Container = touchWithMouseHOC(CarouselContainer)

class VideoScroll extends Component {


    renderCard(index, modIndex) {
        const item = videos[modIndex];

        return (
            <div
                key={index}
                className='carousel-card'
                data-index={index}
                data-mod-index={modIndex}
            >
                <div
                    className='carousel-card-inner'
                    style={{
                        backgroundColor: "black",
                    }}
                >
                    {/* <div className='carousel-title'>{item.title}</div> */}
                    <div style={{ display: "flex", height: height - height / 10, overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
                        <HoverVideoPlayer
                            muted={false}
                            sizingMode={"video"}
                            focused={true}
                            videoSrc={item.video}
                            style={{ width: "100%" }}
                            autoplay={5e3}
                        />
                    </div>
                </div>
            </div>
        )
    }

    render() {
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
                    renderCard={this.renderCard}
                />
            </React.StrictMode>
        )
    }
}


export default VideoScroll