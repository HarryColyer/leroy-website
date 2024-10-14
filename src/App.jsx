import NavBar from "./components/NavBar"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div className='bg-color w-screen min-h-screen font-sans overflow-hidden' >
        <NavBar />
        <div>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
