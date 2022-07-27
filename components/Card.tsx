import React from 'react';
import { profileType } from '../Utils';
import  styles from './Card.module.scss';
type CardPropsType = {
    profile: profileType
}

const Card = ({profile}: CardPropsType) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={profile.avatar_url} alt="" />
            </div>
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
                <p>{
                    profile.blog &&  <a target="_blank" rel="noreferrer" href={profile.blog}>Website</a>
                    }
                    <code>
                    {" "} Public Repositories: {profile.public_repos} {" "}
                    </code>
                    <code>
                        Public Gists: {profile.public_gists}
                    </code>
                    </p>
            </div>
            
        </div>
    );
};

export default Card;