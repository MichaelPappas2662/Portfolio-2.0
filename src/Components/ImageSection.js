import React from 'react'
import styled from 'styled-components';
import resume from '../img/general.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Michael Pappas</span></h4>
                <p className="paragraph">
                Front-End Web Developer leveraging my background in hospitality to build more intuitive user experiences on the web. 
                Recently earned a certificate in Full Stack Development from the University of Sydney and developed skills in JavaScript, CSS, React.js, and responsive web design.
                Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development.
                Aim for each project is to best engage the audience for an impactful user-experience.  
                Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.

                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Michael Pappas</p>
                        <p>: 32</p>
                        <p>: Greek </p>
                        <p>: Greek, French, English </p>
                        <p>: Sydney, Australia</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} useRef='https://docs.google.com/document/d/1sKG-ViocLRYWrduOff9Q5pMT3-B8Q4Jr9133gaw92NQ/edit?usp=sharing'/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
