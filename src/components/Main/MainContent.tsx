import { useState, useEffect, MouseEvent } from 'react';

import rewardData from '../../data/rewards.json'

import './MainContent.css';

import logoMastercraft from '../../assets/images/logo-mastercraft.svg';
import bookmark from '../../assets/images/icon-bookmark.svg';
import bookmarked from '../../assets/images/icon-bookmarked.svg'

import Reward from './Reward/Reward';
import Modal from './Modal/Modal';

function MainContent() {
  const [rewards, setRewards] = useState([...rewardData.reward]);
  const [contentBookmark, setContentBookmark] = useState('Bookmark');

  const noReward = {
    heading: 'Pleadge with no reward',
    description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
  }

  function turnOnModal() {
    const heading = document.getElementById('heading');
    const backThisProjectElement = document.getElementById('back-this-project');
    const thankYouElement = document.getElementById('thank-you');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    if (backThisProjectElement && thankYouElement && heading) {
      backThisProjectElement.style.display = '';
      thankYouElement.style.display = '';
      heading.style.zIndex = '0';
    }
    if (overlay) {
      overlay.style.display = 'block';
    }
    if (modal) {
      modal.style.position = '';
      modal.style.width = '';
      modal.style.top = '';
      modal.style.transform = '';
      modal.style.display = 'block';
    }
  }

  function handleBookmark(e: MouseEvent<HTMLButtonElement>) {
    if (contentBookmark === 'Bookmark') {
      setContentBookmark('Bookmarked');
      e.currentTarget.style.color = 'var(--dark-cyan)';
      e.currentTarget.getElementsByTagName('img')[0].style.display = 'none';
      e.currentTarget.getElementsByTagName('img')[1].style.display = 'block';
    } else {
      setContentBookmark('Bookmark');
      e.currentTarget.style.color = '';
      e.currentTarget.getElementsByTagName('img')[0].style.display = '';
      e.currentTarget.getElementsByTagName('img')[1].style.display = '';
    }
  }

  function handlePledge(e: MouseEvent<HTMLButtonElement>) {
    const backThisProjectElement = document.getElementById('back-this-project');
    const thankYouElement = document.getElementById('thank-you');
    const modal = document.getElementById('modal');
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (backThisProjectElement && thankYouElement && modal) {
      backThisProjectElement.style.display = 'none';
      thankYouElement.style.display = 'block';
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      if (aspectRatio > 1) {
        modal.style.width = 'calc(20% - 4rem)';
      } else if (aspectRatio > 0.5) {
        modal.style.width = 'calc(50% - 4rem)';
      } else {
        modal.style.width = 'calc(90% - 4rem)';
      }
    }
    
    if (e.currentTarget.parentElement) {
      const pledgeInput = e.currentTarget.parentElement.getElementsByTagName('input')[0];
      if (pledgeInput) {
        const newRewards = [...rewardData.reward];
        if (parseInt(pledgeInput.placeholder) === 25) {
          newRewards[0].stockNumber--;
        } else if (parseInt(pledgeInput.placeholder) === 75) {
          newRewards[1].stockNumber--;
        }
        setRewards([...newRewards])
      }
    }
  }

  useEffect(() => {
    document.getElementsByClassName('checkbox')[0].setAttribute('style', 'transform: none;')
  }, [])
  return (
    <div id='content'>
      <section id='intro'>
        <img id='mastercraft' src={logoMastercraft} alt='Logo Mastercraft'></img>
        <hgroup>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </hgroup>
        <div id='buttons'>
          <button type='button' onClick={turnOnModal}>Back this project</button>
          <button type='button' onClick={handleBookmark}>
            <img src={bookmark} alt='Bookmark'></img>
            <img src={bookmarked} alt='Bookmarked'></img>
            <span>{contentBookmark}</span>
          </button>
        </div>
      </section>
      <section id='numbers'>
        <div id='statistic'>
          <div className='number'>
            <h1>$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className='number'>
            <h1>5,007</h1>
            <p>total backers</p>
          </div>
          <div className='number'>
            <h1>56</h1>
            <p>days left</p>
          </div>
        </div>
        <div id='progress-bar'>
          <div id='progress'></div>
        </div>
      </section>
      <section id='about'>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        {rewards.map((reward, i) => <Reward key={i} heading={reward.heading} description={reward.description} pledgeNumber={reward.pledgeNumber} stockNumber={reward.stockNumber}></Reward>)}
      </section>
      <div id='overlay'></div>
      <Modal rewards={[noReward, ...rewards]} handlePledge={handlePledge}></Modal>
  </div>
  )
}

export default MainContent;
