import { useEffect, useState } from "react";
import { Button } from "./button";
import { consolesData } from "@/api";

const ConsoleList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(consolesData);
    }, []);

    return (
        <div className="h-[330px]">
            <div>
                <h1 className="text-lg font-bold">Consoles</h1>
            </div>
            <div className="flex gap-4 mt-2">
                {data.map((console) => (
                    <div key={console.id} className="w-[156px] h-[280px]">
                        <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]"><img src={console.image} alt={console.name} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="h-12 flex flex-col items-center mt-3">
                            <span className="text-base font-medium">{console.name}</span>
                            <span className="text-sm font-bold">R$ {console.price}</span>
                            <span className="text-xs font-normal">{console.category}</span>
                            <Button className="w-full mt-3">Comprar</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ConsoleList;