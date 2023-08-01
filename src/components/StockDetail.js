import React from 'react'
import { useEffect, useState } from 'react'
import ModalAddRemove from './ModalAddRemove'

function StockDetail(props) {
  const [show, setShow] = useState(false)
  const { name, total, img, stockEvents } = props

  return (
    <div className=" pb-2   ">
      <h2
        className="font-bold text-center cursor-pointer select-none"
        onClick={() => setShow(!show)}
      >
        Produto: {name} | Total: {total}
      </h2>
      <ModalAddRemove nome={name} />
      {show && (
        <div className="flex flex-col items-center">
          {stockEvents.map(event => (
            <div className="bg-slate-300 rounded-md w-3/4 m-3 border-2 border-black border-r-2 p-4">
              <p>Ação: {event.type}</p>
              <p>Quantidade: {event.qty}</p>
              <p className="font-semibold"> {event.resp}</p>
              <p>Data: {event.date}</p>
            </div>
          ))}
        </div>
      )}
      <div className="w-full bg-gray-600 h-[2px] " />
    </div>
  )
}
export default StockDetail
