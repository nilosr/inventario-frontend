import React, { useState, useEffect } from 'react'
import StockDetail from './StockDetail'

function StockEventsTable(props) {
  const { products, stockEvents } = props

  return (
    <>
      <div className="">
        {products.map(product => {
          const { id } = product
          const relevantStockEvents = stockEvents.filter(
            se => se.product.id === product.id
          )
          const stockTotal = relevantStockEvents.reduce(
            (accumulator, currentElement) => {
              return accumulator + currentElement.qty
            },
            0
          )
          return (
            <>
              <StockDetail
                name={product.name}
                img={product.img}
                total={stockTotal}
                stockEvents={relevantStockEvents}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export default StockEventsTable
