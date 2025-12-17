import { Link} from "react-router-dom"
import { ProyectsData } from "./ProyectData"
import './styles.css'
import { useEffect, useRef } from "react"
import gsap, { Power4 } from "gsap"
import { TimelineMax } from "gsap/gsap-core"





export const ProyectSection = ({onNavigate}) => {

    useEffect(() => {
        const tl = new TimelineMax({
            repeat: -1,
            repeatDelay: 4,
        })
        
        tl.to('.glithch', 0.1,{
            skewX: 70,
            ease:Power4.easeInOut})
        .to('.glithch', 0.04, {skewX:0,
            ease: Power4.easeInOut})
        .to('.glithch', 0.04, {opacity:0})
        .to('.glithch', 0.04, {opacity:1})
        .to('.glithch', 0.04, {x:-20})
        .to('.glithch', 0.04, {x:0})
        .add('split', 0)
        .to('.top', 0.5, {x:-60,
            ease:Power4.easeInOut}, 'split')
            .to('.bottom', 0.5, { x: 60, 
                ease:Power4.easeInOut}, 'split')
        .to('.glithch', 0.08, { textShadow:'-3px 0 #fb0102'},'split')

        .to('.containerGlitchText', 0, {scale:1.1}, 'split')
        .to('.containerGlitchText', 0, {scale:1}, "+=0.02")
        
        .to('.glithch', 0.08, { textShadow:'-3px 0 #02feff'}, "+=0.09")

        .to('.glithch', 0.03, {textShadow:'-3px 0 #02feff'},'split')
        .to('.glithch', 0.03,{ textShadow:'-3px 0 #fb0102'},"+=0.01")
        .to('.glithch', 0.03, { textShadow: '0px 0 #fff'})

        .to('.top', 0.2, {
            x:0,
            ease: Power4.easeInOut})

        .to('.bottom', 0.2,{x: 0,
            ease: Power4.easeInOut})

        .to('.glithch', 0.02, {
            scaleY: 1.1,
            ease: Power4.easeInOut
        })
        .to('.glithch', 0.04, {
            scaleY: 1,
            ease: Power4.easeInOut
        })

    
    
    }, [])


                                                                                                     


    useEffect(() => {

        
        gsap.set(".proyect", {
            opacity: 1,
        })
        gsap.set(".proyectName", {
            alignSelf: 'center',
            color: '#fff',
            fontSize: '2.2rem',
            fontWeight: 900,
        })

        gsap.set('.backgorundPortProyect', {
            opacity: 0,
            backgroundSize: '0%',
            backgroundImage: 'none',
            scale: 2,


        })
    }, [])

    const handleEnterMouse = (e) => {    
        const titleNameProyect = e.currentTarget.querySelector('.proyectName')
        const backgorundPort = e.currentTarget.querySelector('.backgorundPortProyect')

        gsap.to(e.currentTarget, {
            duration: 0.5,
            ease: 'back.out',
            overwrite: true
        })

        gsap.to(titleNameProyect, {
            scale: 50,
            opacity: 0,
            duration: 0.5, 
            ease: 'power1.in',
            overwrite: true
        })
        gsap.to(backgorundPort, {
            scale: 0.3,
            opacity: 1,
            duration: 0.4, 
            ease: 'power1.in',
            overwrite: true
        })


            
    }

    const handleLeaveMoue = (e) => {
        const titleNameProyect = e.currentTarget.querySelector('.proyectName')
        const backgorundPort = e.currentTarget.querySelector('.backgorundPortProyect')

        gsap.to(e.currentTarget, {
            duration: 0.5,
            ease: 'back.out',
            overwrite: true,
            onComplete:() => {
                gsap.set(e.currentTarget, {
                     backgroundImage: 'none'
                })
            }
        })
         gsap.to(titleNameProyect, {
            scale: 1,
            opacity: 1,
            duration: 0.5, 
            overwrite: true,
            
        })
         gsap.to(backgorundPort, {
            scale: 1,
            opacity: 0,
            duration: 0.4, 
            ease: 'power1.in',
            overwrite: true
        })
        
    }

     const glitchTitleRef = useRef(null)
     const glitchTopRef = useRef(null)
     const glitchBottomRef = useRef(null)


    useEffect(() => {
        const elementGlitch = glitchTitleRef.current
        const textGlitchTop = glitchTopRef.current
        const observerGlitch = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    gsap.fromTo(elementGlitch, {
                        opacity: 0,
                        scale: 0,
                        x: 950,
                        color: '#313131b7',
                        ease: 'back.out',
                        

                    }, {
                        opacity: 1,
                        scale:1,
                        x: 0,
                        filter: 'blur(0)',
                        ease: 'back.out',
                        color: '#fff',
                        duration: 0.5,
                    })


                    gsap.fromTo(textGlitchTop, {
                        filter: 'blur(50)',
                    }, {
                        filter: 'blur(0)',
                    })

                } else {
                    gsap.to(elementGlitch, {
                        opacity: 0,
                        scale: 0,
                        filter: 'blur(50)',
                        x: 0,
                        color: '#313131b7',
                        ease: 'power1.out',
                        duration: 0.3,
                    })

                    gsap.to(textGlitchTop, {
                        
                    })
                }
            })
        })

        observerGlitch.observe(elementGlitch)

        return () => {
            observerGlitch.disconnect()
        }  


    }, [])



    const handleClick = (e, ruta) => {
        e.preventDefault()
        onNavigate(ruta)
       
 
    }





    return(
        <section className="proyectsContainer" id="proyectsSection">
            <div ref={glitchTitleRef}  className="containerGlitchText">
            <p ref={glitchTopRef} className="glithch top">Proyectos</p>
            <p ref={glitchBottomRef} className="glithch bottom">Proyectos</p>
            </div>
            <article className="prntProyect" >
                {ProyectsData.map((proyecto, index) => (
                    <Link onMouseEnter={ (e) => handleEnterMouse(e, proyecto)}
                        onMouseLeave={(e) => handleLeaveMoue(e, proyecto)}
                        onClick={(e) => handleClick(e, proyecto.route)}
                        className="proyect" 
                        key={index}
                    >
                        <img loading="lazzy"  src={proyecto.portadaImg} className="backgorundPortProyect"/>
                        <p className="proyectName">{proyecto.name} </p> 
                    </Link>
                ))}  
            </article>            
        </section>
    )
}

