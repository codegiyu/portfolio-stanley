import Image from "next/image";
import dribbble from "../public/images/footer-dribbble.svg";
import behance from "../public/images/footer-behance.svg";
import linkedin from "../public/images/footer-linkedin.svg";
import twitter from "../public/images/footer-twitter.svg";
import mail from "../public/images/footer-mail.svg";

const Footer = ({theme}) => {
    return (
        <div className="flex flex-col gap-[50px] items-center py-2 bg-transparent">
            <div className="mb-[50px]">
                <p className="text-blue text-[32px] leading-[39px] font-bold font-alternate">
                    <span className="">Stan</span>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>ley</span>
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[40px] lg:gap-[70px] ">
                <div className={`w-[84px] aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white20" : "bg-black20"}`}>
                    <div className={`w-16 aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white70" : "bg-black70"}`}>
                        <div className="w-8 aspect-square relative">
                            <Image src={ dribbble } fill alt="s" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className={`w-[84px] aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white20" : "bg-black20"}`}>
                    <div className={`w-16 aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white70" : "bg-black70"}`}>
                        <div className="w-8 aspect-square relative">
                            <Image src={ behance } fill alt="s" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className={`w-[84px] aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white20" : "bg-black20"}`}>
                    <div className={`w-16 aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white70" : "bg-black70"}`}>
                        <div className="w-8 aspect-square relative">
                            <Image src={ linkedin } fill alt="s" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className={`w-[84px] aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white20" : "bg-black20"}`}>
                    <div className={`w-16 aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white70" : "bg-black70"}`}>
                        <div className="w-8 aspect-square relative">
                            <Image src={ twitter } fill alt="s" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className={`w-[84px] aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white20" : "bg-black20"}`}>
                    <div className={`w-16 aspect-square flex justify-center items-center rounded-full ${theme === "dark" ? "bg-white70" : "bg-black70"}`}>
                        <div className="w-8 aspect-square relative">
                            <Image src={ mail } fill alt="s" loading="eager" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer