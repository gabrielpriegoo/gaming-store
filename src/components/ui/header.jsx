import { HomeIcon, ListOrderedIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem]">
     <Sheet>
      <SheetTrigger asChild>
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
        <div className="mt-2 flex flex-col gap-2">
          <Button variant="outline" className="w-full justify-start gap-2"><HomeIcon size={16} />Home</Button>
          <Button variant="outline" className="w-full justify-start gap-2"><PercentIcon size={16} />Consoles</Button>
          <Button variant="outline" className="w-full justify-start gap-2"><ListOrderedIcon size={16} />Jogos</Button>
        </div>
      </SheetContent>
     </Sheet>
      <Link to="/"><h1 className="text-lg font-semibold"><span className="text-primary font-bold">TheGames</span> Store</h1></Link>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
