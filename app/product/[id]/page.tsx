import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import AddCart from "./AddCart"

export default async function Product({searchParams}:  SearchParamTypes){
    return(
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 ">
        <Image
          src={searchParams.image}
          alt={searchParams.name}
          width={400}
          height={400}
          className="rounded-lg w-full image-product-half"
          priority={true}
        />
  
        <div className="font-medium ">
          <h1 className="text-2xl  py-2">{searchParams.name}</h1>
          <p className="py-2">{searchParams.description}</p>
          <p className="py-2">{searchParams.features}</p>
          <div className="flex gap-2">
            <p className="font-bold text-primary">
              {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
            </p>
          </div>
          <AddCart {...searchParams} />
        </div>
      </div>
    )
}