import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import logo from 'assets/images/logo.svg';
import {
  DOCS_OPTIONS,
  HEADER_DATA,
  MOBILE_HEADER_DATA,
  SOCIALS,
} from './data';

export const Header = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDocsOpen(false));
  
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center py-6 border-b-2 border-gray-100 laptop:justify-start laptop:space-x-10">
            <div className="flex justify-start lg:flex-1 lg:w-0">
              <a href="/">
                <span className="sr-only">Pangolin</span>
                <img
                  className="w-auto h-10 sm:h-14"
                  src={logo}
                  alt="Pangolin"
                />
              </a>
            </div>

            <div className="-my-2 -mr-2 laptop:hidden">
              <button
                onClick={() => {
                  setMobileOpen(true);
                }}
                type="button"
                className="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>

              <div
                className={`absolute inset-x-0 top-0 z-50 p-2 transition transform origin-top-right laptop:hidden ease-out duration-200 ${
                  mobileOpen
                    ? 'opacity-100 scale-100'
                    : 'hidden opacity-0 scale-95'
                }`}
              >
                <div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <img className="w-auto h-8" src={logo} alt="Pangolin" />
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={() => setMobileOpen(false)}
                          type="button"
                          className="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none"
                        >
                          <span className="sr-only">Close menu</span>
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {MOBILE_HEADER_DATA.map((items, index) => {
                          if (items.name !== 'Bridge') {
                            return (
                              <a
                                key={index}
                                rel="noreferrer"
                                onClick={() => setMobileOpen(false)}
                                href={items.href}
                                target="_blank"
                                className="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
                              >
                                <svg
                                  className="flex-shrink-0 w-6 h-6 text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={items.d}
                                  ></path>
                                </svg>
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {items.name}
                                </span>
                              </a>
                            );
                          } else {
                            return (
                              <a
                                key={index}
                                rel="noreferrer"
                                onClick={() => setMobileOpen(false)}
                                href={items.href}
                                target="_blank"
                                className="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
                              >
                                <svg
                                  className="flex-shrink-0 w-6 h-6 text-gray-600"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path d={items.d}></path>
                                </svg>
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {items.name}
                                </span>
                              </a>
                            );
                          }
                        })}
                      </nav>
                    </div>
                  </div>

                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {SOCIALS.map((items, index) => {
                        return (
                          <a
                            href={items.href}
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                            key={index}
                          >
                            {items.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="hidden space-x-6 lg:space-x-10 laptop:flex">
              {HEADER_DATA.map(function (items, index) {
                return (
                  <a
                    key={index}
                    rel="noreferrer"
                    href={items.href}
                    target="_blank"
                    className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md transition-colors hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                  >
                    {items.name}
                  </a>
                );
              })}
              <div className="relative" ref={ref}>
                <button
                  onClick={() => setDocsOpen(!docsOpen)}
                  type="button"
                  className={`${
                    docsOpen ? 'text-gray-900' : 'text-gray-500'
                  } transition-colors group inline-flex items-center text-gray-500 hover:text-gray-900 text-base font-medium bg-white rounded-md focus:outline-none focus:ring-gray-500 focus:ring-offset-2 focus:ring-2`}
                >
                  <span>Docs</span>
                  <svg
                    className={`${
                      docsOpen ? 'text-gray-600' : 'text-gray-400'
                    } transition-colors ml-2 w-5 h-5 text-gray-400 group-hover:text-gray-500`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`${
                    docsOpen
                      ? 'opacity-100 translate-y-0'
                      : 'hidden opacity-0 translate-y-1'
                  } absolute left-1/2 z-50 px-2 mt-3 w-screen max-w-md transform -translate-x-1/2 sm:px-0 transition ease-out duration-200`}
                >
                  <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                    <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                      {DOCS_OPTIONS.map((items, index) => {
                        return (
                          <a
                            key={index}
                            onClick={() => setDocsOpen(false)}
                            href={items.href}
                            className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                          >
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={items.d}
                              ></path>
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {items.name}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="hidden justify-end items-center space-x-4 lg:w-0 laptop:flex laptop:flex-1">
              {SOCIALS.map(function (items, index) {
                return (
                  <a
                    className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                    key={index}
                    rel="noreferrer"
                    href={items.href}
                    target="_blank"
                  >
                    <span className="sr-only">Pangolin on {items.name}</span>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d={items.d}></path>
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
