import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { WelcomeSection } from "./components/WelcomeSection";
import { ProyectSection } from "./components/ProyectsSection";
import {Proyect} from './components/ProyectsSection/Proyect'
import { Preloader } from "./components/Preloader";
import { useEffect, useState } from "react";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Menu } from "./components/Menu";




const ScrollToTop = () => {
  const location = useLocation(); 
 
  useEffect(() => {
    
    if (location.hash === '') {
  window.scrollTo(0, 0);
  }
 }, [location.pathname, location.hash]); 

 return null; 
};

function App() {

  const [loading, setLoading] = useState(true)
    

  const navigate = useNavigate()
  const [expectRoute, setExpectRoute] = useState()

  const handleNavigate = (ruta) => {

  if (ruta.startsWith('/')) { 

    setLoading(true)
    setExpectRoute(ruta)
    } else if (ruta.startsWith('#')) {
      navigate('/'); 
      setTimeout(() => {
          window.location.hash = ruta; 
      }, 50); 
    }
  }


  
  
  return (
    <div className="App">
      <Preloader show={loading} 
      onCover={() => navigate(expectRoute)}
      onTransitionEnd={() => setLoading(false)}
      />
      <Menu onNavigate={handleNavigate}/>
      <ScrollToTop/>
      <Routes>
        
        <Route path="/"
          element={
            <>
              <WelcomeSection/>
              <AboutMe/>
              <SkillsSection/>
              <ProyectSection onNavigate= {handleNavigate} />
            </>
          } />
        
      <Route path='/:proyectName' 
      element= {
      
        <Proyect onNavigate={handleNavigate}/>
    } />

      <Route path='/Contacto'
      element={
        <ContactSection onNavigate={handleNavigate}/>
      } />



      </Routes>
      
      
    
     
    
    </div>
  );
}

export default App;
