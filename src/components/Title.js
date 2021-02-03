import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const BoxHead = styled.h1`
    display: block;
    color: #A62A00;
    font-weight: bold;
`

const BoxText = styled.p`
    font-size: 20px;
    color: #A62A00;
    font-weight: bold;
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