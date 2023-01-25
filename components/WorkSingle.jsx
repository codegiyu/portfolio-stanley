import Image from "next/image";

const WorkSingle = ({props}) => {
    let {img, title, description, link} = props

    return (
        <div className="w-full flex-none flex flex-col lg:flex-row-reverse rounded-[30px] bg-grey42 text-white font-montserrat 
            overflow-hidden px-12 py-[120px] lg:items-center gap-[80px]"
        >
            <div className="w-full lg:w-1/2 aspect-[1.372] rounded-[20px] relative">
                <Image src={ img } alt={title} fill loading="eager" />
            </div>
            <div className="">
                <h2 className="font-bold lg:text-[64px] leading-[100%]">{ title }</h2>
                <p className="text-sm font-medium lg:text-[32px] leading-[100%] text-[#FAFAFA] my-[42px]">{ description }</p>
                <a href={ link } className="text-sm font-medium lg:text-[32px] leading-[100%] hover:underline hover:underline-offset-8">
                    <p >View Project</p>
                </a>
            </div>
            
        </div>
    )
}

export default WorkSingle