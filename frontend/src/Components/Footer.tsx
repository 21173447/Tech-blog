const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg">© 2024 ByteCraft. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 justify-center md:justify-end">
              <a href="/about" className="hover:text-gray-400">About</a>
              <a href="/privacy" className="hover:text-gray-400">Privacy</a>
              <a href="/terms" className="hover:text-gray-400">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  