import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const [openCart, setOpenCart] = useState(false)

    const navigate = useNavigate()

    const handleNavigation = (path) => {
    setOpenCart(false)
    navigate(path)
  }
    return (
        <div><h1>Carrinho</h1></div>
    );
}

export default ShoppingCart;