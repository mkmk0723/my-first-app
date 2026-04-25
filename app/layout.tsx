import type { Metadata } from "next";
import { Noto_Sans_JP, Sawarabi_Mincho } from "next/font/google"; // 明朝体を追加
import "./globals.css";

// フォントの設定
const notoText = Noto_Sans_JP({ subsets: ["latin"] });
const sawarabi = Sawarabi_Mincho({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUSgallery Prototype",
  description: "Next.jsで再現する高級ブランドサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoText.className} bg-white text-gray-900`}>
        {/* ヘッダー：全ページ共通 */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-6 flex justify-between items-center">
          <div className={`text-2xl tracking-widest ${sawarabi.className}`}>SUSgallery</div>
          <nav>
            <ul className="flex gap-8 text-xs tracking-widest uppercase">
              <li>Products</li>
              <li>Contents</li>
              <li>News</li>
              <li>Stores</li>
            </ul>
          </nav>
        </header>

        {/* 各ページの内容が入る場所 */}
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}