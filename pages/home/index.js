import Head from 'next/head'
import Link from 'next/link'
// import '../../styles/myhome.module.css'
// import '../../styles/myhome.css'

const Home = ({
    data
}) => {
    console.log(data)
    return <div>
        home
        <Head>
            <title>this is title</title>
        </Head>

        <div >
            <Link
                
                href={'/'}
            >
                return index
            </Link>
        </div>
    </div>
}

export default Home 


export async function getStaticProps (params) {
    console.log("===========params")
    console.log(params)
    return {
        props: {
            data: [1,2,3]
        }
    }
}