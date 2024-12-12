import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-20" id='backToTop' >

        {/* My name */}
        <h1 className="text-3xl text-white cursor-pointer">Kamel Mohmmed</h1>
        {/* === My name === */}

        {/* Navigation */}
        <div className="flex gap-10 text-white font-semibold text-lg" >
          <h2 className="p-2 cursor-pointer ">selected work</h2>
          <h2 className="p-2 cursor-pointer ">resume</h2>
          <Link
              to="getInTouch" 
              smooth={true} 
              duration={700} 
            >
            <h2 className="cursor-pointer border-4 p-2 hover:bg-white hover:text-main">get in touch</h2>
          </Link>
        </div>
        {/* === Navigation === */}

      </div>
      {/* === Navbar === */}
    </>
  )
}