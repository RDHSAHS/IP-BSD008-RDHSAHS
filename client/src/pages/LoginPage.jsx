import axios from "axios"
import { GoogleLogin } from "@react-oauth/google"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { URL } from "../configs/config"
import Button from "../components/Button"

const BASE_URL = URL

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const [statusCode, setStatusCode] = useState(null);
  const navigate = useNavigate()

  const onChangeHandler = (e) => {
    const inputs = e.target.value

    setLoginInput({
      ...loginInput,
      [e.target.name]: inputs,
    })
  }

  useEffect(() => {
    if (statusCode) {
      const timeoutId = setTimeout(() => {
        setStatusCode(null);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [statusCode]);


  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()

      const response = await axios.post(`${BASE_URL}/user/login`, loginInput)
      const { data, status } = response
      setStatusCode(status)
      localStorage.setItem("access_token", data.access_token)

      setTimeout(() => {
        setStatusCode(null)
        navigate("/")
      }, 1500)

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || `An error occured`)
      setStatusCode(err.response?.status || 500)
    }
  }

  async function googleLogin(codeResponse) {
    try {
      const { data, status } = await axios.post(`${BASE_URL}/user/google-login`, null, {
        headers: {
          token: codeResponse.credential
        },
      })
      setStatusCode(status)
      localStorage.setItem("access_token", data)
      setTimeout(() => {
        setStatusCode(null)
        navigate("/")
      }, 1500)
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || `An error occured`)
      setStatusCode(err.response?.status || 500)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[50rem]">
          <div
            className="absolute shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl shadow-xl shadow-[#00D9EC]">
          </div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 shadow-xl shadow-[#374f2f]">
            <div className="max-w-md mx-auto ">
              <div>
                <h1 className="text-3xl font-semibold">Login</h1>
              </div>
              <div className="divide-y divide-gray-100">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={onSubmitHandler}
                >
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input autoComplete="off" id="email" name="email" type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        value={loginInput.email}
                        onChange={onChangeHandler}
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                    </div>
                    <div className="relative">
                      <input autoComplete="off" id="password" name="password" type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        value={loginInput.password}
                        onChange={onChangeHandler}
                      />
                      <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                    </div>
                    <div className="relative">
                      <Button type="submit" />
                    </div>
                  </div>
                </form>
                {statusCode && (
                  <div>
                    <p>Status Code: {statusCode}</p>
                    <img
                      src={`https://http.cat/${statusCode}`}
                      alt={`Cat for status code ${statusCode}`}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <p>{error}</p>
                  </div>
                )}
                <div className="flex flex-col flex-center gap-4 items-center">
                  <div className="flex flex-row mt-[1rem]">
                    <div className="m-1">
                      <GoogleLogin onSuccess={googleLogin} />
                    </div>
                    <div className="m-1">
                      <GoogleLogin onSuccess={googleLogin} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-end self-end">
                    <Link to={"/register"} className="text-xl text-zinc-500">
                      <h1>Register</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage