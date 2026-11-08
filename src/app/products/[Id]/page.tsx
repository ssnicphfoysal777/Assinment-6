import { getSingleProduct } from "@/lib/api";
import { Suspense } from "react";

export default function DetailsPage({
  params,
}: {
  params: Promise<{ Id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading product details...</p>}>
      <ProductDetailsPage params={params} />
    </Suspense>
  );
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const data = await getSingleProduct(Id);
  const product=data;
  
  if(!product){
    return(
    <>
    <h2>No Product Found</h2>
    </>
    );
  }


  return (
    <div className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl rounded-xl border-2 border-sky-500 p-3 sm:p-6">

        <div className="grid grid-cols-1 gap-7 border-b border-dotted border-sky-500 pb-7 lg:grid-cols-2">

          {/* Product Image */}
          <div className="h-87.5 overflow-hidden rounded-xl sm:h-112.5">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-2xl font-extrabold uppercase sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {product.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.muscleGroups.map((muscle:string, index:number) => (
                <span
                  key={index}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Product Details */}
            <div className="mt-6 overflow-hidden rounded-xl bg-[#171a21]">

              {[
                ['EQUIPMENT', product.equipment],
                ['DIFFICULTY', product.difficulty],
                ['SETS', product.sets],
                ['REPS', product.reps],
                ['DURATION', `${product.duration} min`],
                ['CALORIES', `${product.caloriesBurned} kcal`],
                ['RATING', product.rating],
              ].map(([label, value], index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-800 px-4 py-3 text-xs last:border-none"
                >
                  <span className="font-bold text-gray-500">
                    {label}
                  </span>

                  <span className="text-gray-300">
                    {value}
                  </span>
                </div>
              ))}

            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-extrabold uppercase">
                Instructions
              </h2>

              <ol className="mt-3 list-inside list-decimal space-y-2 text-xs leading-5 text-gray-400">
                {product.instructions.map((instruction:string, index:number) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-lime-400 px-4 py-3 text-xs font-bold text-black transition hover:bg-lime-300">
                ▣ Add to today's plan
              </button>

              <button className="rounded-lg border border-gray-700 px-4 py-3 text-xs text-gray-300 transition hover:bg-gray-800">
                ♧ Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};