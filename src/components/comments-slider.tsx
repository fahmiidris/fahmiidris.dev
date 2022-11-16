import * as React from 'react';
import clsx from 'clsx';
import { Dialog, RadioGroup, Tab, Transition } from '@headlessui/react';
import { AtSymbolIcon, CodeIcon, LinkIcon, XIcon } from '@heroicons/react/outline';

type CommentsSliderProps = {
  open: boolean;
  onClose: (value: boolean) => void;
};

const sortOptions = [{ name: 'Oldest' }, { name: 'Newest' }];

export const CommentsSlider = ({ open, onClose }: CommentsSliderProps) => {
  const [sort, setSort] = React.useState(sortOptions[1]);

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500/50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <Transition.Child
                    as={React.Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => onClose(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex h-full flex-col divide-y divide-slate-200 bg-white">
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="inline-flex items-center space-x-2 text-lg font-medium text-slate-800">
                            <span>0</span>
                            <span>Comments</span>
                          </Dialog.Title>

                          <RadioGroup value={sort} onChange={setSort}>
                            <div className="flex items-center justify-center space-x-1">
                              {sortOptions.map((option) => (
                                <RadioGroup.Option
                                  key={option.name}
                                  value={option}
                                  className={({ checked }) =>
                                    clsx(
                                      checked
                                        ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                                        : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900',
                                      'cursor-pointer rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus ab ut dolores obcaecati sit perferendis cupiditate
                        vitae quod praesentium, beatae veritatis a fuga similique repudiandae est unde blanditiis quas.
                      </div>
                    </div>

                    <div className="px-4 py-4">
                      <form>
                        <Tab.Group>
                          {({ selectedIndex }) => (
                            <>
                              <Tab.List className="flex items-center">
                                {['Write', 'Preview'].map((item, index) => (
                                  <Tab
                                    key={index}
                                    className={({ selected }) =>
                                      clsx(
                                        selected
                                          ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                                          : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900',
                                        'mr-1 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                                      )
                                    }
                                  >
                                    {item}
                                  </Tab>
                                ))}

                                {selectedIndex === 0 && (
                                  <div className="ml-auto flex items-center space-x-4">
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:text-slate-500"
                                      >
                                        <span className="sr-only">Insert link</span>
                                        <LinkIcon className="h-5 w-5" aria-hidden="true" />
                                      </button>
                                    </div>
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:text-slate-500"
                                      >
                                        <span className="sr-only">Insert code</span>
                                        <CodeIcon className="h-5 w-5" aria-hidden="true" />
                                      </button>
                                    </div>
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:text-slate-500"
                                      >
                                        <span className="sr-only">Mention someone</span>
                                        <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </Tab.List>

                              <Tab.Panels className="mt-2">
                                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                                  <label htmlFor="comment" className="sr-only">
                                    Comment
                                  </label>
                                  <div>
                                    <textarea
                                      rows={5}
                                      name="comment"
                                      id="comment"
                                      className="block w-full rounded-md border-slate-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm"
                                      placeholder="Add your comment..."
                                      defaultValue={''}
                                    />
                                  </div>
                                </Tab.Panel>
                                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                                  <div className="border-b">
                                    <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-slate-800">
                                      Preview content will render here.
                                    </div>
                                  </div>
                                </Tab.Panel>
                              </Tab.Panels>
                            </>
                          )}
                        </Tab.Group>
                        <div className="mt-2 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
