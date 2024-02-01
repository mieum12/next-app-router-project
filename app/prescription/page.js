import classes from "./page.module.css";
import Link from "next/link";
import PrescriptionGrid from "@/components/prescription/prescription-grid";
import {getPrescriptions} from "@/lib/prescription";
import {Suspense} from "react";
import LoadingPage from "@/app/prescription/loading-out";

// 데이터를 가져오는 부분을 분리된 컴포넌트로 아웃소싱
// 아래에 Suspense로 감싸준다
// suspense는 데이터가 올때까지 로딩상태를 처리하고 대체 컨텐츠(fallback)를 표시할 수 있음
async function Prescription() {
  const prescription = await getPrescriptions()
  return <PrescriptionGrid prescriptions={prescription}/>
}

export default async function PrescriptionPage() {
  // Next.js에서 useEffect나 fetch 없이 데이터를 가져오는 방법
  const prescriptions = await getPrescriptions()
  return (
    <>
    <header className={classes.header}>
      <h1>
        마음을 치료하는 곳:
        <span className={classes.highlight}> 마음처방전</span>
      </h1>
      <p>사람들의 처방전을 참고해보세요</p>
      <p className={classes.cta}>
        <Link href='./prescription/share'>
          나의 처방전도 공유해보세요!
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<LoadingPage/>}>
        <Prescription/>
      </Suspense>

    </main>
    </>
  )
}