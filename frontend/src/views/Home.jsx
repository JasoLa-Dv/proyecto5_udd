import {  useEffect } from 'react'
import CalltoActionSection from '../components/CalltoActionSection'



const Home = ({ token }) => {



  useEffect(()=>{
    document.title = 'D`Cuero'
  }, [])
  return ( 
  <>
      {/* {context.userState.token ? 'Logueado' : 'Sin Loguear'} */}
      <CalltoActionSection />
  </>    
  )
}

export default Home