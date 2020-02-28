import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.scss';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node & Socket.IO <span role="img" aria-label="emoji">💛</span></h2>
    </div>
    {
      users
      ? (
        <div>
          <h3>People currently in the room :</h3>
          <div className="activeContainer">
            <h4 className="users">
              {
                users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img className= "onlineIcon" alt="Online icon" src={onlineIcon} />
                  </div>
                ))
              }
            </h4>
          </div>
        </div>
      )
      : null
    }
  </div>
)

export default TextContainer;