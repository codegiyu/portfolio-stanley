import Link from "next/link"

const Header = (props) => {
    let {
        page = "home"
    } = props.obj

    const handleMenuClick = () => {

    }

    return(
        <section className={`w-full relative flex flex-col lg:flex-row justify-between bg-transparent items-center font-montserrat py-8 lg:py-16`}>
            <div>
                <Link href={"/"}>
                    <p className="text-blue text-[32px] font-bold font-alternate leading-[40px]">
                        <span className="">Stan</span>
                        <span className={`${ page === "home" ? "text-black" : "text-white" }`}>ley</span>
                    </p>
                </Link>
            </div>
            <nav className="hidden lg:block font-semibold text-xl leading-[100%]">
                <ul className="flex gap-10">
                    <li>
                        <a href="/" className={`${ page === "home" ? "text-blue" : "text-grey hover:text-blue" }`}>Home</a>
                    </li>
                    <li>
                        <a href="/about" className={`${ page === "about" ? "text-blue" : "text-grey hover:text-blue" }`}>About Me</a>
                    </li>
                    <li>
                        <a href="/works" className={`${ page === "works" ? "text-blue" : "text-grey hover:text-blue" }`}>Works</a>
                    </li>
                    <li>
                        <a href="/contact" className={`${ page === "contact" ? "text-blue" : "text-grey hover:text-blue" }`}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="w-full flex lg:hidden justify-start">
                <div className="lg:hidden flex flex-col gap-[6px] z-[60]" onClick={handleMenuClick}>
                    <span className={`${ page === "home" ? "bg-black" : "bg-white" } w-8 h-1 rounded-[2px] origin-top-left transition-all`}></span>
                    <span className={`${ page === "home" ? "bg-black" : "bg-white" } w-8 h-1 rounded-[2px] transition-all`}></span>
                    <span className={`${ page === "home" ? "bg-black" : "bg-white" } w-8 h-1 rounded-[2px] origin-bottom-left transition-all`}></span>
                </div>
            </div>
        </section>
    )
}
export default Header