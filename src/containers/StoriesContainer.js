import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScrolls } from '../hooks/useInfiniteScrolls';


export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScrolls();

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);
 
    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map(storyId => (
                    <Story key={storyId} storyId={storyId} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
}; 