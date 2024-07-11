import { ChevronLeft, ChevronRight, ShoppingBasket, Trash2 } from "lucide-react";
import { Badge } from "./badge";
import { Card, CardHeader } from "./card";
import { Button } from "./button";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/ui/cartItem";

const ShoppingCart = () => {

  const carts = useSelector(store => store.cart.items);

  return (
    <div>
      <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 select-none rounded-sm mt-4">
        <ShoppingBasket size={16} />
        <span className="font-bold text-xs">Ordens</span>
      </Badge>
      {carts.map((item, key) => (
        <CartItem key={key} data={item} />
      ))}
      <div className="mt-4 select-none">
        <h1>Total: R$ 10.600</h1>
      </div>
      <Button className="w-full mt-4 select-none">Finalizar minha compra</Button>

    </div>
  );
}

export default ShoppingCart;