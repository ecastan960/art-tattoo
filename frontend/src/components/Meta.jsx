import React from 'react'
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
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