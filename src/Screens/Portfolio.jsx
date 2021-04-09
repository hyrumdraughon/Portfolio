import styled from "styled-components"

import Header from '../Components/Header'
import Card from '../Components/Card'

const StyledPortfolio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Header></Header>
            <Card>
                <h2 style={{marginBottom:"0"}}>Projects</h2>
                <hr style={{ width:"90%", height:"2px", backgroundColor:"black"}} />
                <iframe src="Portfolio Project List.pdf" style ={{width:"85%", height:"900px"}}></iframe>
            </Card>
        </StyledPortfolio>
    )
}

export default Portfolio