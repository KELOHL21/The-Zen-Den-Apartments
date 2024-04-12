// import { Fragment } from 'react'
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Apartments', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#D2D6D9]">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className=" h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="flex items-center justify-center flex-1 sm:justify-start">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <img
                    className="w-auto h-12"
                    src="/public/assets/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-[#768692] text-white ' : ' hover:bg-gray-500 hover:text-white text-gray-600',
                          'rounded-md px-3 py-2 text-sm font-medium text-gray-600'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex">
                <button
                  type="button"
                  className="relative px-5 py-1 font-medium text-gray-600 border-2 border-gray-500 rounded-sm"
                >
                  Contact 
                </button>
              </div>
            </div>
          </div>

          {/* This is the drop down menu */}
         <Disclosure.Panel className="flex flex-col items-center m-auto sm:hidden ">
            <div className="space-y-1 px-2 pb-10 pt-[8rem] items-center m-auto flex flex-col justify-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-500 w-full  text-white text-[27px] items-center m-auto flex flex-row justify-center' : 'text-gray-600 text-[27px] ',
                    'block rounded-md px-3 py-6 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className='pt-[7rem] md:pt-[12rem]'>
                <button
                    type="button"
                    className="relative py-2 text-gray-600 border-2 border-gray-500 rounded-sm px-9">
                    Contact
                </button>
              </div>

            </div>
          </Disclosure.Panel> 
        </>
      )}
    </Disclosure>
  )
}
