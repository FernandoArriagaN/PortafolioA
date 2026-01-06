import carasPortada from './img/carasPortada.jpg'
import imgCarasPort from './img/carasImgPort.jpg'
import imgCarasSection from './img/carasImgSection.jpg'
import imgCarasFeature from './img/carasImgFeature.jpg'

import gamingPortada from './img/gamingPortada.jpg'
import imgGamingPort from './img/gamingImgPort.jpg'
import imgGamingSection from './img/gamingImgSection.jpg'
import imgGamingFeature from './img/gamingImgFeature.jpg'

import voxPortada from './img/voxPortada.jpg'
import imgVoxPort from './img/voxImgPort.jpg'
import imgVoxSection from './img/voxImgSection.jpg'
import imgVoxFeature from './img/voxImgFeature.jpg'

import groovesPortada from './img/groovesPortada.jpg'
import imgGroovesPort from './img/groovesImgPort.jpg'
import imgGroovesSection from './img/groovesImgSection.jpg'
import imgGroovesFeature from './img/groovesImgFeature.jpg'


import vansPortada from './img/vansPortada.jpg'
import imgVansPort from './img/vansImgPort.jpg'
import imgVansSection from './img/vansImgSection.jpg'
import imgVansFeature from './img/vansImgFeature.jpg'


import urbanPortada from './img/urbanPortada.jpg'
import imgUrbanPort from './img/urbanEdgeImgPort.jpg'
import imgUrbanSection from './img/urbanImgSection.jpg'
import imgUrbanFeature from './img/urbanImgFeature.jpg'





