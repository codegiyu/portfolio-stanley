import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";
import Image from "next/image";
import hero from "../public/images/hero.png";
import circles from "../public/images/circles.svg";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white px-4 sm:px-8 md:px-16 lg:px-[2.5rem] xl:px-16">
            <section>
                <ErrorBoundary>
                    <Header obj={{ page: "home" }} />
                </ErrorBoundary>
            </section>
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-[85px]">
                <h1 className="font-alternate font-semibold text-2xl lg:text-5xl leading-[30px] lg:leading-[60px] text-black w-[285px] lg:w-[565px] text-center">
                    HI, I'm <span className="text-blue">Stanley Egbele</span> UI/UX Designer
                </h1>
                {/* <p className="font-alternate font-semibold text-5xl leading-[60px] text-black w-[565px] text-center">
                    UI/UX Designer
                </p> */}
            </div>
            <div className="mx-auto bg-transparent w-[80%] lg:w-[72%] aspect-[1.578]">

            </div>
            <div className="absolute top-[220px] lg:top-[310px] left-[5%] w-[90%] aspect-[1.578] mx-auto z-[20]">
                <div className="relative w-[100%] aspect-[1.578] mx-auto">
                    <Image src={ hero } fill alt="hero" loading="eager" />
                </div>
            </div>
            <div className="absolute w-fit h-fit -top-[7vw] -left-[10vw] z-[1]">
                <div className="relative w-[36vw] aspect-square">
                    <Image src={ circles } fill alt="circles" loading="eager" />
                </div>
            </div>
            <div className="absolute aspect-square w-[40vw] bg-blue blur-[32vw] -bottom-[24vw] -left-[24vw]"></div>
        </section>
    )
}

export default Hero