import React, { useContext } from 'react';

import { Context } from '../components/Context';
import Image from '../components/Image';
import { getClass } from '../utils';

const Photos = () => {
  const { photos } = useContext(Context);

  const images = photos.map((photo, index) => (
    <Image 
      key={ photo.id }
      image={ photo }
      className={ getClass(index) }/>
    ));

  return (
      <main className='photos'>
          { images }
      </main>
  )
}

export default Photos;