export const ProyectsData = [
    
    {
        name: 'Urban Edge',
        portadaImg: urbanPortada, 
        technology: 'React Router Dom, HTML5, React, Redux Toolkit (Slices), Custom Hooks, GSAP, Axios, API, JavaScript, CSS3.',
        description: 'Plataforma de e-commerce de muebles de alta gama con estética industrial, integrada con una API externa para la gestión dinámica de productos y stock.',
        infoData: 'Este proyecto es una solución integral de tienda virtual que consume datos en tiempo real de la Furniture API. Implementa gestión de estado con Redux Toolkit para el carrito de compras y la sincronización de la UI tras las peticiones asíncronas. Destaca por su alto nivel de interactividad mediante el uso de GSAP para animaciones, transiciones fluidas en la pasarela de pago y un sistema de partículas (confeti) tras la compra. Incluye búsqueda dinámica, filtrado de piezas de diseño y un flujo de checkout profesional completamente responsivo.',
        imgProyectPort: imgUrbanPort,    
        imgProyectSection: imgUrbanSection, 
        imgProyectFeature: imgUrbanFeature, 
        route: '/UrbanEdge',
        livePage: 'https://urbanedg.netlify.app/', 
    },
    
    {name:  'The Gaming Hub',
        portadaImg: gamingPortada,
        technology:'React, Redux Toolkit, Axios, JavaScript, HTML5, CSS3, SEO, Jest',
        description: 'The Gaming Hub es una aplicación web enfocada en los amantes de los videojuegos. Permite explorar, buscar y descubrir información de juegos a través del consumo de una API de videojuegos.',
        infoData: 'Este proyecto fue creado como parte de mi formación como desarrollador front-end y tiene como objetivo ofrecer una experiencia interactiva para los usuarios que desean obtener información detallada sobre sus videojuegos favoritos. Incluye funcionalidades como búsqueda dinámica de títulos, filtrado y visualización de datos relevantes, así como la integración con la API externa de RAWG. Además, implementa manejo de estado global mediante Redux Toolkit y cuenta con una interfaz moderna y completamente responsiva.',
        imgProyectPort: imgGamingPort,
        imgProyectSection: imgGamingSection,
        imgProyectFeature: imgGamingFeature,
        route: '/Gaming',
        livePage:'https://gaminghubstore.netlify.app/',
    },

    {name:  'Vöx Nova',
        portadaImg: voxPortada,
        technology:'HTML5, CSS3, JavaScript, GSAP',
        description: 'VoxNova es una landing page moderna diseñada para presentar los audífonos Nova de la marca Vox, reconocidos por su fidelidad de sonido y amados por los verdaderos amantes del audio.',
        infoData: 'Desarrollé VoxNova, una landing page enfocada en destacar las principales cualidades de los audífonos Nova mediante un diseño moderno, visualmente atractivo y acompañado de animaciones suaves. Este proyecto fue realizado como parte de mis prácticas en Desarrollo Front-End, con el objetivo de reforzar mis habilidades en diseño, animación y experiencia de usuario, utilizando HTML5, CSS3, JavaScript y GSAP para construir una interfaz dinámica y profesional.',
        imgProyectPort: imgVoxPort,
        imgProyectSection: imgVoxSection,
        imgProyectFeature: imgVoxFeature,
        route: '/Vox',
        livePage:'https://voxnova.netlify.app/',
    },
    
    {name:  'Caras Landing page',
        portadaImg: carasPortada,
        technology:'React, TypeScript, JavaScript, SEO, Jest',
        description:'ReactCaras es un proyecto desarrollado como práctica para fortalecer habilidades en React, aplicando componentes funcionales y efectos visuales para construir una experiencia moderna y atractiva. Su objetivo principal fue crear una interfaz tipo landing page que incentive al usuario a suscribirse a una revista, cuidando la estructura, los estilos y las animaciones para lograr un diseño fluido y profesional. Además, el código fue minificado para optimizar el rendimiento y mejorar los tiempos de carga. El proyecto utiliza tecnologías como React, Styled Components, HTML5 y CSS3.',
        infoData: 'Desarrollé Caras, una landing page enfocada en atraer y captar suscriptores para la revista mexicana del mismo nombre, especializada en entretenimiento y noticias del mundo del espectáculo. Este proyecto fue creado como práctica para reforzar mis habilidades en React, aplicando conceptos clave como componentes funcionales, manejo de estado y efectos visuales.',
        imgProyectPort: imgCarasPort,
        imgProyectSection: imgCarasSection,
        imgProyectFeature: imgCarasFeature,
        route: '/Caras',
        livePage:'https://landingcaras.netlify.app/' ,
    },

    {name:'Vans',
        portadaImg: vansPortada,
        technology:'JavaScript, HTML5 y CSS3',
        description: 'Vans es una tienda en línea simulada inspirada en la marca Vans. El objetivo del proyecto fue recrear una experiencia de compra completa, implementando animaciones, carrito funcional y diseño adaptable.',
        infoData: 'Vans es un e-shop interactivo que permite a los usuarios explorar productos y agregarlos al carrito, simular una compra. Fue creado como parte de mi aprendizaje para practicar estructuración de componentes front-end, interactividad con JavaScript, y organización de estilos con SASS.',
        imgProyectPort: imgVansPort,
        imgProyectSection: imgVansSection,
        imgProyectFeature: imgVansFeature,
        route: '/Vans',
        livePage:'https://ebacvans.netlify.app/',
    },

    {name:'Grooves App',
        portadaImg: groovesPortada,
        technology:'React, Redux Toolkit, Axios, JavaScript, HTML5 y CSS3',
        description: 'Grooves es una aplicación web diseñada para los entusiastas de la música. Permite a los usuarios gestionar, buscar y visualizar información sobre artistas o álbumes a través de una interfaz intuitiva',
        infoData: 'Este proyecto fue desarrollado como parte de mi formación técnica y tiene como objetivo ofrecer una plataforma eficiente para la gestión de datos musicales. Incluye funcionalidades como la visualización dinámica de catálogos y la integración con servicios externos para el consumo de datos en tiempo real. La arquitectura del proyecto emplea tecnologías modernas para asegurar un rendimiento fluido, implementando una gestión de estado robusta y un diseño adaptable (responsive) que garantiza una experiencia de usuario consistente en cualquier dispositivo.',
        imgProyectPort: imgGroovesPort,
        imgProyectSection: imgGroovesSection,
        imgProyectFeature: imgGroovesFeature,
        route: '/Grooves',
        livePage:'',
    },
]

