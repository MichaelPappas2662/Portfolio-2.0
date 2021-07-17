import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Freelance Frontend Developer'}
                        subTitle={'Sydney'}
                        text={'Freelance work on fiver for front end development of e-commerce websites. Created in total 3 website for e-commerce and 1 website for marketing. '} 
                    />
                    <ResumeItem 
                        year={'2013 - 2018'} 
                        title={'Head Chef'}
                        subTitle={'Alpha Restaurant'}
                        text={'Contributed into the opening and running the kitchen for one of the biggest and busiest Greek venues in Sydney with million-yearly revenue .   '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'201 - 2021'} 
                        title={'Full Stack Development Certificate'}
                        subTitle={'University of Sydney'}
                        text={'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars.js & ReactJS.    '} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        display: list-item;
        flex-direction: auto;
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
