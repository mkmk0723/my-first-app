// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/top-fv.jpg"
        alt="Main Visual"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center text-gray-800">
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] mb-6">
          日常を、静かに彩る。
        </h2>
        <p className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-50">
          Curated Lifestyle Essentials
        </p>
      </div>
    </section>
  );
}