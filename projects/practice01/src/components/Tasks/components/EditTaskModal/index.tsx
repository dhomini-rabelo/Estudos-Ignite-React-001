import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Fragment, useState } from 'react'
import { Div } from './styles'




export default function MyModal() {
  let [isOpen, setIsOpen] = useState<boolean>(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pGray-700 p-6 text-left align-middle shadow-xl transition-all border-solid border-pGray-400 border-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-pGray-100"
                  >
                    <div className="flex justify-between items-center flex-wrap">
                        <strong>Editar tarefa</strong>
                        <span onClick={closeModal} className="cursor-pointer"><X size={24} weight="fill" /></span>
                    </div>
                  </Dialog.Title>
                  <Div.inputContainer className="mt-6 w-full">
                  <input type="text" name="task" id="task" placeholder="Adicione uma tarefa"
                        className="w-full p-4 bg-pGray-500 border-solid border-pGray-700 rounded-lg mr-2 placeholder-pGray-300 text-pGray-100" 
                    />
                  </Div.inputContainer>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full text-pGray-100 rounded-md border border-transparent bg-pPurple-800 px-4 py-3 text-sm font-medium hover:bg-pPurple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Editar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}