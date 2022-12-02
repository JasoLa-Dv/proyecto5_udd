import { useEffect } from 'react'
import CalltoActionSection from '../components/CalltoActionSection'


const Home = () => {

  useEffect(()=>{
    document.title = 'D`Cuero'
  }, [])
  return (    

   <>
  <CalltoActionSection />
   </>
    
       
  )
}

export default Home