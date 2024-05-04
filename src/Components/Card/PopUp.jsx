import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function PopUp(props) {

  const { obj, setOpen, cancelButtonRef, open } = { ...props }
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-slate-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">

                      <div className=" ">
                        <Dialog.Title
                          as="h2"
                          className="pb-4 font-semibold leading-6 text-xl text-slate-900"
                        >
                          {obj?.name}
                        </Dialog.Title>
                        <img src={obj?.image} alt="img" className="w-full" />
                        <div className="mt-2">
                          <p className="text-sm px-2">
                            {obj?.desc}
                          </p>
                        </div>
                        <div className="mt-4 flex gap-4">
                          {obj?.tech?.map((tech_, index) => {
                            return (<p key={index} className="flex text-sm transition-transform hover:ease-in-out justify-center bg-gray-600 p-2 px-4 rounded-full hover:bg-gray-900">{tech_}</p>)
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 px-4 py-3 sm:flex pb-8 sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center px-8 rounded-md bg-slate-200 text-slate-800  py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-300 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}