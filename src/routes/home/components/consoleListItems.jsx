import ConsoleList from "@/components/ui/console-list";
import { consolesData } from "../../../api/consolesData";

const ConsoleListItem = () => {
    return (
        <>
            <div>
                <h1 className="text-lg font-bold ml-5 mt-4">Consoles</h1>
            </div>
            <div className="w-full flex gap-4 overflow-x-auto px-5 mt-4 [&::-webkit-scrollbar]:hidden ">
                {consolesData.map((console, id) => (
                    <ConsoleList key={id} data={console} />
                ))}
            </div>
        </>
    );
}

export default ConsoleListItem;