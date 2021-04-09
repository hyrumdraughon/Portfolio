import { NavLink } from 'react-router-dom'
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

const StyledLink = styled(NavLink)`
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
            <StyledLink to='/portfolio' activeStyle={{fontWeight:"bolder", textDecoration:"underline", color:"#62C6F2"}}>Portfolio</StyledLink>
            <StyledLink to='/resume' activeStyle={{fontWeight:"bold", textDecoration:"underline", color:"#62C6F2"}}>Resume</StyledLink>
            <StyledLink to='/aboutme' activeStyle={{fontWeight:"bold", textDecoration:"underline", color:"#62C6F2"}}>About Me</StyledLink>
        </StyledHeader>
    )
}

export default Header