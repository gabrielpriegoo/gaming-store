import { useEffect, useState } from "react";
import { Button } from "./button";
import { consolesData } from "@/api";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";


const ConsoleList = ({ data }) => {

    const { id, name, category, price, image } = data;
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem({ 
            productId: id, 
            quantity: 1 
        }));
    }


    console.log(carts)

    return (
        <div className="h-[330px]">
            
            <div className="flex gap-4 mt-2">
               <div className="w-[156px] h-[280px]">
                        <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]"><img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="h-12 flex flex-col items-center mt-3">
                            <span className="text-base font-medium">{name}</span>
                            <span className="text-sm font-bold">R$ {price}</span>
                            <span className="text-xs font-normal">{category}</span>
                            <Button className="w-full mt-3" onClick={handleAddItem}>Comprar</Button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ConsoleList;