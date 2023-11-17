const CatImage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl">Loading~</p>
        <div
          className="bg-cover bg-no-repeat flex align-center justify-center hover:bg-[rgba(0,225,245,0.33)] transition-all duration-300"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src={`https://http.cat/102`}
            alt="Cat"
          />
        </div>
      </div>
    </>
  )
}

export default CatImage