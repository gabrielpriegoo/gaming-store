import GameList from "@/components/ui/games-list";


const GameListItems = () => {
    return ( 
        <div className="w-full flex gap-4 overflow-x-auto px-5 mt-4 [&::-webkit-scrollbar]:hidden ">
            <GameList />
        </div>
     );
}
 
export default GameListItems;