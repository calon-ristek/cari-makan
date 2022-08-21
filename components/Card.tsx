import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnnotationIcon, StarIcon } from "@heroicons/react/solid";
import Link from 'next/link'

interface CardProps {
    image: string | StaticImageData
    name: string
    rating: string
    reviewCount: number
}

const Card = ({image, name, rating, reviewCount}: CardProps) => {
  return (
    <article className="mx-1 my-2 p-2 shadow-md rounded-xl">
      <div className="relative w-full min-h-[200px] rounded-xl overflow-hidden">
          <Image src={image} alt={name} objectFit="cover" layout="fill" />
      </div>
      <h3 className="text-2xl my-1">{name}</h3>
      <div className="flex items-center justify-start">
        <p className="flex items-center"><StarIcon className="w-4 h-4 text-yellow-400 mr-1" /> {rating}</p>
        <p className="flex items-center"><AnnotationIcon className="w-4 h-4 ml-4 mr-1" /> {reviewCount}</p>
      </div>
      <Link href="/explore">
        <a className="btn btn-primary w-full my-1 transi hover:bg-gradient-to-tr hover:from-primary hover:via-primary hover:to-secondary">Lihat Kantin</a>
      </Link>
    </article>
  )
}

export default Card