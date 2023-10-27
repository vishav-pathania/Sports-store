import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function Signin() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative hover:bg-blue-500 p-1 rounded-lg inline-block text-left">
      <div>
        {session ? (
          <button
            type="button"
            onClick={toggleDropdown}
            className="relative inline-flex items-center justify-center w-8 h-8 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            <img
              src={session.user.image}
              alt="Profile"
              className="w-7 h-7 rounded-full"
            />
          </button>
        ) : (
          <Link href="/Sign">
            <div className="block w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              

              
             </svg>
            </div>
          </Link>
        )}
    </div>

      {
    session && isOpen && (
      <div
        className="absolute right-0 mt-2 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg w-48"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          onClick={handleSignOut}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          role="menuitem"
        >
          Sign Out
        </button>
      </div>
    )
  }
    </div >
  );
}

export default Signin;
