const { default: Banner } = require("./components/Banner/Banner");
const { default: Navbar } = require("./components/Navbar/Navbar");
const { default: SearchForm } = require("./components/SearchForm/SearchForm");

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <SearchForm/>
    </>
  );
}

export default App;
