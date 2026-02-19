"use client";


import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@repo/store/hooks";
import { updateQuantity, removeFromCart } from "@repo/store/slice/cart-slice";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface ProductCartItemProps {
  uuid: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export default function ProductCartItem({
  uuid,
  title,
  price,
  quantity,
  image,
  description,
}: ProductCartItemProps) {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ uuid, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    dispatch(updateQuantity({ uuid, quantity: quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ uuid }));
  };

  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden ">
        {image ? (
          <Image
          unoptimized
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center ">
            <span className="text-xs">No image</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-medium text-base leading-tight">{title}</h3>
              {description && (
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                  {description}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mt-1 -mr-2 hover:bg-gray-100"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-medium w-8 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="font-medium">${(price * quantity).toFixed(2)}</p>
            {quantity > 1 && (
              <p className="text-xs ">${price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}