import Link from 'next/link'
// jsconfig.json에서 설정: root 프로젝트 폴더를 @ 로 조회 가능하다

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href='/meals'>Meals</Link></p>
      <p><Link href='/meals/share'>Share Meals</Link></p>
      <p><Link href='/community'>Community</Link></p>
    </main>
  );
}