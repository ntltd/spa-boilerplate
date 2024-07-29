import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <header>Dashboard</header>
      <footer>
        <NavLink to={'/'}>Go to root</NavLink>
      </footer>
    </div>
  )
}

export default Dashboard
