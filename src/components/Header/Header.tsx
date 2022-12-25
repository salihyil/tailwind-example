// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    /* Header */
    <header className='py-6 uppercase bg-black lg:py-12 text-gega-grey'>
      {/* Header Container */}
      <div className='container flex items-center justify-between space-x-8 lg:space-x-16'>
        {/* Logo */}
        <a
          href='#'
          className='pl-4 text-4xl font-bold text-transparent md:pl-0 lg:text-6xl bg-clip-text bg-gradient-to-r from-gega-red to-gega-grey '>
          GEGA
        </a>

        {/* Mobile Menu */}
        <div className='block pr-4 md:hidden'>
          <div className='grid gap-1 cursor-pointer'>
            <div className='w-8 h-1 rounded-full bg-gega-grey'></div>
            <div className='w-8 h-1 rounded-full bg-gega-grey'></div>
            <div className='w-8 h-1 rounded-full bg-gega-grey'></div>
          </div>
        </div>
        {/* Navigation */}
        <nav className='justify-between flex-1 hidden md:flex'>
          {/* Menu */}
          <div className='flex items-center space-x-4 lg:text-lg lg:space-x-8'>
            <a href='#' className='transition duration-500 hover:text-gega-melon'>
              movies
            </a>
            <a href='#' className='transition duration-500 hover:text-gega-melon'>
              celebrities
            </a>
            <a href='#' className='transition duration-500 hover:text-gega-melon'>
              blog
            </a>
            <a href='#' className='transition duration-500 hover:text-gega-melon'>
              news
            </a>
            <a href='#' className='transition duration-500 hover:text-gega-melon'>
              about
            </a>
          </div>
          {/* Login Area */}
          <div className='flex space-x-4 item-center lg:space-x-8'>
            {/* Search Area */}
            <form>
              <div className='px-4 py-1 border-r group border-gega-red'>
                <input
                  type='text'
                  className='w-24 transition duration-500 bg-transparent border-b opacity-0 border-gega-red group-hover:opacity-100 focus:outline-none lg:w-44'
                />
                <button className='-ml-4 transition duration-1000 group-hover:ml-0'>
                  <FontAwesomeIcon icon={faSearch} className='transition duration-500 group-hover:text-gega-red' />
                </button>
              </div>
            </form>
            {/* Signup Area */}
            <div className='flex items-center space-x-4 lg:space-x-8 lg:text-lg '>
              <a href='#' className='hover:text-gega-melon'>
                Login
              </a>
              <a href='#' className='px-3 py-1 transition duration-500 bg-gega-red hover:bg-rose-600 whitespace-nowrap '>
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
