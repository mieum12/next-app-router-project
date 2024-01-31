'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

import doctor from '@/assets/doctor.jpeg';
import book from '@/assets/book.jpeg';
import drama from '@/assets/drama.jpeg';
import movie from '@/assets/movie.jpeg';
import music from '@/assets/music.jpeg';

import classes from './image-slideshow.module.css';

const images = [
  { image: doctor, alt: 'A delicious, juicy burger' },
  { image: book, alt: 'A delicious, spicy curry' },
  { image: drama, alt: 'Steamed dumplings' },
  { image: movie, alt: 'Mac and cheese' },
  { image: music, alt: 'A delicious pizza' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}