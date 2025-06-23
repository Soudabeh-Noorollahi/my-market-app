import mymarket from "./assets/logo/mymarket.svg"

function App() {
  return (
    <div className="text-3xl text-blue-600 font-bold text-center mt-10">
      Welcome to MyMarket App!

      <img
  src={mymarket}
  alt="MyMarket Logo"
  className="h-20 w-auto mx-auto mt-4"
/>

      
    </div>
  );
}

export default App;
