import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import sectionData from '../data/section-data';
import Header from '../components/Header';

const Home = () => {
    const sections = sectionData.map(data => <Section data={data} key={data.title} />)

    return (
        <Container>
            <Header />
            {sections}
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`