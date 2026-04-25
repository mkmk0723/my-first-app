import { Sawarabi_Mincho } from "next/font/google";

const sawarabi = Sawarabi_Mincho({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* メインビジュアル */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-100">
        {/* 本来はここに美しいチタンの画像を入れますが、まずはグレーの背景で構造を作ります */}
        <div className="relative z-10 text-center">
          <h2 className={`${sawarabi.className} text-5xl md:text-7xl tracking-tighter leading-tight`}>
            一期一会
          </h2>
          <p className="mt-6 text-sm tracking-[0.2em] uppercase">The Art of Titanium</p>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="max-w-5xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className={`${sawarabi.className} text-3xl mb-6`}>保温性能</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              温かさは通常すぐに逃げていく。けれど、真空二重構造のチタンタンブラーは、その温度を長く保ちます。
            </p>
          </div>
          <div className="aspect-[4/5] bg-gray-200">
             {/* ここに製品画像が入るイメージ */}
          </div>
        </div>
      </section>
    </main>
  );
}