import { Link, useParams } from "react-router-dom"
import { ProyectsData } from "../ProyectData"
import './styles.css'
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useCallback } from 'react';
import gsap, { Power4 } from 'gsap';
import { TimelineMax } from "gsap/gsap-core";


export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current); 
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs, config.durDrop, config.durMove, config.durReturn, config.ease, config.promoteOverlap, config.returnDelay]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" >
      {rendered}
    </div>
  );
};

export default CardSwap;


export const Proyect = ({onNavigate}) => {
    

  const { proyectName } = useParams();
  const currentProyect = ProyectsData.find(proyecto =>  `/${proyectName}` === proyecto.route) ;

  useEffect(() => {
    const tl = new TimelineMax({
        repeat: -1,
        repeatDelay: 4,
    })
    
    tl.to('.proyectt', 0.1,{
        skewX: 70,
        ease:Power4.easeInOut})
    .to('.proyectt', 0.04, {skewX:0,
        ease: Power4.easeInOut})
    .to('.proyectt', 0.04, {opacity:0})
    .to('.proyectt', 0.04, {opacity:1})
    .to('.proyectt', 0.04, {x:-20})
    .to('.proyectt', 0.04, {x:0})
    .add('split', 0)
    .to('.top', 0.5, {x:-60,
        ease:Power4.easeInOut}, 'split')
        .to('.bottom', 0.5, { x: 60, 
            ease:Power4.easeInOut}, 'split')
    .to('.proyectt', 0.08, { textShadow:'-3px 0 #fb0102'},'split')

    .to('.proyectTitleGlitchContainer', 0, {scale:1.1}, 'split')
    .to('.proyectTitleGlitchContainer', 0, {scale:1}, "+=0.02")
    
    .to('.proyectt', 0.08, { textShadow:'-3px 0 #02feff'}, "+=0.09")

    .to('.proyectt', 0.03, {textShadow:'-3px 0 #02feff'},'split')
    .to('.proyectt', 0.03,{ textShadow:'-3px 0 #fb0102'},"+=0.01")
    .to('.proyectt', 0.03, { textShadow: '0px 0 #fff'})

    .to('.top', 0.2, {
        x:0,
        ease: Power4.easeInOut})

    .to('.bottom', 0.2,{x: 0,
        ease: Power4.easeInOut})

    .to('.proyectt', 0.02, {
        scaleY: 1.1,
        ease: Power4.easeInOut
    })
    .to('.proyectt', 0.04, {
        scaleY: 1,
        ease: Power4.easeInOut
    })
  }, [])
    
  const handleClickHome = useCallback((e, ruta) => {
    e.preventDefault()
    onNavigate(ruta)
  }, [onNavigate]);


const buttonRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const iconCopyRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const text = textEl.textContent;
    textEl.textContent = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.style.setProperty("--index", i);
      span.textContent = char;
      textEl.appendChild(span);
    });

    //HOVER ANIMATIONS
    const button = buttonRef.current;

    const enter = () => {
      gsap.to(button, {
        backgroundColor: "#000000ff",
        scale: 1.05,
        duration: 0.2,
        ease: "power1.out",
        color:'#ffffff',
      });

      gsap.to(iconRef.current, {
        x: "150%",
        y: "-150%",
        duration: 0.3,

        ease: "power2.inOut",
      });

      gsap.to(iconCopyRef.current, {
        x: 0,
        y: 0,
        delay: 0.1,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to('.button__circle' , {
        background: '#ffffff',
        color: '#000000',
      })
    };

    const leave = () => {
      gsap.to(button, {
        backgroundColor: "transparent",
        scale: 1,
        duration: 0.2,
        ease: "power1.out",
        color:  '#8b8b8ba9',
      });

      gsap.to(iconRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });

      gsap.to(iconCopyRef.current, {
        x: "-150%",
        y: "150%",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to('.button__circle' , {
        background: 'transparent',
        color: ' #8b8b8ba9',
      })
    };

    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);

    return () => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);


    return (
        <section className="proyectContainer">
          
            <article className="infoConteinerP"> 
              <Link onClick={(e) => handleClickHome(e, '#proyectsSection')} className="backToProyecs"> 
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg><p>Proyectos</p>
                 </Link>
              <div className="proyectTitleGlitchContainer" >
                <h3  className="proyectt top">{currentProyect.name}</h3>
                <h3  className="proyectt bottom">{currentProyect.name}</h3>
                </div>
                <p>{currentProyect.technology} </p>
                <p className="infoProyect">{currentProyect.description}</p>
                <p className="info2Proyect">{currentProyect.infoData}</p>
                <a target="_blank" rel="noopener noreferrer" href={currentProyect.livePage} className="liveProyect">
                  <button ref={buttonRef} className="button">
                    <p ref={textRef} className="button__text">
                      LIVE PROYECT
                    </p>

                    <div className="button__circle">
                      <svg
                        ref={iconRef}
                        className="button__icon"
                        viewBox="0 0 14 15"
                        width="14"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        />
                      </svg>

                      <svg
                        ref={iconCopyRef}
                        className="button__icon button__icon--copy"
                        viewBox="0 0 14 15"
                        width="14"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </a>
            </article>
            <article className="imgContainerP">
                <CardSwap
                    width={400}
                    height={300}
                    cardDistance={60}
                    verticalDistance={70}
                    delay={4500}
                    pauseOnHover={true}
                >
                    <Card>
                    <img 
                      src={currentProyect.imgProyectPort} 
                      className="imgFront" 
                      alt="Project portfolio view" />
                    </Card>

                    <Card>
                    <img 
                      src={currentProyect.imgProyectSection} 
                      className="imgSection" 
                      alt="Project section view" />
                    </Card>

                    <Card>
                    <img 
                      src={currentProyect.imgProyectFeature} 
                      className="imgFeatures" 
                      alt="Project features view" />
                    </Card>
                </CardSwap>
            </article>

           
        </section>
    )
}