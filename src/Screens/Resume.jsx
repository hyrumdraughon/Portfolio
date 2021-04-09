import styled from "styled-components"

import Header from '../Components/Header'
import Card from '../Components/Card'

const StyledResume = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Resume = () => {
    return (
        <StyledResume>
            <Header></Header>
            <Card>
                <h2 style={{marginBottom:"0"}}>Resume</h2>
                <hr style={{ width:"90%", height:"2px", backgroundColor:"black"}} />
                <iframe src="Hyrum Draughon Cook Systems Resume.pdf" style={{width:"85%", height:"900px"}}></iframe>
            </Card>
        </StyledResume>
    )
}

export default Resume