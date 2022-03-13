import Head from 'next/head'
import TableList  from '../components/TableList'
import styles from '../styles/Layout.module.css'
export default function Home({ users }) {
  //console.log(users)

  return (
    <div>
      <Head>
        <title>Users App</title>
        <meta name="keywords" content="users, app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <TableList  users={users} />
    </div>
  )
}
//Fetching data
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=10`)
  const users = await res.json()

  return {
      props:{
          users
      }
  }
}