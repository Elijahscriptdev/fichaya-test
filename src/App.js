import './App.css';
import Navbar from './components/navbar/Navbar';
import InvoiceInfo from './components/request/InvoiceInfo';
// import RequestInformation from './components/request/RequestInformation';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <RequestInformation /> */}
      <InvoiceInfo />
    </div>
  );
}

export default App;
