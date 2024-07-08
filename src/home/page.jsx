import Categories from "./components/categories";
import bannerOff from "../assets/banner-50off.png";
import bannerSecond from "../assets/banner-second.png";
import ProductsItems from "./components/products-home";

const Home = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerOff} alt="banner"></img>
                </div>
            </div>
            <Categories />
            <ProductsItems />
            <div className="flex justify-center items-center mt-2">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerSecond} alt="banner"></img>
                </div>
            </div>
            <ProductsItems />
            <div className="flex justify-center items-center mt-2">
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <img src={bannerSecond} alt="banner"></img>
                </div>
            </div>
        </>
    )
}
 
export default Home;