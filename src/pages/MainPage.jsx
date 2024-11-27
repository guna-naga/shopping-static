import React,{useState} from 'react'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {
  console.log(Gents)
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <WomenCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage