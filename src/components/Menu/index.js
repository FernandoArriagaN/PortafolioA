import { Link, useLocation } from 'react-router-dom'
import './styles.css'








export const Menu = ({onNavigate}) => {

    const location = useLocation()
    const actualPath = location.pathname
    const showHome =  actualPath !== '/'
     const showContacto = actualPath !=='/Contacto'



    const handleClick = (e, ruta) => {
        e.preventDefault()
        onNavigate(ruta)
       
 
    }




    return(
        <aside className="menuContainer">
            <nav className="navContainer">
                <a className="linkedinIcon" 
                    href='https://www.linkedin.com/in/fernandoarriagan/' 
                    target="_blank" 
                    rel="noopener noreferrer">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg"  
                    fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                </a>
                <a className="githubIcon"
                 target="_blank" 
                    rel="noopener noreferrer"
                    href='https://github.com/FernandoArriagaN'>
                <svg
                class="action-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                >
                <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
      ></path>
    </svg>    
                </a>



                {showContacto && <Link className="contacto" 
                 onClick={(e) => handleClick(e, '/Contacto')}
                >
                    
                <svg class="w-6 h-6 text-gray-800 dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24">
                <path stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                </svg>

                </Link> }
                {showHome && 
                 <Link onClick={(e) => handleClick(e, '/')}>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24">
                    <path stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                </svg>

                </Link>}
               
            </nav>
        </aside>
    )
}






