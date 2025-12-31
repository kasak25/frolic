import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-extrabold tracking-tight drop-shadow-lg">
              🎉 Frolic
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex font-medium space-x-6">
            {/* <Link
              to="/"
              className="nav-link px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Home
            </Link> */}
            <Link
              to="/"
              className="nav-link px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/institutes"
              className="nav-link px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Institutes
            </Link>
            <Link
              to="/department"
              className="nav-link px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Departments
            </Link>
            <Link
              to="/events"
              className="nav-link px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Events
            </Link>
          </div>

          {/* Right side */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-6 py-2 border border-white/30 rounded-xl hover:bg-white/10 transition"
            >
              Login
            </Link>

            <Link
              to="/signUp"
              className="px-6 py-2 border border-white/30 rounded-xl hover:bg-white/10 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-900 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Frolic Event Management. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex space-x-4 text-sm font-medium">
            <Link
              to="/privacy"
              className="px-3 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="px-3 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="#"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.55 2 22 4.46 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.46 22 2 19.55 2 16.25v-8.5C2 4.46 4.46 2 7.75 2zm4.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.27 3.88 12.1 12.1 0 0 1-8.78-4.45 4.27 4.27 0 0 0 1.32 5.7 4.22 4.22 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.99 2.96 8.55 8.55 0 0 1-5.3 1.83A8.7 8.7 0 0 1 2 19.54 12.06 12.06 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 19v-7H6v7h2.5zM7.25 11.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 19v-3.5c0-2.21-1.79-4-4-4s-4 1.79-4 4V19h2.5v-3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V19H18z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
