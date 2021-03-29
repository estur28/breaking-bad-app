import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import AboutCharacter from './AboutCharacter'
import Spinner from '../../components/Spinner'

import styled from 'styled-components'
import { selectFilteredAllCharacters } from './allCharactersSlice';
import { getAllCharacters } from './allCharactersSlice';

const AboutAllCharacters = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 100px;
    @media (max-width: 1130px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const AllCharacters = () => {
    const allCharacters = useSelector(selectFilteredAllCharacters);
    const { isLoading} = useSelector((state) => state.allCharacters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters());
    }, [dispatch])


    if (isLoading) {
        return <Spinner />;
    }
            
    return (
            <AboutAllCharacters>
            {allCharacters.map((item) => (
                <AboutCharacter 
                    key={item.char_id}
                    item={item} />
            ))}
          </AboutAllCharacters>
        )
}
export default AllCharacters