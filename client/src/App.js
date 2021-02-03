const { default: Banner } = require("./components/Banner/Banner");
const { default: Navbar } = require("./components/Navbar/Navbar");

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    </>
  );
}

export default App;
