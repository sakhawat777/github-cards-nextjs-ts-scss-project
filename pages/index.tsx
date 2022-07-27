import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useContext,createContext } from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
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
    <div className={styles.container}>
      <Head>
        <title>GitHub Cards App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <UserInput/>
      <CardList/>
    </div>
    </ProfileContext.Provider>
  )
}

export default Home
