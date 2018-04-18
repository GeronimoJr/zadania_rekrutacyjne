import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = (props) => (
   <ul className="UsersList">
        <li className="header">
            <span className="header-lp">LP<button className="sort" onClick={() => props.onUserSort()}>&#8964;</button></span>
            <span className="header-name">Imię i nazwisko</span>
            <span className="header-phone">Numer telefonu</span>
            <span className="header-age">Wiek</span>
            <span className="header-button">Usuń z listy</span>
        </li>
       {props.users.map((user, i) => (
           <User
               key={i}
               lp={user.lp}
               name={user.name}
               phone={user.phoneNumber}
               age={user.age}
               onUserRemove={() => props.onUserRemove(i, user.lp)}
               getStripedStyle={() => props.getStripedStyle(i)}
           />)
       )}
   </ul>
);

export default UsersList;