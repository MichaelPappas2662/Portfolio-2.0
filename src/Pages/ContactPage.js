import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+66-789675637'} cont2={'07663520283'} />
                    <ContactItem title={'Email'} icon={email} cont1={'loremipsum@gmail.com'} cont2={'info.lorem.ipsum@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'27 Aldrich Road, London, England'} cont2={'United Kingdom'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section``;

export default ContactPage;