import React from 'react';
import './AddUser.css';

const AddUser = (props) => {
    
    let user = {};
    const onSubmit = (event) => {
        let userData = {
            name: user.name.value,
            phone: user.phone.value,
            age: user.age.value
        }
        event.preventDefault();
        console.log(user);
        console.log(userData);
        props.onUserAdd(userData);
        user.name.value = "";
        user.phone.value = "";
        user.age.value = ""
    }

    return (
        <form className="AddUser" onSubmit={onSubmit}>
            <p>Nowy użytkownik:</p>
            <input type="text" placeholder="imię i nazwisko" className="inputName" ref={(node) => user.name = node} />
            <input type="number" placeholder="numer telefonu" className="inputPhone no-spinners" ref={(node) => user.phone = node} />
            <input type="number" placeholder="wiek" className="inputAge no-spinners" ref={(node) => user.age = node} />
            <input type="submit" className="submit" value="Dodaj" />
        </form>
    )
};

export default AddUser;