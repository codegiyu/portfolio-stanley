import Head from 'next/head'
import { useRouter } from 'next/router'
import PROJECTS, { SKILLS } from '../../data/data'

const ProjectSinglePage = () => {
    let router = useRouter()
    let projectName = router.query.addressTitle//.replace("-", " ")
    let data = PROJECTS.find(item => item.title === projectName.replace("-", " "))
    return (
        <div>
            <Head>

            </Head>
            <p>{ projectName }</p>
            { data && <p>{ data.description }</p> }
        </div>
    )
}
export default ProjectSinglePage