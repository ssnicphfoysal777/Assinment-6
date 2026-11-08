import { IProducts } from '@/types/productsType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}:{product: IProducts}) => {
    return (
<Link href={`/products/${product.id}`}>

        <div className="group overflow-hidden rounded-xl border border-gray-800 bg-[#15171d] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative h-40 w-full overflow-hidden sm:h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {product.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-extrabold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Product Name */}
        <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
          {product.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-400">
          {product.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-gray-800" />

        {/* Product Stats - Left Aligned */}
        <div className="flex items-center justify-start gap-4 text-[11px] text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>◷</span>
            <span>{product.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>🔥</span>
            <span>{product.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>☆</span>
            <span>{product.rating}</span>
          </div>

        </div>
      </div>
    </div>
    </Link>
  );
    
};

export default ProductCard;