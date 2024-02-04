import classes from "./page.module.css";
import Image from "next/image";
import {getPrescription} from "@/lib/prescription";
import {notFound} from "next/navigation";

// 동적 페이지에서 메타데이터 추가하기
export async function generateMetadata({params}) {
  const prescription = getPrescription(params.prescriptionSlug)

  // 메타데이터 생성에 실패한 경우
  if(!prescription){
    notFound()
  }

  return {
    title: prescription.title,
    description: prescription.summary,
  }
}

export default function PrescriptionDetailPage({params}) {

  // params.prescriptionSlug은
  // [prescriptionSlug]폴더 이름이 key가 되어 해당 value를 찾는 것이다
  const prescription = getPrescription(params.prescriptionSlug)

  // 어떻게 보면 404에 대한 에러 -> 없는 경로로 겟물을 보려고 한다
  // notFound 내장 함수는 이컴포넌트를 멈추고
  // 가장 가까이에 있는 not-found 페이지를 보여준다
  if(!prescription){
    notFound()
  }

  //줄바꿈을 찾아서 진짜 줄바꿈을 해준다
  prescription.instructions = prescription.instructions.replace(/\n/g, '<br/>')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={prescription.image} alt={prescription.title} fill/>
        </div>
        <div className={classes.headerText}>
          <h1>{prescription.title}</h1>
          <p className={classes.creator}>
            by <a href={`mail to:${'prescription.creator_email'}`}>{prescription.creator}</a>
          </p>
          <p className={classes.summary}>{prescription.summary}</p>
        </div>

      </header>
      <main>
         {/*
         dangerouslySetInnerHTML: 내용을 HTML 코드로 출력할때
         이때 검증이 없는 한 크로스 사이트 스크립트(XSS) 공격에 노출되기때문
         */}

        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: prescription.instructions,
          }}></p>
      </main>
    </>
  )
}