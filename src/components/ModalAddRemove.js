import React from 'react'
import { useEffect, useState } from 'react'

function ModalAddRemove(props) {
  const { nome, show2 } = props
  const [show, setShow] = useState(false)
  const [action, setAction] = useState('')

  useEffect(() => {
    setShow(show2)
  }, [])

  return (
    <>
      <div className="flex justify-evenly py-3">
        <button
          onClick={() => {
            setShow(!show)
            setAction('Retirada')
          }}
          className="px-5 py-2 rounded-md border-2 border-slate-700 bg-red-400 select-none"
        >
          {' '}
          Retirar{' '}
        </button>

        <button
          onClick={() => {
            setShow(!show)
            setAction('Adição')
          }}
          className="px-3 py-2 rounded-md border-2 border-slate-700 bg-green-400 select-none"
        >
          {' '}
          Adicionar{' '}
        </button>
      </div>

      {show && (
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {nome}
              </h3>
              <div class="mt-2 px-7 py-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="qte"
                >
                  {action}
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="qte"
                  type="number"
                  placeholder="Quantidade"
                />
              </div>
              <div class="items-center px-4 py-3">
                {action === 'Retirada' ? (
                  <button
                    id="ok-btn"
                    onClick={() => setShow(!show)}
                    class="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Confirmar Retirada
                  </button>
                ) : (
                  <button
                    id="ok-btn"
                    onClick={() => setShow(!show)}
                    class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Confirmar Adição
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalAddRemove
