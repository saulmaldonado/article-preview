import React from 'react';

import { ArticlePreview } from 'article-preview';
import image from './images/drawers.jpg';
import profilePicture from './images/avatar-michelle.jpg';

import 'article-preview/dist/index.css';

const socialLinks = {
  facebook: 'https://facebook.com',
  pinterest: 'https://pinterest.com',
  twitter: 'https://twitter.com',
  reddit: 'https://reddit.com',
  facebookMessenger: 'https://messenger.com',
  linkedin: 'https://linkedin.com',
};

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
      socialLinks={socialLinks}
    />
  );
};

export default App;
