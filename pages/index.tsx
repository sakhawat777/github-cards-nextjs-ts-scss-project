import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useContext,createContext } from 'react'
import CardList from '../components/CardList'
import UserInput from '../components/UserInput'
import styles from '../styles/Home.module.scss'
import { defaultProfiles, profileType } from './Utils'
type GlobalProfileContextTypes = [profileType[], (p: profileType[]) => void]

const ProfileContext = createContext<GlobalProfileContextTypes>([defaultProfiles, (p:profileType[]) => {}])
export const useProfileContext = () => useContext(ProfileContext);


const Home: NextPage = () => {
     const [profiles, setProfiles ] = useState(defaultProfiles);
     
    //  useEffect(() => {
    //             setTimeout(() => {
    //               setProfiles([...profiles, defaultProfiles[0]])
    //           }, 500);
    //  },[])
  return (
    <ProfileContext.Provider value={[profiles, setProfiles]}>
      <Head>
        <meta charSet="utf-8"/>
        <title>GitHub Cards App</title>
        <meta name="description" content="This a github cards app." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="keywords" content="Github cards" />
         <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>  
      <UserInput/>
      <CardList/>
    </div>
    </ProfileContext.Provider>
  )
}

export default Home
