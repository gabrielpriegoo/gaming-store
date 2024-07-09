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
    <Card className="flex justify-between p-[1.875rem]">
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
      
      <Link to="/"><h1 className="text-lg font-semibold"><span className="text-primary font-bold">TheGames</span> Store</h1></Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <ShoppingCart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
