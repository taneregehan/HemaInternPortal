import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import logo from  '../assets/2.png'
import { Link } from 'react-router-dom';
function Navbar({children}) {
    const [isOpen, setIsOpen] = useState(false);


  
  return (
    <div>
    <nav className=" fixed w-full backdrop-blur-md bg-transparent">
      <div className=" mx-6 ">
        <div className="flex items-center  h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/"><img className="h-12 w-16" src= {logo}  alt="logo"/></Link>
              
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className=" hover:bg-white-700/50 hover:bg-indigo-700/50 text-white hover:text-white px-3 py-2 rounded-2xl text-sm font-medium"
                >
                 ANASAYFA
                </Link>

               
                
                <Link
                  to="/dijitalteam"
                  className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-sm font-medium"
                >
                    DIGITAL TEAM
                </Link>

                <Link
                  to="/stajyerler"
                  className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-sm font-medium"
                >
                  STAJYERLER
                </Link>
                <Link
                  to="/projeler"
                  className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-sm font-medium"
                >
                  PROJELER
                </Link>
               

               

                
              </div>
              
            </div>
        
          </div>



          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Anasayfa
              </Link>

              <Link
                to="/projeler"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projeler
              </Link>

              <Link
                to="/dijitalteam"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dijital Team
              </Link>

              <Link
                to="/stajyerler"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
               Stajyerler
              </Link>

             
            </div>
          </div>
        )}
      </Transition>
    </nav>

   
    <main>
      <div className=" ">
            {
                children
            }
      </div>
    </main>
  </div>
  )
}

export default Navbar