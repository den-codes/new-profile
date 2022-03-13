import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../../styles/UserStyles.module.css'

const user = ( { user }) => {
    //const router = useRouter()
    //const { id } = router.query

    return (
        <div>
            <h1 className={styles.title}>{user.name}&lsquo;s Profile</h1>
            <div className={styles.container}>
              <div className={styles.card}>
                    <h1 className={styles.label}>
                    <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>                  Username</h1>
                    <span className={styles.text}>{user.username}</span>
              </div>
                <div className={styles.card}>
                  <h1 className={styles.label}>
                  <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                  Email</h1>
                  <span className={styles.text}>{user.email}</span>
                </div>
                <div className={styles.card}>
                  <h1 className={styles.label}>            
                  <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Location</h1>
                  <span className={styles.text}>{user.address.street}</span>
                </div>
                <div className={styles.card}>
                  <h1 className={styles.label}>
                    <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Phone</h1>
                  <span className={styles.text}>{user.phone}</span>
                </div>
                <div className={styles.card}>
                  <h1 className={styles.label}>
                    <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>              
                  Website</h1>
                  <span className={styles.text}>{user.website}</span>
                </div>
                <div className={styles.card}>
                  <h1 className={styles.label}>
                    <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      Company</h1>
                  <span className={styles.text}>{user.company.name}</span>
              </div>
              </div>
              <div className={styles.button}>
              <Link href='/'>
              Go Back
            </Link>
            </div>
        </div>
    )
}
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  
    const user = await res.json()
  
    return {
      props: {
        user,
      },
    }
  }

  export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  
    const users = await res.json()
  
    const ids = users.map((user) => user.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }
export default user