import ErrorBoundary from "../components/ErrorBoundary";
import CircleLink from "../components/CircleLink";
import ProfilePhoto from "../components/ProfilePhoto";
import SectionHeader from "../components/SectionHeader";
import SkillsList from "../components/SkillsList";
import SkillsBox from "../components/SkillsBox";
import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Intro from "../components/Intro";
import WorkSingle from "../components/WorkSingle";
import WorkSlideshow from "../components/WorkSlideshow";
import PROJECTS from "../data/data";
import { useState } from "react";


const AllComponents = () => {
    let [menuOpen, setMenuOpen] = useState(false)
    let headerProps = {menuOpen, setMenuOpen}
    let sheadprops = {small: "Services", large: "Skill-Set"}
    let skillsProps = [
        {source: "/images/skills/html5.svg", name: "JavaScript"},
        {source: "/images/skills/nodejs.svg", name: "Node JS"},
        {source: "/images/skills/express.svg", name: "Express JS"},
        {source: "/images/skills/tailwindcss.svg", name: "Tailwind CSS"},
        {source: "/images/skills/react.svg", name: "React JS"},
        {source: "/images/skills/mysql.svg", name: "MySQL"},
    ]
    let workProp = {
        img: "/images/projects/omorofan.jpg", 
        title: "Omorofan", 
        description: "Company website for Omorofan EMT Nig Ltd", 
        skills: [
            "/images/skills/html5.svg", "/images/skills/css3.svg", "/images/skills/javascript.svg", "/images/skills/jquery.svg", 
            "/images/skills/php.svg", 
        ]
    }
    return (
        <div className="flex flex-col min-h-screen w-full bg-darkBg pb-8">
            <h1 className="font-workSans text-slate-200 font-extrabold text-center text-4xl my-4">ALL COMPONENTS</h1>
            <div className="all-components container flex flex-col lg:flex-row h-max w-full bg-darkBg">
                <div className="image-sections h-max w-full md:w-[80%] md:mx-auto lg:w-[50%] flex flex-col gap-12 bg-darkBg">
                    <div className="w-[400px]">
                        <ErrorBoundary>
                            <ProfilePhoto />
                        </ErrorBoundary>
                    </div>
                    <ErrorBoundary>
                        <Intro />
                    </ErrorBoundary>
                </div>
                <div className="form-sections h-max w-full lg:w-[50%] flex flex-col gap-12 bg-darkBg py-5">
                    <div className="flex items-center justify-around">
                        <div className="w-auto">
                            <ErrorBoundary>
                                <SectionHeader props={ sheadprops } />
                            </ErrorBoundary>
                        </div>
                        <div className="w-fit">
                            <ErrorBoundary>
                                <CircleLink num="2" />
                            </ErrorBoundary>
                        </div>
                    </div>
                    
                    <div className="flex h-fit items-center">
                        <div className="w-1/2 flex justify-start">
                            <SkillsBox props={{source: "/images/skills/html5.svg", name: "JavaScript"}} />
                        </div>
                        <div className="w-1/2 h-fit flex justify-start"><ContactHeader /></div>
                    </div>

                    <div className="w-full">
                        <ErrorBoundary>
                            <WorkSingle props={ workProp } />
                        </ErrorBoundary>
                    </div>
                </div>
                
            </div>
            <div className="full-width container w-full flex flex-col gap-12 py-16">
                <SkillsList array={ skillsProps } />
                <ContactForm />
                <Header props={ headerProps } />
                <ErrorBoundary>
                    <WorkSlideshow array={PROJECTS} />
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default AllComponents