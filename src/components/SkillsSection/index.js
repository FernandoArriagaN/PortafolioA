import { useEffect, useRef } from 'react';
import './styles.css'
import gsap from 'gsap';




const skillsData = [
  'HTML',
  'Css',
  'Sass',
  'SEO',
  'JavaScript',
  'APIs RESTful',
  'TypeScript',
  'React',
  'Redux Toolkit',
  'Jest',
  'Bootstrap',
  'Photoshop',
  'Axios',
  'After Effects',
  'CorelDraw',
  'Premiere',
  'Illustrator',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Curiosidad intelectual',
  'Pensamiento Critico',
  'Optimización de procesos',
  'Atención al detalle',
  'Creatividad'
];

const firstSection = skillsData.slice(0, 8)
const secondSection = skillsData.slice(8, 16)
const thirdSection = skillsData.slice(16, 24)



export const SkillsSection = () => {



const firstRef = useRef(null)

    useEffect(() => {
       const tmlC = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
       
       })

       
       gsap.set('.containerFirstLine', {
            x: '0%',
       })
      
       tmlC
        .to('.containerFirstLine', {
            x:'-50%',
            duration: 35,
            ease: 'none',
            
        })
        
         return() => {
                tmlC.kill();
                
            }
    })

    
    useEffect(() => {
       const tmlC = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
       })

       
       gsap.set('.containerThirdLine', {
            x: '-50%',
       })
      
       tmlC
        .to('.containerThirdLine', {
            x:'0%',
            duration: 35,
            ease: 'none',
        })
        
         return() => {
                tmlC.kill();
                
            }
    })

    useEffect(() => {
       const tmlC = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
       })
       gsap.set('.containerSecondLine', {
            x: '0%',
       })
      
       tmlC
        .to('.containerSecondLine', {
            x:'-50%',
            duration: 35,
            ease: 'none',
        })

        return() => {
        tmlC.kill();
        }
    })


    
    return(
        <section className="skillsSectionContainer">
            <article className='titleCarruselContainer'>
                <h4 className='titleCarrusel'>Skills</h4>
            </article>
            <article className='carrouselContainer'>
                <div ref={firstRef} className='containerFirstLine'>
                {firstSection.map(skill => <span className='skill'>{skill}</span>)}
                {firstSection.map(skill => <span className='skill'>{skill}</span>)}
                {firstSection.map(skill => <span className='skill'>{skill}</span>)}
                {firstSection.map(skill => <span className='skill'>{skill}</span>)}
                </div>
                <div className='containerThirdLine'>
                    {secondSection.map(skill => <span className='skill'>{skill} </span>)}
                    {secondSection.map(skill => <span className='skill'>{skill} </span>)}
                    {secondSection.map(skill => <span className='skill'>{skill} </span>)}
                    {secondSection.map(skill => <span className='skill'>{skill} </span>)}
                </div>
                <div className='containerSecondLine'>
                    {thirdSection.map(skill => <span className='skill'>{skill} </span>)}
                    {thirdSection.map(skill => <span className='skill'>{skill} </span>)}
                    {thirdSection.map(skill => <span className='skill'>{skill} </span>)}
                    {thirdSection.map(skill => <span className='skill'>{skill} </span>)}
                </div>
            </article>
            
            
        </section>
    )
}























