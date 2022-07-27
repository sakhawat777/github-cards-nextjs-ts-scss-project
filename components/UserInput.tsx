import React from 'react';
import { profileType } from '../pages/Utils';
const UserInput = ({addCard} : {addCard(newCard: profileType): void}) => {
    return (
        <div className='styles.container'>
           <form onSubmit={e => {e.preventDefault();}} action="">
            <input type="text" />
            <button>Add Card</button>
           </form>
        </div>
    );
};

export default UserInput;