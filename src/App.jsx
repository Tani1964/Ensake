import Showdown from "./components/Showdown"
import Wheel from "./components/Wheel"



const App = () => {
  return (
    <div className="overflow-x-clip flex flex-col gap-32 lg:gap-4">
      <Showdown/>
      <Wheel/>
    </div>
  )
}

export default App