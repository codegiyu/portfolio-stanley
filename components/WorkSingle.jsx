import Image from "next/image";
import Link from "next/link";

const WorkSingle = ({props}) => {
    let {img, title, description, skills, link} = props

    let addressTitle = title.replace(" ", "-")
    return (
        <a href={ link }>
            <div className="w-full flex-none flex flex-col rounded-[20px] bg-dark text-center text-ash font-montserrat 
                overflow-hidden pb-8"
            >
                <div className="w-full aspect-[1.8] relative">
                    <Image src={ img } alt={title} fill />
                </div>
                <h3 className="text-red text-2xl lg:text-[32px] font-bold my-4">{ title }</h3>
                <p className="text-sm lg:text-base font-semibold">{ description }</p>
                <div className="flex justify-center gap-4 lg:gap-8 items-center mt-6">
                    { skills.map((item,idx) => (
                            <div className="relative w-[30px] lg:w-[40px] aspect-square">
                                <Image key={idx} alt="skill" src={ item } fill />
                            </div>
                        )
                    ) }
                </div>
            </div>
        </a>
    )
}

export default WorkSingle