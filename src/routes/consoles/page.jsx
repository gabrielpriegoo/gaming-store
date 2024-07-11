import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { KeyboardIcon } from "lucide-react";



const Consoles = ({data}) => {
    console.log("ConsoleList data:", data);
    if (!data) {
        return null
    }
    const { name, category, price, image } = data;

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     setData(consolesData);
    // }, []);

    return (
        <div>
            <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 rounded-none select-none mt-4">
                <KeyboardIcon size={16} />
                <span className="font-bold text-xs">Consoles</span>
            </Badge>
            <div className="w-full h-[800px] grid grid-cols-2 place-items-center gap-4">
                <div className="w-[156px] h-[300px] mt-4">
                        <div className="w-full h-[170px] rounded-xl bg-[#1A1A1A]">
                            <img src={image} alt='' className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="h-12 flex flex-col items-center mt-3">
                            <span className="text-base font-medium">{name}</span>
                            <span className="text-sm font-bold">R${price}</span>
                            <span className="text-xs font-normal">{category}</span>
                            <Button className="w-full mt-3">Comprar</Button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Consoles;