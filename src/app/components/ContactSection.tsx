import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-80 h-96">
                {/* Chat bubbles */}
                <div className="absolute -top-4 left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="text-orange-500 text-lg font-bold">!</div>
                </div>
                <div className="absolute top-4 left-24 bg-blue-600 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-16 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="text-orange-500 text-lg font-bold">!</div>
                </div>
                <div className="absolute bottom-16 -left-4 bg-gray-800 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 bg-gray-800 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Main illustration - Contact image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/contact.png" 
                    alt="Contact illustration" 
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="space-y-8">
              {/* Header */}
              <div className="inline-block rounded-full px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 shadow-lg">
                <h1 className="text-white font-semibold text-xl tracking-wide">CONTACT ME</h1>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-gray-700 text-lg leading-relaxed">Please leave me your message</p>
                <p className="text-gray-700 text-lg leading-relaxed">I will answer it as quickly as possible</p>
              </div>

              {/* Contact Form */}
              <form className="space-y-8 pt-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-4 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-lg focus-visible:ring-0 focus-visible:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-4 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-lg focus-visible:ring-0 focus-visible:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Contact"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-4 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-lg focus-visible:ring-0 focus-visible:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Message"
                    rows={4}
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-4 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 resize-none text-lg focus-visible:ring-0 focus-visible:border-gray-600"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 border-gray-300 rounded-full px-10 py-3 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg focus-visible:ring-0"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
