import { ShoppingBasket, Trash2 } from "lucide-react";
import { Badge } from "./badge";
import { Card, CardHeader } from "./card";
import { Button } from "./button";

const ShoppingCart = () => {

  return (
    <div>
      <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 select-none rounded-sm mt-4">
        <ShoppingBasket size={16} />
        <span className="font-bold text-xs">Ordens</span>
      </Badge>
      <Card className="mt-4 flex justify-around items-center gap-16">
        <div className="flex items-center max-w-full">
          <div className="w-14 h-14 rounded-xl bg-[#1A1A1A]"></div>
          <CardHeader>
            <span className="text-xs font-semibold leading-none tracking-tight select-none">PlayStation 5</span>
            <span className="text-sm font-normal leading-none tracking-tight select-none">R$ 5.000</span>
          </CardHeader>
        </div>
        <Button>
          <Trash2 size={20} />
        </Button>
      </Card>
      <Card className="mt-4 flex justify-around items-center gap-16">
        <div className="flex items-center max-w-full">
          <div className="w-14 h-14 rounded-xl bg-[#1A1A1A]"></div>
          <CardHeader>
            <span className="text-xs font-semibold leading-none tracking-tight select-none">Xbox Series S</span>
            <span className="text-sm font-normal leading-none tracking-tight select-none">R$ 5.600</span>
          </CardHeader>
        </div>
        <Button>
          <Trash2 size={20} />
        </Button>
      </Card>
      <div className="mt-4 select-none">
        <h1>Total: R$ 10.600</h1>
      </div>
      <Button className="w-full mt-4 select-none">Finalizar minha compra</Button>

    </div>
  );
}

export default ShoppingCart;