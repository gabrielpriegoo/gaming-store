import Categories from "./components/categories";
import bannerOff from "@/assets/banner-50off.png";
import bannerDiscountConsole from "../../assets/banner-second.png";
import bannerDiscountGames from "../../assets/banner-three.png";
import ConsoleListItem from "./components/consoleListItems";
import GameListItems from "./components/gameListItems";


const Home = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerOff} alt="banner"></img>
                </div>
            </div>
            <Categories />
            <ConsoleListItem />
            <div className="flex justify-center items-center mt-2">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerDiscountConsole} alt="banner"></img>
                </div>
            </div>
            <GameListItems />
            <div className="flex justify-center items-center mt-2">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerDiscountGames} alt="banner"></img>
                </div>
            </div>
        </>
    )
}
 
export default Home;