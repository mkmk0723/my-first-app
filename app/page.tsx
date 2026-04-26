import { Sawarabi_Mincho } from "next/font/google";
// 1. まず、Imageコンポーネントをインポートします（ファイルの最上部に書きます）
import Image from 'next/image';
// app/page.tsx
import Hero from "../features/home/Hero"; // 作成したコンポーネントをインポート
import About from "../features/home/About"; // 作成したコンポーネントをインポート
// 他のコンポーネントがあればここに追加

const sawarabi = Sawarabi_Mincho({ weight: "400", subsets: ["latin"] });

// 2. メインのコンポーネント（Home）の中でコードを書きます
export default function Home() {
  return (
      <main className="bg-white font-serif text-gray-800">        
      <Hero />

      {/* 2. ABOUT (2枚目の画像の雰囲気を意識したセクション) */}
      <About />
      {/* 3. CATEGORY (画像が並ぶセクション) */}
      <section className="bg-[#f9f9f9] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl tracking-[0.3em] mb-16">CATEGORY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'TABLE WEAR', src: '/images/category-table-wear.jpg' },
              { name: 'DECORATION', src: '/images/category-decoration.jpg' },
              { name: 'ART', src: '/images/category-art.jpg' }
            ].map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <Image 
                    src={cat.src} 
                    alt={cat.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                <p className="text-center text-xs tracking-widest">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOG (最新の記事) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h3 className="text-center text-2xl tracking-[0.3em] mb-16">BLOG</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="relative aspect-video">
                <Image src={`/images/blog0${i}.jpg`} alt="Blog" fill className="object-cover" />
              </div>
              <p className="text-[10px] text-gray-400">2026.04.25</p>
              <h4 className="text-sm leading-snug">心地よい暮らしを作る、朝のルーティンについて</h4>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}