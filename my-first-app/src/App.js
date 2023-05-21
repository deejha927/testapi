
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
function App() {
  return (
    <div>
      <Header />
      <div>
        <Card title={"Product1"} description={"Just check"} quantity={2} />
        <Card title={"Product2"} description={"Just check 2"} quantity={4} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
