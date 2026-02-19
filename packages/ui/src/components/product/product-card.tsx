"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@repo/store/hooks";
import { addToCart } from "@repo/store/slice/cart-slice";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export interface ProductCardProps {
  uuid: string;
  title: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
  subtitle?: string;
  tagline?: string;
  monthlyPrice?: number;
  category?: string;
}

export default function ProductCard({
  uuid,
  title,
  price,
  image,
  description,
  badge,
  subtitle,
  tagline,
  monthlyPrice,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    dispatch(
      addToCart({
        uuid,
        title,
        price,
        images: [image],
        quantity: 1,
        description,
      })
    );

    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const formattedMonthlyPrice = monthlyPrice
    ? `$${monthlyPrice.toFixed(2)}/mo.`
    : `$${(price / 12).toFixed(2)}/mo.`;

  return (
    <div className="text-center">
      {/* Product Image */}
      <div
        className="bg-black bg-center bg-cover bg-no-repeat rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Optional overlay for better image contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Badge (New, Limited, etc.) */}
      {badge && (
        <p className="text-xs text-[#bf4800] font-semibold mb-1">{badge}</p>
      )}

      {/* Product Title */}
      <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">{title}</h3>

      {/* Subtitle (Chip info, etc.) */}
      {subtitle && (
        <p className="text-xs text-[#86868b] mb-1">{subtitle}</p>
      )}

      {/* Tagline */}
      {tagline && (
        <p className="text-sm text-[#1d1d1f] mb-1">{tagline}</p>
      )}

      {/* Pricing */}
      <p className="text-sm text-[#86868b] mb-4">
        From ${price.toFixed(2)} or {formattedMonthlyPrice} for 12 mo.*
      </p>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-all mb-2 disabled:opacity-70"
      >
        {isAdding ? (
          <>
            <ShoppingCart className="h-4 w-4 mr-2 animate-bounce" />
            Adding...
          </>
        ) : (
          "Add to Cart"
        )}
      </Button>

      {/* Learn More Link */}
      <div className="mt-2">
        <Link
          href={`#`}
          className="text-[#06c] text-sm hover:underline"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}