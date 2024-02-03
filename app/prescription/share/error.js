'use client'
// 에러 컴포넌트는 반드시 클라이어언트 컴포넌트여야한다
// Nextjs는 클라이언트 측에서 발생한 에러를 잡기 때문이다
// 즉, 서버에서 페이지가 랜더링 된 후에 에러를 잡음
export default function Error() {
  return (
    <main className='error'>
      <h1>ERROR!!!!!!</h1>
      <p>유효하지 않은 양식의 제출입니다!!</p>
    </main>
  )
}