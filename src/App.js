import React from 'react'
import './App.css'
import StockEventsTable from './components/StockEventsTable'

// produto
const fetchedProducts = [
  {
    id: 1,
    name: 'Produto 1',
    img: './public/fotoTeste.jpg'
  },
  {
    id: 2,
    name: 'Produto 2',
    img: './public/fotoTeste.jpg'
  }
]

// StockEvents
const fetchedStockEvents = [
  {
    id: 1,
    type: 'add', // add, remove
    qty: 100,
    product: fetchedProducts[0], //product id
    resp: 'Nilo',
    date: '2021-09-01'
  },
  {
    id: 1,
    type: 'remove', // add, remove
    qty: -45,
    product: fetchedProducts[0], //product id
    resp: 'Nilo',
    date: '2021-09-01'
  },
  {
    id: 1,
    type: 'add', // add, remove
    qty: 5,
    product: fetchedProducts[0], //product id
    resp: 'João',
    date: '2021-09-01'
  },
  {
    id: 2,
    type: 'add', // add, remove
    qty: 50,
    product: fetchedProducts[1], //product id
    resp: 'Nilo',
    date: '2021-09-01'
  },
  {
    id: 2,
    type: 'remove', // add, remove
    qty: -49,
    product: fetchedProducts[1], //product id
    resp: 'Nilo',
    date: '2021-09-01'
  }
]

function App() {
  //console.log(fetchedProducts)
  return (
    <>
      <div className="App">
        <h1 className="font-serif w-screen text-center pb-4 ">
          Controle de Estoque Engenharia
        </h1>
        <div className="align-middle ">
          <StockEventsTable
            products={fetchedProducts}
            stockEvents={fetchedStockEvents}
          />
        </div>
      </div>
    </>
  )
}

export default App
