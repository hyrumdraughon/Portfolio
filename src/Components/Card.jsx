import styled from 'styled-components'

const StyledCard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 95%;
    max-width: 950px;
    margin: 2%;
    padding: 1%;

    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}

export default Card