import React from 'react';
import './Hero.css';
import instaIcon from './../images/owner/instagram.png';
import twitterIcon from './../images/owner/twitter.png';
import moreIcon from './../images/owner/more.png';

const Hero = ({ activeItem }) => {
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="heroHighlight">
          <div className="heroContainer">
            <img
              className="selectedCharacter"
              src={activeItem?.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="heroDetails">
          <div className="title">{activeItem?.name}</div>
          <span className="itemNumber">•#{activeItem?.token_id}</span>
          <div className="ownerImageContainer">
            <img src={activeItem?.owner.profile_img_url} alt="" />

            <div className="ownerNameAndHandle">
              <div>{activeItem?.owner.address}</div>
              <div className="handle">
                @{activeItem?.owner.user || 'unknown'}
              </div>
            </div>
          </div>
          <a href={activeItem?.permalink}>
            <div className="buy">BUY</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
