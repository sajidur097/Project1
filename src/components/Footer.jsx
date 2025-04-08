import React from 'react'

function Footer() {
  return (
    <div>
       (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">Partner with Us</a></li>
            <li><a href="#" className="hover:underline">Ride with Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Swiggy Clone. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
