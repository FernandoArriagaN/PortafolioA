import { useEffect, useRef } from "react"
import './styles.css'
import profileImg from './img/Subject1.png'
import gsap from "gsap"
import Cv from './assets/CV.pdf'




export const AboutMe = () => {
    

    const aboutTitleRef = useRef(null)


    useEffect(() => {
        const elementTitle = aboutTitleRef.current
        const observerTitle = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    gsap.fromTo(elementTitle, {
                        opacity: 0,
                        scale: 1,
                        color: '#313131b7',
                        ease: 'power1.out',
                        

                    }, {
                        opacity: 1,
                        scale:1,
                        ease: 'power1.out',
                        color: '#fff',
                        duration: 2,
                    })

                } else {
                    gsap.to(elementTitle, {
                        opacity: 0,
                        scale: 0.2,
                        color: '#313131b7',
                        ease: 'power1.out',
                        duration: 1,
                    })
                }
            })
        })

        observerTitle.observe(elementTitle)

        return () => {
            observerTitle.disconnect()
        }  


    }, [])




    const legendRef = useRef(null)


    useEffect(() => {
        const elementLegend = legendRef.current
        const observerLegend = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    gsap.fromTo(elementLegend, {
                        opacity: 0,
                        scale: 1,
                        color: '#313131b7',
                        ease: 'power1.out',
                        

                    }, {
                        opacity: 1,
                        scale:1,
                        ease: 'power1.out',
                        color: '#fff',
                        duration: 2,
                    })

                } else {
                    gsap.to(elementLegend, {
                        opacity: 0,
                        scale: 0.2,
                        color: '#313131b7',
                        ease: 'power1.out',
                        duration: 1,
                    })
                }
            })
        })

        observerLegend.observe(elementLegend)

        return () => {
            observerLegend.disconnect()
        }  


    }, [])
    
    
    
    return (
        <section className="aboutMeContainer">
           
             <article className="aboutMeTitleContainer">
                 <p ref={legendRef} className="legend">
                Transformo ideas en experiencias web únicas,<br/> 
                combinando diseño y código para que cada clic cuente.
            </p>
                <h3 ref={aboutTitleRef} className="aboutMeTitle">AboutMe</h3>
            </article>

            <aside className="asideAboutMe">
                <p className="textAboutMe">Soy Programador Front-End en formación, con base en sistemas informáticos y una sólida trayectoria en diseño gráfico especializado en preprensa. Actualmente sigo fortaleciendo mis habilidades en desarrollo web, creando soluciones digitales funcionales y dinámicas, donde combino mi experiencia visual con mi crecimiento en la programación.</p>
                <img src={profileImg} className="imgProfile" alt="profileImg"/>
            </aside>
            <article className="downloadCvContainer">
                <a href={Cv}  download>
                <button  className="downloadCv">Descarga Cv</button>
                </a>
            </article>

        </section>
    )
}