import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { Button } from "./button"
import { Card, CardHeader } from "./card"
import { useState } from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

  const carts = useSelector(store => store.cart.items);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  }
    return (
        <div>
            <Card className="mt-4 flex justify-around items-center ">
                <div className="flex items-center max-w-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] select-none"></div>
                    <CardHeader>
                        <span className="text-xs font-semibold leading-none tracking-tight select-none">Xbox Series S</span>
                        <span className="text-sm font-normal leading-none tracking-tight select-none">R$ 5.600</span>
                    </CardHeader>
                </div>
                <div className="flex items-center gap-4">
                    <Button className="w-[28px]" variant="outline" size="icon" onClick={handleMinusQuantity}>
                        <ChevronLeft className="text-gray-50" size={16} />
                    </Button>
                    <h1 className="select-none">{quantity}</h1>
                    <Button className="w-[28px]" variant="outline" size="icon" onClick={handlePlusQuantity}>
                        <ChevronRight className="text-gray-50" size={16} />
                    </Button>
                </div>
                <Button>
                    <Trash2 size={20} />
                </Button>
            </Card>
        </div>
    )
}

export default CartItem