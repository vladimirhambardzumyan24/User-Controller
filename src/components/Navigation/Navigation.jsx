import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto sm:px-2 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden rounded-full lg:block h-10 w-auto"
                    src="https://hirebee-main-new.s3.amazonaws.com/staff.am/upload/2/f/c/2/2fc2a92a.png"
                    alt="Workflow"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link to="/">
                      <div className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium bg-gray-900">
                        Users
                      </div>
                    </Link>
                    <div className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Premium Users
                    </div>
                    <div className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Restaurant
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/add/user">
                  <button className="text-gray-700 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 mr-8 py-2 rounded-md text-base font-medium bg-blue-100">
                    Add User
                  </button>
                </Link>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div as="div" className="ml-3 relative">
                  <div>
                    <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user div</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium bg-gray-900">
                Users
              </div>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Premium Users
              </div>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Restaurants
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
