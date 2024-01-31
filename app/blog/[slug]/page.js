export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      {/*
      {params.slug}은 url에 무엇이 올지에 따라 다르게 결정된다
      여기서는 링트로 설정해준 /blog/post-1 이런식의 경로로 들어오기때문에
      {params.slug}는 'post-1'이라는 문자열을 띄워준다
      만약 내가 임의로 blog/jiwon 이라는 url을 입력하게된다면
      {params.slug}에는 jiwon으로 뜰것이다!
      */}
      <p>{params.slug}</p>
    </main>
  )
}