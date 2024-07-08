import { Outlet } from "react-router-dom";
import Header from "../src/components/ui/header";
import Footer from "../src/components/ui/footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
