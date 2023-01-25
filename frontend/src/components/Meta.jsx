import React from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Meta = () => {
    const { title, description, keywords } = useParams();
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Art & Tattoo',
    description: 'We sell the best art products',
    keywords: 'art supplies, tattoo supplies'
}

export default Meta