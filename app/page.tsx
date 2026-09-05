
import Image from "next/image";
import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ThemeToggle from "./components/ThemeToggle";

export default function page(){
  return (
    <div className = "relative overflow-clip"
    id ="home">
      <Sections />
      <Navbar />
      <ThemeToggle />
      <TopBackground /> 
      <Image 
      src = "/bottom_gradient_mobile.svg"
      alt = "Bottom gradient background"
      width = {1024}
      height = {700}
      className = "absolute bottom-0 min-w-[1024] min-h-[700px] -z-50 md:hidden"
      />
      <Image 
      src = "/bottom_gradient.svg"
      alt = "Bottom gradient background"
      width = {1557}
      height = {936}
      className = "absolute -bottom-[175px] left-1/2 -translate-x-1/2 min-w-[1557px] min-h-[936px] -z-50 hidden md:block"
      />

      
    </div>
  )
}
