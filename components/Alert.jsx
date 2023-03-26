import React from "react";
import { useEffect } from "react";


const Alert = (props) => {
    const {alert, setAlert } = props.alertProps;

    let background = alert.type === "error" ? "bg-red" : "bg-green"

    const handleCancelAlert = () => {
        setAlert({message: "", type: null})
    }

    useEffect(() => {
        if(alert.type !== null){
            setTimeout(() => {
                setAlert({message: "", type: null})
            }, 5000)
        }
    }, [alert.type])
    
    if(alert.type == null){
        return <></>
    }

    return (
        <div className="w-[90%] md:w-[500px] fixed top-[120px] left-[50%] -translate-x-[50%]">
            <div className={`w-full px-4 py-2 flex gap-6 items-center justify-between ${background} text-white font-inter rounded-md`}>
                <p className="text-white">{ alert.message }</p>
                <button onClick={ handleCancelAlert } className="font-semibold text-sm bg-transparent outline-none border-none active:scale-95">
                    x
                </button>
            </div>
        </div>
    )
}

export default Alert