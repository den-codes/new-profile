import Link from 'next/link'
import styles from '../styles/TableStyles.module.css'

const TableList = ({ users }) => {
    return (
        <div> 
            <table className={styles.container}>
              <thead className={styles.head}>
                <tr className={styles.tr_spacing}>
                  <th>#</th>
                  <th>Username</th>
                  <th>Full name</th>
                  <th>Email</th>
                </tr>
              </thead>
                <tbody>
                  {users.map(user => (
                  <Link href="/users/[id]" as={`/users/${user.id}`} key={user.id} passHref>
                  <tr className={styles.tb_spacing} key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                  </Link>
                  ))}
                </tbody>
  </table>
  </div>
    )
}

export default TableList