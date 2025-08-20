import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#A58D84] bg-opacity-95">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[calc(100vh-12rem)]">
            {/* Contact Info Section */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 sm:space-y-8 bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-r-none">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Me</h1>
                <p className="text-white/90 text-base sm:text-lg">Let&apos;s connect and build something great together!</p>
                <p className="text-white/80 text-sm sm:text-base">I would love to hear from YOU</p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-5 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Connect with me via:</p>
                  <a href="mailto:daniellaasiedu755@gmail.com" className="text-white font-medium hover:underline text-sm sm:text-base">daniellaasiedu755@gmail.com</a>
                </div>

                <div className="p-4 sm:p-5 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Phone</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Get in Touch with me via:</p>
                  <a href="tel:0203430787" className="text-white font-medium hover:underline text-sm sm:text-base">020 343 0787</a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Write me a message</h2>
                
                <form className="flex-1 flex flex-col">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="text-gray-700 text-sm font-medium">First name <span className="text-red-500">*</span></label>
                        <Input
                          type="text"
                          className="bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-gray-700 text-sm font-medium">Last name <span className="text-red-500">*</span></label>
                        <Input
                          type="text"
                          className="bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-gray-700 text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        type="email"
                        className="bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-gray-700 text-sm font-medium">Message <span className="text-red-500">*</span></label>
                      <Textarea
                        rows={4}
                        className="bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 resize-none transition-all"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3 pt-1">
                      <Checkbox 
                        id="privacy" 
                        className="h-5 w-5 rounded-md border-gray-300 mt-0.5 data-[state=checked]:bg-black" 
                        required
                      />
                      <label htmlFor="privacy" className="text-gray-700 text-sm leading-tight">
                        I agree to the <a href="#" className="text-black font-medium hover:underline">Privacy & Policy</a>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-auto pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-900 text-white rounded-xl px-6 py-3.5 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-100"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
