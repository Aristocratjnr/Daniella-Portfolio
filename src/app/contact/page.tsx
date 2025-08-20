import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#A58D84" }}>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
            <div className="p-12 flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-white text-4xl font-bold mb-4">Contact Me</h1>
                <p className="text-white/90 text-lg mb-2">Let&apos;s connect and build something great together!</p>
                <p className="text-white/80 text-base">I would love to hear from YOU</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
                  <p className="text-white/80 text-sm mb-1">Connect with me via:</p>
                  <p className="text-white font-medium">daniellaasiedu755@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-white/80 text-sm mb-1">Get in Touch with me via:</p>
                  <p className="text-white font-medium">0203430787</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                <h2 className="text-gray-800 text-2xl font-semibold">Write me a message</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-600 text-sm">First name <span className="text-red-500">*</span></label>
                      <Input
                        type="text"
                        className="bg-gray-50 border-gray-400 rounded-2xl px-4 py-3 text-gray-700 focus:border-gray-400 focus:ring-0"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-600 text-sm">Last name <span className="text-red-500">*</span></label>
                      <Input
                        type="text"
                        className="bg-gray-50 border-gray-400 rounded-2xl px-4 py-3 text-gray-700 focus:border-gray-400 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-600 text-sm">Email Address <span className="text-red-500">*</span></label>
                    <Input
                      type="email"      
                      className="bg-gray-50 border-gray-400 rounded-2xl px-4 py-3 text-gray-700 focus:border-gray-400 focus:ring-0"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-600 text-sm">Message <span className="text-red-500">*</span></label>
                    <Textarea
                      rows={4}
                      className="bg-gray-50 border-gray-400 rounded-2xl px-4 py-3 text-gray-700 focus:border-gray-400 focus:ring-0 resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" className="h-5 w-5 rounded-md border-1 border-gray-400 data-[state=checked]:bg-black" />
                    <label htmlFor="privacy" className="text-black text-sm">
                      I agree to the Privacy & Policy
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#000000" }}
                      className="w-full hover:opacity-90 text-white rounded-2xl px-8 py-4 text-lg font-medium transition-all duration-200"
                    >
                      Send
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
