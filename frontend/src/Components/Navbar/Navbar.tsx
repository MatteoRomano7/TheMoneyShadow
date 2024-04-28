import { Link } from "react-router-dom"
import logo from "./logo.png"
import { useAuth } from "../../Context/useAuth"

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth()
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" width={75} height={75} />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-red-700">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="font-bold">Welcome {user?.email}!</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-red-700 hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-red-600">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-red-700 hover:opacity-70"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar