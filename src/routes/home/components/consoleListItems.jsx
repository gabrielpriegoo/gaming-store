import ConsoleList from "@/components/ui/console-list";

const ConsoleListItem = () => {
    return ( 
        <div className="w-full flex gap-4 overflow-x-auto px-5 mt-4 [&::-webkit-scrollbar]:hidden ">
            <ConsoleList />
        </div>
     );
}
 
export default ConsoleListItem;