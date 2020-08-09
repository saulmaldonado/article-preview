import React from 'react'

import { ArticlePreview } from 'article-preview'
import image from './images/drawers.jpg'
import profilePicture from './images/avatar-michelle.jpg'

import 'article-preview/dist/index.css'

const App = () => {
  return (
    <ArticlePreview
      title='  Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home'
      subtitle='Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.'
      author='Michelle Appleton'
      datePosted={new Date('28 Jun 2020')}
      image={image}
      profilePicture={profilePicture}
      socialLinks={[
        'https://facebook.com',
        'https://pinterest.com',
        'https://twitter.com'
      ]}
    />
  )
}

export default App
