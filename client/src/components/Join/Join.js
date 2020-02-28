import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <div>
            <input className="joinInput first" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <input className="joinInput mt-20" type="text" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
          </div>
          <Link onClick={e => (!name || !room ) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join;