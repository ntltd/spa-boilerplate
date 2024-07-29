import { NavLink } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <header>Root</header>
      <footer>
        <NavLink to={'/dashboard'}>Go to dashboard</NavLink>
      </footer>
    </div>
  )
}

export default Root
