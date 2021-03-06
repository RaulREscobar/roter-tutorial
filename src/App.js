import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper! / Tus cuentas!</h1>
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/invoices">Invoices/Facturas</Link> |{" "}
          <Link to="/expenses">Expenses/Gastos</Link>
        </nav>
        <Outlet />
    </div>
    
  );
}

export default App;
