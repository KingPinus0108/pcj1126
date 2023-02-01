import { Fragment, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux' 
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { SiJava,SiCsharp,SiPython } from "react-icons/si";
import {setLanguage} from '../../slices/compiler';
const language = [
  {
    id: 1,
    name: 'Java',
    value: 'java',
    avatar:
      'SiJava',
  },
  {
    id: 2,
    name: 'C#',
    value: 'cs',
    avatar:
      'SiCsharp',
  },
  {
    id: 3,
    name: 'Python',
    value: 'py',
    avatar:
      'SiPython',
  }
]

const classNames =  (...classes) => {
  return classes.filter(Boolean).join(' ')
}

 const SelectList = () => {
  
  const [selected, setSelected] = useState(language[0])
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLanguage(selected.value));
  },[selected]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-60 max-sm:w-full cursor-default rounded-md border border-gray-300 user-textarea py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {selected.avatar === "SiJava" && <SiJava/>}
                {selected.avatar === "SiCsharp" && <SiCsharp/>}
                {selected.avatar === "SiPython" && <SiPython/>}
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-60 max-sm:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {language.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {person.avatar === 'SiJava' && <SiJava />}
                          {person.avatar === 'SiCsharp' && <SiCsharp />}
                          {person.avatar === 'SiPython' && <SiPython />}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SelectList