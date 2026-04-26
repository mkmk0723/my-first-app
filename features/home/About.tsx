import Image from "next/image";

export default function About() {
  return (
<section className="max-w-5xl mx-auto py-32 px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[4/5]">
  <Image src="/images/about.jpg" alt="About" fill className="object-cover" />
</div>
<div className="space-y-6">
  <h3 className="text-2xl tracking-widest border-b pb-4">ABOUT</h3>
  <p className="leading-relaxed text-sm">
    暮らしに寄り添う、確かなもの。<br />
    私たちは、日々の何気ない瞬間を豊かに彩るアイテムをセレクトしています。
  </p>
  <button className="text-xs tracking-widest border border-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition">
    LEARN MORE
  </button>
</div>
</section>
  );
}

