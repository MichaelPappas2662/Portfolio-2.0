import React from 'react'
import about from '../img/about.png'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem ipsum</span></h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tempora provident sequi qui, quidem ducimus nobis?
                </p>
                <div className="about-details">
                    <p>
                       <div className="about-details">
                            <p>
                            </p>   
                        </div> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ImageSection
