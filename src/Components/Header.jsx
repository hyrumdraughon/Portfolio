import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #01012e;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2%;
    margin-top: 2%;
    border: 2px white solid;
    border-radius: 5px;
    width: 100%;
    max-width: 1000px;
    height: 25px;
    color: white;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <span style={{ fontSize: 40 }}>Hyrum Draughon</span>
            <StyledLink to='/portfolio'>Portfolio</StyledLink>
            <StyledLink to='/resume'>Resume</StyledLink>
            <StyledLink to='/aboutme'>About Me</StyledLink>
        </StyledHeader>
    )
}

export default Header