import React from 'react';
import { image1, image2, image3, image4, image5, image6, new1, new2, new3, new4, new5 } from '@/public/images';
import ImageItem from '@/components/ImageItem';
import NewsItem from '@/components/NewsItem';

const Movies = () => {
  return (
    /* Movies Section */
    <section className='py-24 bg-black text-gega-white'>
      {/* Movies Content */}
      <div className='container flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0'>
        {/* Left Content */}
        <div className='basis-2/3'>
          {/* Titles */}
          <div className='flex mb-8 space-x-2 '>
            <h2 className='pr-2 border-r border-opacity-50 border-gega-red text-gega-red'>
              <a href='#' className=''>
                Latest
              </a>
            </h2>
            <h2 className='pr-2 duration-500 border-r border-opacity-50 border-gega-red text-gega-grey hover:text-gega-red'>
              <a href='#'>Popular</a>
            </h2>
            <h2 className='duration-500 text-gega-grey hover:text-gega-red'>
              <a href='#'>Best</a>
            </h2>
          </div>
          {/* Images Container */}
          <div className='flex flex-wrap'>
            {/* Images */}
            <ImageItem
              image={image1}
              alt='image1'
              movieName='Oblivion'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              image={image2}
              alt='image2'
              movieName='Into The Wild'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              image={image3}
              alt='image3'
              movieName='Oblivion'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              image={image4}
              alt='image4'
              movieName='2049'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              image={image5}
              alt='image5'
              movieName='Oblivion'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              image={image6}
              alt='image6'
              movieName='Skyfall'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              hidden
              image={image6}
              alt='image6'
              movieName='Skyfall'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
            <ImageItem
              hidden
              image={image5}
              alt='image5'
              movieName='Oblivion'
              detail='Lorem ipsum dolor sit amettttttt consectetur adipisicing elit. Dicta, rem vitae. Ducimus illo optio ratione iste ea non voluptate alias temporibus officiis, nulla dolorem qui tenetur praesentium, asperiores explicabo quod.'
            />
          </div>
        </div>
        {/* Right Content */}
        <div className='pl-10 basis-1/3 lg:pl-0'>
          {/* Title */}
          <h2 className='mb-8 text-gega-grey'>Hot News</h2>
          {/* News Container */}
          <div className='flex flex-row flex-wrap justify-start space-y-4 lg:flex-nowrap lg:h-full lg:justify-between lg:pb-16 lg:flex-col'>
            <NewsItem
              image={new1}
              alt='new1'
              detail='Lorem ipsu cusantium soluta quaerat optio necessitatibus nisi pariatur porro facilis corrupti ex asperiores'
            />
            <NewsItem
              image={new2}
              alt='new2'
              detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci rerum eos facere, voluptas velit quas autem sed, ores.'
            />
            <NewsItem
              image={new3}
              alt='new3'
              detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci rerum eos facere, voluptas velit quas autem sed, accusantium soluta quaerat optio necessitatibus nisi pariatur porro facilis corrupti ex asperiores.'
            />
            <NewsItem
              image={new4}
              alt='new4'
              detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci rerum eos facere, voluptas velit quas autem sed, accusantium soluta quaerat optio necessitatibus nisi pariatur porro facilis corrupti ex asperiores.'
            />
            <NewsItem
              mdHidden
              image={new5}
              alt='new5'
              detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci rerum eos facere, voluptas velit quas autem sed, accusantium soluta quaerat optio necessitatibus nisi pariatur porro facilis corrupti ex asperiores.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
