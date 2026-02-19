"use client";

import ProductCartItem from "./product-cart-item";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useAppSelector, useAppDispatch } from "@repo/store/hooks";
import { removeFromCart } from "@repo/store/slice/cart-slice";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type OrderItemRequest = {
  productUuid: string;
  price: number;
  quantity: number;
};

type OrderRequest = {
  items: OrderItemRequest[];
};

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, itemCount, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

   const handleCheckoutOnClick = async () => {
    const orderItems: OrderRequest = {
      items: [],
    };
    items.forEach((item) => {
      orderItems.items.push({
        productUuid: item.uuid,
        price: item.price,
        quantity: item.quantity,
      });
    });

    //   Submit order
    try {
      const response = await fetch("api/v1/orders", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(orderItems),
      });
    } catch (e) {
      throw e;
    } finally {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(3000);
      items.forEach((item) => {
        dispatch(removeFromCart({ uuid: item.uuid }));
      });
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full w-full border-none sm:max-w-md ml-auto fixed right-0 top-0">
        <div className="h-full flex flex-col bg-white">
          {/* Header */}
          <DrawerHeader className="border-b border-gray-200 px-6 py-6">
            <DrawerTitle className="text-2xl font-semibold text-black">
              Your Cart
            </DrawerTitle>
            <p className="text-sm text-gray-500 mt-1">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </DrawerHeader>

          {/* Items List - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-gray-500">Your bag is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={index}>
                    <ProductCartItem {...item} />
                    {index !== items.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary Section */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">Subtotal</span>
                  <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">Shipping</span>
                  <span className="font-medium text-gray-900">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">Tax</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-lg text-gray-900">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {total < 50 && (
                <p className="text-xs text-gray-600">
                  Add ${(50 - total).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
          )}

          {/* Footer */}
          <DrawerFooter className="border-t border-gray-200 px-6 py-4">
            <DrawerClose asChild>
              <Button onClick={handleCheckoutOnClick} variant="outline" className="w-full h-11 rounded-full">
                Continue Shopping
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}