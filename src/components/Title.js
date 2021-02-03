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
            <BoxText>Are you looking for a favorite character?</BoxText>
        </Box>
    )

export default Title