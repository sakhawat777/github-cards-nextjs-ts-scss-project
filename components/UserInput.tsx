import React, { useState } from 'react';
import { profileType } from '../pages/Utils';
import { useRef } from 'react';
import styles from './UserInput.module.scss';
import Card from './Card';
import { useProfileContext } from '../pages';

const UserInput = () => {
    const [profiles, setProfiles] = useProfileContext ();
    const myRef = useRef<HTMLInputElement>(null);
     const [err, setErr] = useState('');
    return (
        <div className={styles.container}>
             
           <form onSubmit={e => {e.preventDefault(); const el = myRef.current as HTMLInputElement;
           const val = el.value.trim();

           if(profiles.map(p=> p.login).includes(val)) {
            setErr('Profile already exists');
            return;
           }

           fetch(`https://api.github.com/users/${val}`)
            .then(res => res.json())
            .then(data => {
                const {name, login, avatar_url, blog, bio, public_gists, public_repos} = data; 
                if(login){
               setProfiles([...profiles, {name, login, avatar_url, blog, bio, public_gists, public_repos}])
                setErr('')
                }
                else { setErr('Profile not found!')}
            }).catch(err => {
                    setErr(err);
            })
        }} action="">
            <input ref={myRef} type="text" />
            <button>Add Card</button>
           </form>
           {
            err && <p className={styles.err}>{err}</p>
           }
        </div>
    );
};

export default UserInput;