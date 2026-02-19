"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User2, Package, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type ProfileResponse = {
  username: string;
  email: string;
  familyName: string;
  givenName: string;
  roles: string[];
};

type OrderResponse = {
  uuid: number;
  orderDate: string;
  username: string;
  status: string;
  items: OrderItemResponse[];
};

type OrderItemResponse = {
  id: number;
  productUuid: string;
  quantity: number;
  price: number;
};

type Product = {
  uuid: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

function OrderItemRow({ productUuid, quantity, price }: OrderItemResponse) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/v1/products/${productUuid}`, {
          credentials: "include",
        });
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productUuid]);

  return (
    <div className="flex gap-3 py-2">
      <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        {product?.image && (
          <Image
            unoptimized
            src={product.image}
            fill
            alt={product?.name ?? ""}
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {isLoading ? "Loading..." : product?.name}
        </p>
        <p className="text-xs text-gray-500">
          Qty: {quantity} × ${price.toFixed(2)}
        </p>
      </div>
      <div className="text-sm font-medium text-gray-900">
        ${(price * quantity).toFixed(2)}
      </div>
    </div>
  );
}

export function UserDrawer() {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await fetch("/api/auth/me", {
          credentials: "include",
        });
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch orders
        const ordersRes = await fetch("/api/v1/orders", {
          credentials: "include",
        });
        const ordersData = await ordersRes.json();
        setOrders(
          ordersData.sort(
            (a: OrderResponse, b: OrderResponse) =>
              new Date(b.orderDate).getTime() -
              new Date(a.orderDate).getTime()
          )
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen]);

  const handleLogout = () => {
    window.location.href = "/logout";
  };

  return (
    <Drawer direction="bottom" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="flex items-center justify-center">
          <User2 className="size-4" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-screen! max-h-screen! mt-0! w-full bg-white! border-none">
        <div className="h-screen! flex flex-col max-w-2xl mx-auto w-full">
          {/* Header */}
          <DrawerHeader className="border-b border-gray-200 px-6 py-6">
            <DrawerTitle className="text-2xl font-semibold text-black">
              Account
            </DrawerTitle>
          </DrawerHeader>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Loading...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* User Profile Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Profile
                  </h3>
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <User2 className="h-8 w-8 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {profile?.givenName} {profile?.familyName}
                        </p>
                        <p className="text-sm text-gray-600">
                          @{profile?.username}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Email</span>
                        <span className="text-gray-900">{profile?.email}</span>
                      </div>
                      {profile?.roles && profile.roles.length > 0 && (
                        <div className="flex justify-between text-sm items-center">
                          <span className="text-gray-600">Role</span>
                          <div className="flex gap-2">
                            {profile.roles.map((role) => (
                              <Badge key={role} variant="secondary" className="text-xs">
                                {role}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Orders Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Orders
                    </h3>
                    <Package className="h-5 w-5 text-gray-400" />
                  </div>

                  {orders.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                      <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No orders yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.slice(0, 3).map((order) => {
                        const orderTotal = order.items.reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        );

                        return (
                          <div
                            key={order.uuid}
                            className="bg-gray-50 rounded-2xl p-4 space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  Order #{order.uuid.toString().substring(0, 8)}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {new Date(order.orderDate).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {order.status}
                              </Badge>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                              {order.items.map((item) => (
                                <OrderItemRow key={item.id} {...item} />
                              ))}
                            </div>

                            <Separator />

                            <div className="flex justify-between text-sm font-semibold text-gray-900">
                              <span>Total</span>
                              <span>${orderTotal.toFixed(2)}</span>
                            </div>
                          </div>
                        );
                      })}

                      {orders.length > 3 && (
                        <button className="w-full text-sm text-blue-600 hover:text-blue-700 py-2">
                          View all orders ({orders.length})
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <DrawerFooter className="border-t border-gray-200 flex flex-row px-6 py-4 space-y-2 w-full mb-4">
            <DrawerClose asChild>
              <Button variant="ghost" className=" flex-1 w-full h-11 rounded-full">
                Close
              </Button>
            </DrawerClose>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex-1 h-11 rounded-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}