import Image from "next/image";
import me from "../public/images/about-index.png";

const Intro = () => {
    return (
        <div className="w-full flex flex-col gap-6 lg:gap-[80px] font-montserrat bg-black px-4 sm:px-8 md:px-16 lg:px-[2.5rem] xl:px-20 py-[80px]">
            <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-[260px]">
                <div className="flex flex-col gap-[40px] w-[300px] items-center">
                    <h2 className="font-semibold text-[40px] leading-[49px] text-white">About Me</h2>
                    <div className="relative w-[200px] aspect-square bg-white70 rounded-full">
                        <Image src={ me } fill alt="me" />
                    </div>
                </div>
                <p className="text-[#FAFAFA] text-2xl leading-none max-w-[840px]">
                    I'm an experienced UI/UX designer with hands on experience in designing mobile and web applications. 
                    I have proven experience building products for E-Commerce industry. <br/><br/><br/> I have a very skill in  user research, 
                    wireframing, prototyping, i have expertise in the use of typography, layout, and color in visual communication 
                    and I'm proficient in using most design tools.
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Intro