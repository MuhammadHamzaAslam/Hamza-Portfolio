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
import { TiArrowRightThick } from "react-icons/ti";
import CustomeButton from "@/components/customeButton";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile and medium layout (stacked) */}
      <div className="flex flex-col items-center px-4 py-8 md:py-12 lg:hidden">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-600">
            <Image
              src={me || "/placeholder.svg"}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#6957AF] mb-2">
            I&apos;MUHAMMAD HAMZA.
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            WEB & MOBILE APP DEVELOPER
          </h2>
          <p className="text-[#666666] dark:text-white text-base md:text-lg mb-8">
            I&apos;m a Pakistani based Web And Mobile App Developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          {/* <Button className="bg-white border border-[#9810FA] hover:border-[#9810FA] hover:bg-[#9810FA] text-gray-800 hover:text-white rounded-full px-8 py-6 h-auto group transition-colors duration-300">
            <span>MORE ABOUT ME</span>
            <span className="ml-2 w-8 h-8 rounded-full bg-[#9810FA] text-white flex items-center justify-center group-hover:bg-transparent">
              <ArrowRight className="h-4 w-4 font-extrabold" />
            </span>
          </Button> */}
          <div className="flex items-center justify-center mb-15">
            <CustomeButton icon={<TiArrowRightThick />} text="MORE ABOUT ME" />
          </div>
        </div>

        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop layout (side by side) */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side with purple background and image */}
        <div className="w-[40%] relative overflow-hidden bg-[#6957AF]">
          {/* Right-angled triangle background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full ">
              <div
                className="w-full h-full bg-white dark:bg-[#09090B]"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
              ></div>
            </div>
          </div>

          {/* Image container with rounded corners */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[80%] max-w-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={me || "/placeholder.svg"}
                alt="Profile"
                width={500}
                height={600}
                className="object-cover w-full h-full"
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

          {/* Desktop navigation */}
          <div className="flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2">
            {/* Home tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  HOME
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                <Home className="h-5 w-5" />
              </div>
            </div>

            {/* About tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  ABOUT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
            </div>

            {/* Work tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  WORK
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>

            {/* Contact tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  CONTACT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white">
                <Mail className="h-5 w-5" />
              </div>
            </div>

            {/* Chat tab */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                  CHAT
                </span>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-[#6957AF] dark:bg-purple-500"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6957AF] dark:text-purple-400">
                I&apos;MUHAMMAD HAMZA.
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#666666] dark:text-white mb-6">
              WEB & MOBILE APP DEVELOPER
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              I&apos;m a Pakistani based Web And Mobile App Developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <CustomeButton icon={<TiArrowRightThick />} text="MORE ABOUT ME" />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
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
