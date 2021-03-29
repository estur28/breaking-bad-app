import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AboutQuote from './AboutQuote'
import Spinner from '../../components/Spinner'
import styled from 'styled-components'
import { selectFilteredAllQuotes } from '../../features/quotes/allQuotesSlice';
import { getAllQuotes } from '../../features/quotes/allQuotesSlice';

const AboutAllSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const AllQuotes = () => {
    const allQuotes = useSelector(selectFilteredAllQuotes);
    const { isLoading } = useSelector((state) => state.allQuotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllQuotes());
    }, [dispatch])

    if (isLoading) {
        return <Spinner />;
    }
    
    return (
        <AboutAllSection>
            {allQuotes.map((item) => (
                <AboutQuote 
                    key={item.quote_id}
                    item={item} />
            ))}
        </AboutAllSection>
    )
}

export default AllQuotes
