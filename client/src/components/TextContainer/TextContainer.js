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
          <h1>People currently in the room :</h1>
          <div className="activeContainer">
            <h2>
              {
                users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online icon" src={onlineIcon} />
                  </div>
                ))
              }
            </h2>
          </div>
        </div>
      )
      : null
    }
  </div>
)

export default TextContainer;