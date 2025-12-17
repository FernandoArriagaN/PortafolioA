import { useEffect } from "react"
import gsap from "gsap"

export const Preloader = ({show, onTransitionEnd, onCover}) => {


useEffect(() => {
    
    if(!show) return;
    
    
    const tL = gsap.timeline({
     
        onComplete:() => {
            gsap.set('.redWarp', {
                opacity: 0,
                display: 'none',
                
            })
            gsap.set('.blackWarp', {
                opacity: 0,
                display: 'none',
                
            })
           onTransitionEnd()
        }
        
    } )


   

   
    gsap.set('.blackWarp', {
        backgroundColor: '#000',
        width: '100%',
        height: '100vh',
        position: 'fixed', 
        zIndex: 100,
        y:'-100%',


    })
    gsap.set('.redWarp', {
        backgroundColor: '#5f0000ff',
        width: '100%',
        y:'100%',
        height: '100vh',
        position: 'fixed', 
        zIndex: 100,
    

    })

    tL
        

        .to(".blackWarp", {
             y: '100%',
            duration: 1,
            ease: "power4.in",
           
        })


        .to('.redWarp', {
            y: '-0%',
            ease: 'back.out',
            duration: 2,
            onComplete: onCover,
          
            
        })
        .to('.redWarp', {
            y: '100%',
            duration: 2,

            
        })
    



}, [show])

    
    return (
        <section className="backWarp">

        {show && (
        <>
        <div className="blackWarp"></div>
        <div className="redWarp"></div>
        </>
        )}
        
        </section>
    )
}










