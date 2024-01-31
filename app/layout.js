import './globals.css'
import MainHeader from "@/components/main-header/main-header";

// <head>에 들어가는 정보, 메타데이터는 여기 변수로 관리된다
export const metadata = {
  title: '마음처방전',
  description: '나의 마음에 맞는 처방전을 드립니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
