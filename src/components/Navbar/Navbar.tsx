const Navbar = () => {
  return (
    <div className="bg-white border-b-2 border-purple-700 h-20 mb-2 sticky  w-full">
      <div className="flex items-center ">
        <h1 className="text-purple-700 font-poppins text-4xl ml-4  flex-1">
          Tail + React
        </h1>
        <div className="mr-3 flex items-center">
          <ul className="flex  font-poppins">
            <li className="mr-2 active:border-purple-300 active:border-b-2 hover:border-purple-200 hover:border-b-2 p-1 ">
              <a className="block" href="#">
                Home
              </a>
            </li>
            <li className="mr-2 active:border-purple-300 active:border-b-2 hover:border-purple-200 hover:border-b-2 p-1 ">
              <a href="#">About</a>
            </li>
            <li className="mr-2 active:border-purple-300 active:border-b-2 hover:border-purple-200 hover:border-b-2 p-1 ">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn bg-purple-500 px-5 py-2 rounded-full text-white font-poppins font-bold ">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
