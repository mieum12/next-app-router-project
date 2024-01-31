import Link from 'next/link'
// jsconfig.json에서 설정: root 프로젝트 폴더를 @ 로 조회 가능하다
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}><ImageSlideshow/></div>

        <div>
          <div className={classes.hero}>
            <h1>마음처방전</h1>
            <p>나의 마음과 마주하는 경험.</p>
            <p>여러분의 마음에 처방전을 드립니다.</p>
            <p>책, 음악, 영화, 드라마 등 다양한 처방을 받아보세요!</p>
            <p>또한 내가 직접 처방전을 쓸 수 있어요.</p>
            <p>사람들에게 나만의 처방을 알려주세요!</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">직접 처방해보기</Link>
            <Link href="/prescription">다른 처방전보기</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>마음처방전은 무슨 뜻인가요?</h2>
          <p>
            감정표현에 인색한 우리 사회. 내 마음을 들여다 볼 시간이 없나요?
          </p>
          <p>
            현대인들의 정신 건강 어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
          </p>
          <p>
            내 마음 상태에 따른 처방전을 내려드립니다!
          </p>
          </section>

        <section className={classes.section}>
          <h2>마음처방전에서는 어떤 것을 할 수 있나요?</h2>
          <p>
            나의 감정을 들여다볼까요?
          </p>
          <p>
            나의 감정 상태에 대해 표현해주세요. 진심이 담긴 글을 작성해 처방전을 받아보세요!
          </p>
          <p>
            내 처방전을 다른 사람들과도 함께 공유할 수 있습니다.
          </p>
        </section>
      </main>
    </>
  );
}