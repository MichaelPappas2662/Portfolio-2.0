/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react'

function HomePage() {
    return (
        <div className='HomePage'>
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi, I am 
                    <span>Lorem ipsum</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Coup facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
