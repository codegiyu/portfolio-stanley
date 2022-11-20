import Image from "next/image"

const Intro = () => {
    return (
        <div className="w-full flex flex-col gap-6 lg:gap-12">
            <div className="flex flex-col gap-10 font-montserrat text-[#FAFAFA]">
                <h1 className="text-[30px] md:text-[45px] font-semibold leading-[110%]">Hi, I&apos;m <span className="text-red">Edward-Precious Omegbu</span></h1>
                <p className="font-poppins font-normal text-sm lg:text-lg leading-[150%] tracking-normal">
                    I like to build beautiful, fun and interactive things with code. I&apos;m dedicated to the quest of developing solutions that leverage on best practice technologies to deliver over the top user experiences.
                </p>
            </div>
            <div className="flex gap-8">
                <a href="https://twitter.com/TheLonerider20">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/twitter.svg"} alt="twitter" fill />
                    </div>
                </a>
                <a href="https://github.com/codegiyu">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/github.svg"} alt="github" fill />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/edward-precious-omegbu">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/linkedin.svg"} alt="linkedin" fill />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Intro