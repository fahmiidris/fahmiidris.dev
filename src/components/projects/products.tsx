import * as React from 'react';
import { QrcodeIcon, XIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';

export const Products = () => {
    const [showQRCode, setShowQRCode] = React.useState(false);

    return (
        <>
            <section id="products" className="relative">
                <div className="relative flex flex-col justify-center rounded-lg border-2 border-dashed border-cyan-400">
                    <button type="button" onClick={() => setShowQRCode(true)} className="hidden absolute right-3 -top-5 sm:inline-flex items-center space-x-2 rounded-md border border-slate-400/20 bg-slate-800 hover:bg-slate-700 py-2 pr-3 pl-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:border-transparent dark:hover:bg-slate-700">
                        <span>Open on your handphone</span>
                        <QrcodeIcon className="h-5 w-5" />
                    </button>

                    <div className="p-4">
                        <div>
                            <p className="text-sm font-semibold">Currently Under Development!</p>
                        </div>
                    </div>
                </div>
            </section>

            <Transition appear show={showQRCode} as={React.Fragment}>
                <Dialog as="div" className="relative z-40" onClose={() => setShowQRCode(false)}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform rounded-lg bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-800 dark:text-white">
                                        Scan the QR code to open the app
                                    </Dialog.Title>

                                    <div className="mt-6 rounded-md border-2 border-dashed border-cyan-400">
                                        <p className="text-sm font-semibold p-4">Currently Under Development!</p>
                                    </div>

                                    <button type="button" onClick={() => setShowQRCode(false)} className="absolute right-3 -top-[19px] inline-flex justify-center rounded-md border border-transparent bg-rose-100 p-2 text-sm font-medium text-rose-800 hover:bg-rose-200 focus:outline-none dark:bg-white dark:text-slate-800">
                                        <XIcon className="w-5 h-5" />
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
