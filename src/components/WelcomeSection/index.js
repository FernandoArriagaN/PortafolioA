import { useEffect, useRef } from 'react'
import './styles.css'
import {gsap} from 'gsap'




export const WelcomeSection = () => {

    const developerRef = useRef(null)
    const secondDevRef = useRef(null)
    const graphicRef = useRef(null)
    const secondGraphRef = useRef(null)

    useEffect(() => {
        const timeL = gsap.timeline({
            repeat: -1,
            repeatDelay: 0,
        })


        const elementDev = developerRef.current;
        const textDev = elementDev.textContent; 
        const lettersDev = textDev.split('')
        const warpedLettersDev = lettersDev.map((letterDev) => {
        return (
            `<span class="letterDev">${letterDev}</span>`
        )
       })
        const secondDev = secondDevRef.current;
        const secondTextDev = secondDev.textContent; 
        const secondLettersDev = secondTextDev.split('')
        const warpedSecondLettersDev = secondLettersDev.map((secondLineLetterDev) => {
        return (
            `<span class="secondLetterDev">${secondLineLetterDev}</span>`
        )
       })

        const elementGraph = graphicRef.current;
        const textGraph = elementGraph.textContent; 
        const lettersGraph = textGraph.split('')
        const warpedLettersGraph = lettersGraph.map((letterGraph) => {
        return (
            `<span class="letterGraph">${letterGraph}</span>`
        )
       })

       const secondGraph = secondGraphRef.current;
        const secondTextGraph = secondGraph.textContent; 
        const secondLettersGraph = secondTextGraph.split('')
        const warpedSecondLettersGraph = secondLettersGraph.map((secondLetterGraph) => {
        return (
            `<span class="secondLetterGraph">${secondLetterGraph}</span>`
        )
       })


       const wordsDev = warpedLettersDev.join('')
       const devSecondLine = warpedSecondLettersDev.join('')
       const wordsGraph = warpedLettersGraph.join('')
       const graphSecondLine = warpedSecondLettersGraph.join('')
       elementGraph.innerHTML = wordsGraph
       secondGraph.innerHTML = graphSecondLine
       elementDev.innerHTML = wordsDev
       secondDev.innerHTML = devSecondLine





        gsap.set(".letterGraph" , {
            y: 50,
            opacity: 0,
        })
        
        gsap.set(".secondLetterGraph" , {
            y: 50,
            opacity: 0,
        })
         

        timeL
            .to({}, {duration: 2})

            .to(".letterDev", {
                y: -50,
                opacity:0,
                duration: 0.4,
                 stagger: 0.05,
                ease: "power1.out"
            })


             .to(".letterGraph", {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out"
            }) 

            .to(".secondLetterDev", {
                y: -50,
                opacity:0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power1.out"
            })

            .to(".secondLetterGraph", {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out"
            }, "-=0.2") 

           
 
            .to({}, { duration: 2 })

            .to(".letterGraph", {
                y: 50,
                opacity:0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power1.out"
            })

            .to(".letterDev", {
                y:0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out"

            })

            .to(".secondLetterGraph", {
                y: 50,
                opacity:0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power1.out"
            })
           

            .to(".secondLetterDev", {
                y:0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out"

            }, "-=0.2")



            return() => {
                timeL.kill();
                
            }
    })



    useEffect(() => {
    gsap.set('.nameTitle', 
        {opacity: 0,
        x: '-40%',}
    )

     gsap.set('.ramaTitle', 
        {opacity: 0,
        y: '40%',}
    )
    gsap.to('.nameTitle', {
        opacity:1,
        x:'0%',
        delay: 2,
        duration: 2,
        
    })
    gsap.to('.ramaTitle', {
         opacity:1,
        y:'0%',
        delay: 2,
        duration: 2,
        
    })
}, [])
    


    return(
        <section className="welcomeSection">
            <h1 className="nameTitle">Fernando Arriaga</h1>
            <h2 className="ramaTitle">
                <span className='devTitle' 
                    ref={developerRef}>PROGRAMADOR </span> 
                <span ref={secondDevRef} className='secondLineDev'>FRONTEND</span>
                
                <span 
                    ref={graphicRef} 
                    className='graphicTitle'>DISEÑADOR</span>
                <span ref={secondGraphRef} className='secondLineGraph'> GRÁFICO</span>
                
            </h2>
            
        </section>
    )
}