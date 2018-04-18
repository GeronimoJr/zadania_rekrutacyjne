import React from 'react';
import './User.css';

const User = (props) => (
  <li className={props.getStripedStyle()}>
    <span className="lp">{props.lp}</span>
    <span className="name">{props.name}</span>
    <span className="phone">{props.phone}</span>
    <span className="age">{props.age}</span>
    <span className="button" onClick={() => props.onUserRemove()}>Usuń</span>
  </li>
);

export default User;