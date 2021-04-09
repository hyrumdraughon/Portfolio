import styled from 'styled-components'

import Header from '../Components/Header'
import Card from '../Components/Card'

const StyledAboutMe = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledPar = styled.p`
    text-indent: 30pt;
`

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    margin: 20px;
    border: 5px black solid;
    border-radius: 5px;
`

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Header />
            <Card>
                <StyledImg src="profilepic.jpg" alt="profile image"></StyledImg>
                <div style={{ width: "90%", height: "95%" }}>
                    <StyledPar>I grew up in Chapel Hill, NC. My family lived in a log cabin in a
                    rural area and my parents taught me how to work hard. We had a large garden,
                    chickens, and cut our own firewood from the surrounding trees.
                    </StyledPar>
                    <StyledPar>After graduating from high school I went to the University of North Carolina
                    at Chapel Hill. It was the only school I applied to, because I had always known I
                    wanted to go there. Both my parents, one of my grandpas, and my older sister all went 
                    to UNC, so I’ve always been a Tar Heel.
                    </StyledPar>
                    <StyledPar>In the summer of 2018, I lived in Utah so I could be near my wife, my girlfriend 
                        at the time. I got a job as a warehouse associate on the receiving crew at RC Willey, a 
                        furniture company. I was responsible for unloading and loading trucks full of furniture 
                        products. My favorite thing about that job was finding ways to maximize my efficiency. For 
                        example, I stacked boxes to unload multiple at a time, and placed as many pieces of furniture 
                        on each moving cart as possible. I joined a crew that was about 60 trailers behind schedule, 
                        waiting for weeks to be unloaded. By the time I left, we had gotten that number down to zero 
                        and were staying on schedule.
                    </StyledPar>
                    <StyledPar>I’ve always been interested in history, so after my first year of college I decided 
                        to major in it. In my junior year of college, I took an intro-level programming course. I had 
                        never learned anything about how software works before. I remember writing and running a program 
                        for the first time, and how exciting that was to me. I found that the structured, logical nature 
                        of programming came naturally to me, and I love understanding how things work, and using that 
                        knowledge to create and improve programs.
                    </StyledPar>
                    <StyledPar>I spoke to an academic advisor who told me there was no way I could complete all the necessary 
                        courses for a computer science degree in just three semesters. I researched the requirements, the 
                        prerequisites of courses, and the course offerings, and made a scheduled plan of how I could achieve 
                        my goal. I ignored the advice of the advisor and took 3-4 computer science courses per semester, while 
                        also taking the courses I needed to finish my history major. I worked very hard, and in May 2020 I 
                        graduated on schedule with a degree in both computer science and history.
                    </StyledPar>
                    <StyledPar>After graduating, my wife and I got married and moved to Phoenix for her job as a Financial 
                        Credit Analyst. Soon after that, I heard about the Cook Systems FastTrack program, and was excited by 
                        the opportunity to be trained in enterprise software development tools. I applied, and was accepted. 
                        I have loved working with the people at Cook Systems and learning the skills I need to start a great 
                        career as a software developer.
                    </StyledPar>
                    <StyledPar>In addition to my work experience and education, I have volunteered in several capacities at my 
                        church. During high school I served as a president and counselor in various young men’s quorum 
                        presidencies, and in college I served as the sacrament coordinator for my congregation. I have also 
                        participated in community service through my church, such as cleaning highways, maintaining public parks, 
                        and serving food at homeless shelters.
                    </StyledPar>
                    <StyledPar>In my free time I love playing and watching sports, especially basketball and football. Before the 
                        pandemic, I was playing pickup basketball for a total of about eight hours every week. On Saturdays, I 
                        would play with a group of my married friends at 8AM, then play through leg cramps with a group of my 
                        single friends at 10AM. And of course, I watch every UNC basketball and football game. Besides that, my 
                        wife and I enjoy playing games and watching movies together.
                    </StyledPar>
                </div>
            </Card>
        </StyledAboutMe>
    )
}

export default AboutMe