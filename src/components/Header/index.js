import React from "react";
const navigation = [
  { name: "SIGN IN", href: "#" },
  { name: "LEGAL", href: "#" },
  { name: "LICENCES", href: "#" },
  { name: "SECURITY", href: "#" },
  { name: "CAREERS", href: "#" },
  { name: "PRESS", href: "#" },
  { name: "SUPPORT", href: "#" },
  { name: "STATUS", href: "#" },
  { name: "CODEBLOG", href: "#" },
];

const logo = "/assets/logo.svg";
const eye = "/assets/eye-button.png";
function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto min-w-full px-16 md:px-12 sm: px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="w-8 w-auto" src={logo} alt="Cash app" />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigation.map((navLink, index) => (
                <a
                  href={navLink.href}
                  key={index}
                  className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-xxxs lg:text-xxs font-agrandirbold"
                >
                  {navLink.name}
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img className="w-16" src={eye} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isMenuOpen && (
        <div
          className=""
          id="mobile-menu"
          onClick={(open) => {
            setIsMenuOpen(true);
          }}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((navLink, index) => (
              <a
                href={navLink.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bolder"
              >
                {navLink.name}
              </a>
            ))}
          </div>
        </div>
      )} */}
    </nav>
  );
}

export default Header;
