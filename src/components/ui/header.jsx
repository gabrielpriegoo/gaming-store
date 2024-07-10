import { HomeIcon, ListOrderedIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShoppingCart from "./shopping-cart";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    setOpenMenu(false)
    navigate(path)
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem] rounded-none">
      <Sheet open={openMenu} onOpenChange={setOpenMenu}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleNavigation("/")}><HomeIcon size={16} />Home</Button>
            <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleNavigation("/consoles")}><PercentIcon size={16} />Consoles</Button>
            <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleNavigation("/jogos")}><ListOrderedIcon size={16} />Jogos</Button>
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/"><h1 className="text-2xl font-semibold"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-extrabold">Gaming</span> Store</h1></Link>
      <Sheet>
        <SheetTrigger asChild>
          <div className="relative flex">
            <Button size="icon" variant="outline">
              <ShoppingCartIcon />
            </Button>
            <div className="w-[18px] h-[18px] bg-red-500 rounded-full -right-1.5 -top-1.5 absolute flex justify-center items-center">
              <span className="text-[10px] font-medium select-none">0</span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader className="text-left text-lg font-semibold select-none">Meu Carrinho</SheetHeader>
          <ShoppingCart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
