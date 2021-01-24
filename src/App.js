import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PreviewInvoice from './components/request/PreviewInvoice';
import InvoiceInfo from './components/request/InvoiceInfo';
import RequestInformation from "./components/request/RequestInformation";

function App() {
  return (
    <Router>
      <Route exact path='/' component={RequestInformation} />
      <Switch>
        <Route exact path='/invoice-info' component={InvoiceInfo} />
        <Route path='/preview-invoice' component={PreviewInvoice} />
      </Switch>
    </Router>
  );
}

export default App;
