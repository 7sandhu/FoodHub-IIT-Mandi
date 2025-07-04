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
                      
                      <div className="flex space-x-6 mb-4">
                        <div className="text-center hover-lift cursor-pointer">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </div>
                          <span className="text-white/80 text-sm">Twitter</span>
                        </div>
                        
                        <div className="text-center hover-lift cursor-pointer">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                          </div>
                          <span className="text-white/80 text-sm">Facebook</span>
                        </div>
                        
                        <div className="text-center hover-lift cursor-pointer">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.702 0 1.04.219 1.04 1.219 0 .759-.219 1.896-.359 2.948-.199.937.479 1.699 1.406 1.699 1.687 0 2.987-1.78 2.987-4.354 0-2.275-1.636-3.866-3.977-3.866-2.71 0-4.298 2.033-4.298 4.133 0 .819.315 1.699.709 2.179.078.096.09.18.067.278-.074.315-.24.99-.272 1.129-.041.18-.135.219-.315.132-1.176-.55-1.911-2.266-1.911-3.644 0-2.963 2.151-5.683 6.204-5.683 3.259 0 5.791 2.32 5.791 5.428 0 3.237-2.04 5.846-4.877 5.846-.952 0-1.848-.496-2.155-1.09l-.586 2.233c-.212.821-.785 1.848-1.168 2.475A12.02 12.02 0 0 0 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                          </div>
                          <span className="text-white/80 text-sm">Instagram</span>
                        </div>
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