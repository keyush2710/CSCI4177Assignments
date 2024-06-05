import React, { useState } from 'react';
import './Library.css';
import emptyImage from './img/empty.jpg';

const resources = [
  {
    id: 1,
    title: 'Article 1',
    image: emptyImage,
    description: 'Short description for Article 1.',
    type: 'article',
  },
  {
    id: 3,
    title: 'Video 2',
    image: emptyImage,
    description: 'Short description for Video 2.',
    type: 'video',
  },
  {
    id: 9,
    title: 'Video 3',
    image: emptyImage,
    description: 'Short description for Video 3.',
    type: 'video',
  },
  {
    id: 5,
    title: 'Article 3',
    image: emptyImage,
    description: 'Short description for Article 3.',
    type: 'article',
  },
  {
    id: 6,
    title: 'Article 4',
    image: emptyImage,
    description: 'Short description for Article 4.',
    type: 'article',
  }
];

const Library = () => {
  const [emailInput, setEmailInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleShareLibrary = () => {
    setEmailInput(true);
  };

  const handleSendEmail = () => {
    if (email) {
      alert(`Library is shared successfully with ${email}`);
      setEmail('');
      setEmailInput(false);
    }};

  return (
    <div className="library">
      <h1>Your Library</h1>
      <div className="shareLibBtn">
        <button onClick={handleShareLibrary}>Share Library</button>
      
      {emailInput && (
        <div className="emailInput">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendEmail}>Send</button>
        </div>
      )}
      </div>
      <div id="articles">
        <h2>Articles</h2>
        <div className="resourceItems">
          {resources.filter(resource => resource.type === 'article').map((resource) => (
            <div key={resource.id} className="item">
              <img id="images" src={resource.image} alt={resource.title} />
              <div className="info">
                <p>{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="videos">
        <h2>Videos</h2>
        <div className="resourceItems">
          {resources.filter(resource => resource.type === 'video').map((resource) => (
            <div key={resource.id} className="item">
              <img id="images" src={resource.image} alt={resource.title} />
              <div className="info">
                <p>{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
