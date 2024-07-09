import { useEffect, useState } from "react";
import { Button } from "./button";
import { gameData } from "@/api";

const GameList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(gameData);
    }, []);

    return (
        <div className="h-[330px]">
            <div>
                <h1 className="text-lg font-bold">Jogos</h1>
            </div>
            <div className="flex gap-4 mt-2">
                {data.map((game) => (
                    <div key={game.id} className="w-[156px] h-[280px]">
                        <div className=" w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                            <img src={game.image} alt={game.name} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="h-12 flex flex-col items-center mt-3">
                            <span className="text-base font-medium">{game.name}</span>
                            <span className="text-sm font-bold">R$ {game.price}</span>
                            <span className="text-xs font-normal">{game.category}</span>
                            <Button className="w-full mt-3">Comprar</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameList;