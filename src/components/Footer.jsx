import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer footer-center bg-base-300 text-base-content text-white p-4 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 ">
        <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
    </footer>
  </div>
  )
}

export default Footer