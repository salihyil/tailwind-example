import Image from 'next/image';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IImageItemProps {
  image: typeof import('*.jpg');
  alt: string;
  detail: string;
  movieName: string;
  hidden?: boolean;
}

const ImageItem = (props: IImageItemProps) => {
  return (
    <div
      className={`relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 group  ${
        props.hidden ? 'hidden md:block lg:hidden ' : ''
      } `}>
      <Image
        src={props.image}
        alt={props.alt}
        className='object-cover duration-500 group-hover:scale-110 group-hover:opacity-50'
      />
      {/* Image Detail Container */}
      <div className='absolute px-6 bottom-8 '>
        <h3 className='duration-500 text-gega-grey group-hover:text-gega-melon group-hover:mb-2'>{props.movieName}</h3>
        <p className='text-sm duration-500 opacity-0 group-hover:opacity-100 group-hover:mb-10'>{props.detail}</p>
        {/* Icons Container */}
        <div className='absolute flex space-x-8 duration-500 opacity-0 text-gega-grey -bottom-2 group-hover:opacity-100 group-hover:bottom-2'>
          <a href='#' className='hover:text-gega-red'>
            <FontAwesomeIcon icon={faPlay} />
          </a>
          <a href='#' className='hover:text-gega-red'>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
