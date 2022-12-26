import React from 'react';
import Image from 'next/image';

interface INewsItemProps {
  image: typeof import('*.jpg');
  alt: string;
  detail: string;
  mdHidden?: boolean;
}

const NewsItem = (props: INewsItemProps) => {
  const date = new Date();

  return (
    <>
      {/* Item */}
      <div className={`flex items-center space-x-4 group md:basis-1/2 ${props.mdHidden ? 'md:hidden' : ''}`}>
        {/* News Image Container */}
        <div className='h-full overflow-hidden basis-1/3'>
          <Image
            src={props.image}
            alt={props.alt}
            className='object-cover w-full h-full duration-500 group-hover:scale-110 group-hover:opacity-50'
          />
        </div>
        {/* Item Detail */}
        <div className='basis-2/3 text-gega-grey group-hover:text-gega-melon '>
          <p className='h-20 overflow-auto text-sm w-44 group-hover:bg-gega-melon group-hover:text-gega-red '>
            {props.detail}
          </p>
          <p className='mt-2 text-sm font-bold tracking-tighter font-gemunu '>
            {`On Now  ${date.getMonth() + 1} ${date.getFullYear()}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
