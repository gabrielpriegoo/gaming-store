import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { KeyboardIcon } from "lucide-react";
import { gameData } from "@/api/gamesData";
import { useEffect, useState } from "react";

const GameList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(gameData);
    }, []);

    return (
        <div>
            <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 rounded-lg cursor-pointer select-none mt-4">
                <KeyboardIcon size={16} />
                <span className="font-bold text-xs">Jogos</span>
            </Badge>
            <div className="w-full h-[800px] grid grid-cols-2 place-items-center">
                {data.map((game) => (
                    <div key={game.id} className="w-[156px] h-[300px] mt-4">
                        <div className="w-full h-[170px] rounded-xl bg-[#1A1A1A]">
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