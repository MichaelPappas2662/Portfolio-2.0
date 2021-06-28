import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Michael Pappas</span></h1>
                <p>
                    A Full Stack Developer from Sydney.I started my career on 2021.Currently open for new projects, lets get in touch.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100010527543286" target="_blank" rel="noopener noreferrer" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-pappas-460651123/" target="_blank" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/MichaelPappas2662" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCjhnPbyUL0BfZoHEApmrwnA" target="_blank" rel="noopener noreferrer" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
