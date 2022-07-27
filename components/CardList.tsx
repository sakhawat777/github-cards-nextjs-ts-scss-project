import React from 'react';
import { profileType } from '../pages/Utils';
import Card from './Card';
import { useProfileContext } from '../pages';

const CardList = () => {
    const [profiles, setProfiles] = useProfileContext ();
    return (
        <div>
           {
            profiles.map(profile => <Card key={profile.login} profile={profile} />)
           }
        </div>
    );
};

export default CardList;