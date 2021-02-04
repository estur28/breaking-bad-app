import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
`

const BoxHead = styled.h1`
    display: block;
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;
    font-weight: 800;
    margin: 0;
`

const BoxText = styled.p`
    font-size: 20px;
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
`

const Title = () => (
        <Box>
            <BoxHead>BreakingBadApp</BoxHead>
            <BoxText>
                Favorite characters, 
                episodes and quotes 
                from the show
            </BoxText>
        </Box>
    )

export default Title