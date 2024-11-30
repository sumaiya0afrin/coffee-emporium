import Banner from "./components/Banner";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <section className="w-4/5 mx-auto">
        <Follow></Follow>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
