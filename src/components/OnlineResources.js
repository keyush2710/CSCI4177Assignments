// src/components/OnlineResources.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OnlineResources.css';
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
    id: 2,
    title: 'Article 2',
    image: emptyImage,
    description: 'Short description for Article 2.',
    type: 'article',
  },
  {
    id: 3,
    title: 'Video 1',
    image: emptyImage,
    description: 'Short description for Video 1.',
    type: 'video',
  },
  {
    id: 4,
    title: 'Video 2',
    image: emptyImage,
    description: 'Short description for Video 2.',
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
  },
  {
    id: 7,
    title: 'Article 5',
    image: emptyImage,
    description: 'Short description for Article 5.',
    type: 'article',
  },
  {
    id: 9,
    title: 'Video 3',
    image: emptyImage,
    description: 'Short description for Video 3.',
    type: 'video',
  },
  {
    id: 10,
    title: 'Video 4',
    image: emptyImage,
    description: 'Short description for Video 4.',
    type: 'video',
  },
  {
    id: 11,
    title: 'Video 5',
    image: emptyImage,
    description: 'Short description for Video 5.',
    type: 'video',
  }
];

const OnlineResources = () => {
  const [libraryCreate, setLibraryCreate] = useState(false);

  const handleCreateLibrary = () => {
    setLibraryCreate(true);
  };

  return (
    <div className="resources">
      <h1>Online Resources</h1>
      <div className="createLibBtn">
        {!libraryCreate && (
          <button onClick={handleCreateLibrary}>Create Library</button>
        )}
        {libraryCreate && (
        <Link to="/library">
          <button>Save</button>
        </Link>
      )}
      </div>
      <div>
        <h2>Articles</h2>
        <div className="resource">
          {resources.filter(resource => resource.type === 'article').map((resource) => (
            <div key={resource.id} className="item">
              <img  id="images" src={resource.image} alt={resource.title}/>
              <div className="info">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                {libraryCreate && (
                  <button>+</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Videos</h2>
        <div className="resource">
          {resources.filter(resource => resource.type === 'video').map((resource) => (
            <div key={resource.id} className="item">
              <img  id="images" src={resource.image} alt={resource.title} />
              <div className="info">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                {libraryCreate && (
                  <button>+</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineResources;
