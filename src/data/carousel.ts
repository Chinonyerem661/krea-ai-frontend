'use client';

import { CarouselItem } from '@/types';
import Image from 'next/image';

export const carouselItems: CarouselItem[] = [
  {
    title: "",
    subtitle: "WAN 2.2 Image generation",
    description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    image: "/announce-wan-2-2-image.png",
    tag: "NEW VIDEO MODEL"
  },
  {
    title: "",
    subtitle: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    image: "/open-source-img.jpg", 
    tag: "CE MODEL"
  }
];