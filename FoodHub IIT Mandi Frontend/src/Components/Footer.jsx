function Footer() {
        return (
              <footer className="text-gray-600 body-font relative overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-10 w-16 h-16 bg-white rounded-full blur-xl animate-float"></div>
                    <div className="absolute bottom-4 right-10 w-12 h-12 bg-white rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
                  </div>
                  
                  <div className="container px-5 py-12 mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2 text-shadow">
                          FoodHub IIT Mandi
                        </h3>
                        <p className="text-white/90 text-lg">
                          Connecting campus with quality food
                        </p>
                      </div>
                      
                      <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
                      
                      <p className="text-sm text-center text-white/90 font-medium">
                          &copy; 2025 FoodHub IIT Mandi - Built with ❤️ by 
                          <span className="font-bold text-yellow-200 ml-1">Kartavya Sandhu</span>
                      </p>
                      
                      <p className="text-xs text-center text-white/70">
                          Connecting campus with quality food, one order at a time
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
    );
}

export default Footer;