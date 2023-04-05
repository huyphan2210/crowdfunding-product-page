import { useState, MouseEvent } from 'react';

import './MainContent.css';

import bookmark from '../../assets/images/icon-bookmark.svg';

function MainContent() {

  const [contentBookmark, setContentBookmark] = useState('Bookmark');


  function handleBookmark(e: MouseEvent<HTMLButtonElement>) {
    if (contentBookmark === 'Bookmark') {
      setContentBookmark('Bookmarked');
      e.currentTarget.style.color = 'var(--dark-cyan)';
    } else {
      setContentBookmark('Bookmark');
      e.currentTarget.style.color = '';
    }
  }
  return (
    <div id='content'>
      <section id='intro'>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div id='buttons'>
          <button type='button'>Back this project</button>
          <button type='button' onClick={handleBookmark}>
            <img src={bookmark} alt='Bookmark'></img>
            <span>{contentBookmark}</span>
          </button>
        </div>
      </section>
      <section id='numbers'></section>
      <section id='about'></section>
    </div>
  )
}

export default MainContent;
