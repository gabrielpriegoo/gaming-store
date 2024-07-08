import { Badge } from "@/components/ui/badge";
import { Link } from "@radix-ui/themes";
import { KeyboardIcon } from "lucide-react";

const CategoryItems = () => {
    return (
        <>
            <Link href="#">
                <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 rounded-lg cursor-pointer select-none">
                    <KeyboardIcon size={16} />
                    <span className="font-bold text-xs">Jogos</span>
                </Badge>
            </Link>

            <Link href="#">
                <Badge variant={"outline"} className="py-4 flex items-center justify-center gap-2 rounded-lg cursor-pointer select-none">
                    <KeyboardIcon size={16} />
                    <span className="font-bold text-xs">Consoles</span>
                </Badge>
            </Link>
        </>
    );
}

export default CategoryItems;