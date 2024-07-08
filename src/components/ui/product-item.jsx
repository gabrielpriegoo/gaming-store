import { Button } from "./button";

const ItemsList = () => {
    return ( 
       <div className="h-[330px]">
        <div>
            <h1 className="text-lg font-bold">Consoles</h1>
        </div>
         <div className="flex gap-4 mt-2">
            <div className="w-[156px] h-[280px]">
                <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                </div>
                <div className="h-12 flex flex-col items-center mt-3">
                    <span className="text-base font-medium">Playstation 5</span>
                    <span className="text-sm font-bold">R$ 2.499</span>
                    <span className="text-xs font-normal">(5x de R$ 499)</span>
                    <Button className="w-full mt-3">Comprar</Button>
                </div>
            </div>
            <div className="w-[156px] h-[280px]">
                <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                </div>
                <div className="h-12 flex flex-col items-center mt-3">
                    <span className="text-base font-medium">Playstation 5</span>
                    <span className="text-sm font-bold">R$ 2.499</span>
                    <span className="text-xs font-normal">(5x de R$ 499)</span>
                    <Button className="w-full mt-3">Comprar</Button>
                </div>
            </div>
            <div className="w-[156px] h-[280px]">
                <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                </div>
                <div className="h-12 flex flex-col items-center mt-3">
                    <span className="text-base font-medium">Playstation 5</span>
                    <span className="text-sm font-bold">R$ 2.499</span>
                    <span className="text-xs font-normal">(5x de R$ 499)</span>
                    <Button className="w-full mt-3">Comprar</Button>
                </div>
            </div>
            <div className="w-[156px] h-[280px]">
                <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                </div>
                <div className="h-12 flex flex-col items-center mt-3">
                    <span className="text-base font-medium">Playstation 5</span>
                    <span className="text-sm font-bold">R$ 2.499</span>
                    <span className="text-xs font-normal">(5x de R$ 499)</span>
                    <Button className="w-full mt-3">Comprar</Button>
                </div>
            </div>
            <div className="w-[156px] h-[280px]">
                <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                </div>
                <div className="h-12 flex flex-col items-center mt-3">
                    <span className="text-base font-medium">Playstation 5</span>
                    <span className="text-sm font-bold">R$ 2.499</span>
                    <span className="text-xs font-normal">(5x de R$ 499)</span>
                    <Button className="w-full mt-3">Comprar</Button>
                </div>
            </div>
        </div>
       </div>
     );
}
 
export default ItemsList;