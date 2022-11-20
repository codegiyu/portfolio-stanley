const Footer = () => {
    return (
        <div className="flex justify-between items-baseline py-2 bg-darkBg">
            <div className="">
                <p className="text-white text-[20px] font-semibold font-lobster">
                    <span className="text-[32px]">C</span>
                    ode
                    <span className="text-red">giyu</span>
                </p>
            </div>
            <div className="">
                <p className="text-ash">{"`&apos;` 2022"}</p>
            </div>
        </div>
    )
}

export default Footer