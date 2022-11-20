import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SkillsBox = ({ props }) => {
    let {source, name} = props
    // let ref = useRef(null)

    let [isHovered, setIsHovered] = useState(false)
    // let [width, setWidth] = useState(0)
    // let [height, setHeight] = useState(0)
    // let [left, setLeft] = useState(0)
    // let [top, setTop] = useState(0)
    // let [style, setStyle] = useState({
    //                                     transform: "rotateX(0deg) rotateY(0deg)",
    //                                     transition: ""
    //                                 })

    const handleMouseEnter = () => {
        setIsHovered(true)
        // setTransition(event)
    }

    // const handleMouseMove = (event) => {
    //     const centerX = left + width/2;
    //     const centerY = top + height/2;
    //     const mouseX = event.clientX - centerX;
    //     const mouseY = event.clientY - centerY;
    //     const rotateX = ((+1)*2*mouseY/(height/2)).toFixed(1);
    //     const rotateY = ((-1)*2*mouseX/(width/2)).toFixed(1);

    //     const cssTransform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    //     setStyle({...style, transform: cssTransform})
    // }

    const handleMouseLeave = () => {
        setIsHovered(false)
        // setStyle({...style, transform: "rotateX(0deg) rotateY(0deg)"})
        // setTransition(event)
    }

    // function setTransition(event) {
    //     let card = event.currentTarget
    //     // console.log(card)
    //     clearTimeout(ref.timeoutId);
    //     setStyle({...style, transition: "transform 200ms cubic-bezier(.03,.98,.52,.99)"});

    //     ref.timeoutId = setTimeout(() => {
    //         setStyle({...style, transition: ""})
    //     }, 200);
    //   }

    let imageClass = isHovered ? "animate-[spin_5s_ease-in-out_infinite] transition-all duration-1000" 
                                : "transition-all duration-1000"

    // useLayoutEffect(() => {
    //     setWidth(ref.current.offsetWidth);
    //     setHeight(ref.current.offsetHeight);
    //     setLeft(ref.current.offsetLeft);
    //     setTop(ref.current.offsetTop);
    // }, [style])

    return (
        <div className="flex items-center justify-center gap-2 lg:gap-3 min-w-[140px] lg:min-w-[200px] max-w-max py-8 lg:py-12 px-4 rounded-[8px]
         bg-dark drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform-style-3d perspective-1000 hover:scale-y-95 z-0"
        //  style={ style }
         onMouseEnter={ handleMouseEnter } 
         onMouseLeave={ handleMouseLeave }
        //  onMouseMove={ handleMouseMove }
        //  ref={ref}
        >
            <div className="relative w-9 lg:w-12 aspect-square">
                <Image src={ source } fill className={ imageClass } alt={ name } />
            </div>
            <p className="text-sm lg:text-[16px] leading-[100%] font-medium font-montserrat text-[#FAFAFA]">{ name }</p>
        </div>
    )
}

export default SkillsBox