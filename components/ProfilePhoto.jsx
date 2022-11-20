import Image from "next/image";

const ProfilePhoto = () => {
    return (
        <div className="w-full">
            <Image src="/images/profile.jpg" 
            width={400} 
            height={535} 
            alt="CodeGiyu"
            className={"rounded-[10px] shadow-profile"} 
            priority 
            />
        </div>
    )
}

export default ProfilePhoto