import LogoImage from "@/assets/logo.png";
import Image from "next/image";

export function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image src={LogoImage} className="w-12 h-12 bg-white rounded-lg" alt="" />
      <span className="text-xl font-serif">Advocacia Pupulim</span>
    </div>
  );
}