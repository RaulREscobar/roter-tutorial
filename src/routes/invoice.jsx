import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getInvoice, deleteInvoice } from "../data"

export default function Invoice() {
    let navigate = useNavigate()
    let location = useLocation()
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem"}}>
      <h2>Total Due / Total vencido: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date / fecha de vencimiento: {invoice.due}</p>
      <p>
        <button 
          onClick={()=> {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete / Borrar
        </button>
      </p>
    </main>
  );
}
