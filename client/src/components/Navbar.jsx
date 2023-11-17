import { googleLogout } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOut, faHeart, faSearch, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const [inputSearch, setInputSearch] = useState({
    searching: "",
  })
  const logStatus = localStorage.getItem("access_token")
  function logoutHandler() {
    localStorage.clear()
    googleLogout()
    navigate("/")
  }

  const searchHandler = (e) => {
    const value = e.target.value
    const key = e.target.name

    setInputSearch({
      ...inputSearch,
      [key]: value
    })

    const searchSubmitHandler = (e) => {
      e.preventDefault()

      navigate(`${inputSearch}`)
    }

  }

  return (
    <>
      <nav className="z-[1000] flex w-full justify-items-center items-center bg-white py-2 h-[5rem] sticky top-0">
        {/* EMPTY SPACE */}
        <div className="flex items-center justify-start ml-4">
          <Link to={"/"}>
            <p className="mx-2 my-1 flex items-center text-5xl lg:mb-0 lg:mt-0 text-black">
              Hooman
            </p>
          </Link>
        </div>
        {/* SEARCH */}
        <div className="flex items-center justify-center flex-grow">
          <form onSubmit={searchSubmitHandler} className="flex items-center space-x-2">
            <input
              type="search"
              className="relative block w-64 rounded border border-solid border-gray-300 bg-transparent bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchHandler}
            />
            <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-black">
              <FontAwesomeIcon icon={faSearch} className="w-5 mr-2" />
            </span>
          </form>
        </div>

        {/* LINKS */}
        <div className="ml-auto flex items-center justify-center gap-4">
          {/* USER */}
          {/* <div className="relative flex items-center justify-end">
            <a
              className="flex items-center px-2 text-black hover:text-gray-700 focus:text-gray-700"
              href="#"
              type="button"
            >
              <FontAwesomeIcon icon={faUser} className="w-5 mr-2" />
            </a>
          </div> */}
          {/* FAVORITES */}
          {/* <div className="flex items-end justify-end">
            <Link
              to={"/favorites"}
              className="text-black hover:text-gray-700 focus:text-gray-700"
            >
              <FontAwesomeIcon icon={faHeart} className="w-5 mr-2" />
            </Link>
          </div> */}
          {/* LOGOUT/LOGIN */}
          <div>
            {logStatus ? (
              <button
                onClick={logoutHandler}
                className="text-black hover:text-gray-700 focus:text-gray-700"
              >
                <FontAwesomeIcon icon={faSignOut} className="w-5 mr-2" />
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-black hover:text-gray-700 focus:text-gray-700"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="w-5 mr-2" />
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* LINE */}
      <div className="bg-[#82c9cd] h-[0.5rem]"></div>

      {/* Find your new best friend */}
      <div className="text-3xl font-bold text-center my-8">
        Find your new best friend
      </div>
    </>
  )
}

export default Navbar