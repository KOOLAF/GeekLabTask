
import "./App.css";
import SideBar from "./components/Side-Bar/SideBar";
import { Alert } from "./components/Alerts/Alerts";


function App() {
  return (
    <div className=" bg-[#202020]  h-[100%] gap-2  flex">
      <div className=" w-[47px] rounded">
        <SideBar />
      </div>
      <div className="ml-6"><Alert /></div>

    </div>
  );
}

export default App;
