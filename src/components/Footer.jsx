const Footer = () => (
  <footer className="w-full bg-[#0F172A] text-white pt-20 pb-10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-6">DigiTools</h2>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-lg font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Templates</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Social Links</h4>
          <div className="flex gap-4">
            {['instagram', 'facebook', 'twitter'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-500 transition group">
                <img 
                  src={`/src/assets/${social === 'twitter' ? 'X' : social}.png`} 
                  alt={social} 
                  className="w-5 h-5 object-contain" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;