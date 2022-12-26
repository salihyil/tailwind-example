import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import batman from '@/public/images/batman.jpg';

const Hero = () => {
  return (
    <section className='relative h-64 bg-red-500 md:h-96 lg:h-128 group '>
      {/* Hero Image */}
      <Image alt='batman' src={batman} className='object-cover w-full h-full' />
      {/* Hero Content */}
      <div className='absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black'>
        {/* Hero Content Container */}
        <div className='container pl-10 lg:pl-0'>
          <h3 className='tracking-wider duration-500 text-gega-melon group-hover:mb-1'>ACTION, DRAMA, THRILLER</h3>
          <h1 className='text-4xl duration-500 lg:text-6xl text-gega-grey group-hover:mb-1'>The Dark Knight</h1>
          <p className='text-sm duraion-500 w-3/-4 md:text-base lg:text-lg lg:w-2/3 text-gega-grey group-hover:mb-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veniam, voluptatem ullam obcaecati voluptates
            natus quam dolorum vel inventore quibusdam, nostrum quasi sunt voluptate animi laudantium a. Culpa, harum
            aliquam?
          </p>
          {/* Detail Container */}
          <div className='flex space-x-8 duration-1000 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20'>
            {/* Watch */}
            <div className='flex items-center space-x-2 cursor-pointer group/item'>
              <a href='#' className='uppercase duration-500 lg:text-lg text-gega-grey hover:text-gega-red'>
                Watch Trailer
              </a>
              <div className='flex items-center justify-center w-8 h-8 duration-500 rounded-full bg-gega-red text-gega-grey group-hover/item:bg-rose-600 group-hover/item:-translate-y-1 group-hover/item:scale-110'>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            {/* Info */}
            <div className='flex items-center space-x-2 cursor-pointer group/item'>
              <a href='#' className='uppercase duration-500 lg:text-lg text-gega-grey hover:text-gega-red'>
                Full Synopsis
              </a>
              <div className='flex items-center justify-center w-8 h-8 duration-500 rounded-full bg-gega-red text-gega-grey group-hover/item:bg-rose-600 group-hover/item:-translate-y-1 group-hover/item:scale-110 '>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Points */}
      <div className='absolute flex space-x-3 duration-500 opacity-0 bottom-5 left-10 group-hover:opacity-100'>
        <div className='w-3 h-3 rounded-full lg:w-4 lg:h-4 bg-gega-red'></div>
        <div className='w-3 h-3 rounded-full lg:w-4 lg:h-4 bg-gega-grey'></div>
        <div className='w-3 h-3 rounded-full lg:w-4 lg:h-4 bg-gega-grey'></div>
        <div className='w-3 h-3 rounded-full lg:w-4 lg:h-4 bg-gega-grey'></div>
      </div>
    </section>
  );
};

export default Hero;
