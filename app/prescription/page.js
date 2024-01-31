import classes from "./page.module.css";
import Link from "next/link";
import PrescriptionGrid from "@/components/prescription/prescription-grid";

export default function PrescriptionPage() {
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
      <PrescriptionGrid prescriptions={[]}/>
    </main>
    </>
  )
}