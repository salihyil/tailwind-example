// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    /* Header */
    <header className='bg-black py-12 text-gega-grey font-gemunu uppercase'>
      {/* Header Container */}
      <div className='container flex items-center justify-between space-x-16'>
        {/* Logo */}
        <a href='#' className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gega-red to-gega-grey '>
          GEGA
        </a>
        {/* Navigation */}
        <nav className='flex justify-between flex-1'>
          {/* Menu */}
          <div className='flex items-center text-lg space-x-8'>
            <a href='#' className='hover:text-gega-melon transition duration-500'>
              movies
            </a>
            <a href='#' className='hover:text-gega-melon transition duration-500'>
              celebrities
            </a>
            <a href='#' className='hover:text-gega-melon transition duration-500'>
              blog
            </a>
            <a href='#' className='hover:text-gega-melon transition duration-500'>
              news
            </a>
            <a href='#' className='hover:text-gega-melon transition duration-500'>
              about
            </a>
          </div>
          {/* Login Area */}
          <div className='flex item-center space-x-8'>
            {/* Search Area */}
            <form>
              <div className='group border-r px-4 py-1 border-gega-red'>
                <input
                  type='text'
                  className=' bg-transparent border-gega-red border-b opacity-0 group-hover:opacity-100 focus:outline-none transition duration-500'
                />
                <button className='-ml-4 group-hover:ml-0 transition duration-1000'>
                  <FontAwesomeIcon icon={faSearch} className='group-hover:text-gega-red transition duration-500' />
                </button>
              </div>
            </form>
            {/* Signup Area */}
            <div className='flex items-center space-x-8 text-lg'>
              <a href='#' className='hover:text-gega-melon'>
                Login
              </a>
              <a href='#' className='bg-gega-red px-3 py-1 hover:bg-rose-600 transition duration-500 '>
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
