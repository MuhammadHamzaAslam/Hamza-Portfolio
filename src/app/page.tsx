import Image from "next/image";
import {
  ArrowRight,
  Home,
  User,
  Briefcase,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import me from "../../public/images/me.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile and medium layout (stacked) */}
      <div className="flex flex-col items-center px-4 py-8 md:py-12 lg:hidden">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-600">
            <Image
              src={me}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            I&apos;M MUHAMMAD HAMZA.
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            WEB & MOBILE APP DEVELOPER
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8">
            I&apos;m a Pakistani based web designer & front-end developer
            focused on crafting clean & user-friendly experiences, I am
            passionate about building excellent software that improves the lives
            of those around me.
          </p>
          <Button className="bg-white border border-[#9810FA] hover:border-[#9810FA] hover:bg-[#9810FA] text-gray-800 hover:text-white rounded-full px-8 py-6 h-auto group transition-colors duration-300">
            <span>MORE ABOUT ME</span>
            <span className="ml-2 w-8 h-8 rounded-full bg-[#9810FA] text-white flex items-center justify-center group-hover:bg-transparent">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>

        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop layout (side by side) */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side with purple background and image */}
        <div className="w-[40%] bg-purple-600 relative overflow-hidden">
          {/* Right-angled triangle shape for background - only at the bottom */}
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#7c3aed" />
              <path d="M0,100 L100,0 L100,100 Z" fill="#6d28d9" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[75%] max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={me}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-6">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <span className="sr-only">Settings</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </Button>
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-[60%] flex flex-col justify-center p-8 md:p-12 relative">
          <div className="absolute top-6 right-6">
            <ThemeToggle />
          </div>

          {/* Desktop navigation - fixed to match reference image */}
          <div className="flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2">
            {/* Home tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  HOME
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
                <Home className="h-5 w-5" />
              </div>
            </div>

            {/* About tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  ABOUT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-purple-600 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
            </div>

            {/* Work tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  WORK
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-purple-600 flex items-center justify-center text-white">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>

            {/* Contact tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-3 w-96 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  CONTACT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-purple-600 flex items-center justify-center text-white">
                <Mail className="h-5 w-5" />
              </div>
            </div>

            {/* Chat tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  CHAT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-purple-600 flex items-center justify-center text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-purple-600 dark:bg-purple-500"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 dark:text-purple-400">
                I&apos;MUHAMMAD HAMZA.
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6">
              WEB & MOBILE APP DEVELOPER
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              I&apos;m a Pakistani based web designer & front-end developer
              focused on crafting clean & user-friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <Button className="bg-white border border-[#9810FA] hover:border-[#9810FA] hover:bg-[#9810FA] text-gray-800 hover:text-white rounded-full px-8 py-6 h-auto group transition-colors duration-300">
              <span>MORE ABOUT ME</span>
              <span className="ml-2 w-8 h-8 rounded-full bg-[#9810FA] text-white flex items-center justify-center group-hover:bg-transparent">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
          <Home className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white">
          <User className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white">
          <Briefcase className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white">
          <Mail className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white">
          <MessageSquare className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
