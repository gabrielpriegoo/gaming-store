import ItemsList from "@/components/ui/product-item";

const ProductsItems = () => {
    return ( 
        <div className="w-full flex gap-4 overflow-x-auto px-5 mt-4 [&::-webkit-scrollbar]:hidden ">
            <ItemsList />
        </div>
     );
}
 
export default ProductsItems;