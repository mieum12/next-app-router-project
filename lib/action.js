'use server'
// 이렇게 설정하면 이 파일의 모든 함수가 server action이 된다

// Next에서는 onSumbit같은 것으로 직접 form을 제어하지 않는다
// Server Action 생성해서 form 제출을 제어하기
// 모인 정보들이 자동으로 formData로 수집된다
// -> 자스에서 제공되는 FormData class로 들어간다
import {savePrescription} from "@/lib/prescription";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isValidText(text) {
  return !text || text.trim() === ''
}

export async function submitForm(prevState, formData) {
  // form 객체 만들기
  const prescription = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  // 서버 측의 유효성 검사
  if (isValidText(prescription.title)) {
    // response를 반환
   return {
     message: 'Invalid input, 제목!!'
   }
  }
  if (isValidText(prescription.summary)) return {message: 'Invalid input, 써머리!!'}
  if (isValidText(prescription.instructions)) return {message: 'Invalid input, 내용!!'}
  if (isValidText(prescription.creator_email)) return {message: 'Invalid input, 이메일!!'}
  if (isValidText(prescription.creator)) return {message: 'Invalid input, 글쓴이!!'}
  if (!prescription.creator_email.includes('@')) return {message: 'Invalid input, 이메일@@!!'}
  if ( !prescription.image || prescription.image.size === 0) return {message: 'Invalid input, 이미지!!'}

  //데이터베이스에 저장
  console.log(prescription) //확인
  // prescription객체를 전달해 저장하기
  await savePrescription(prescription)
  // 캐시를 비워달라고 요청해야한다. (리드미에 넥스트 캐싱의 이해 참고)
  // 특정 경로에 속하는 캐시의 유효성 재검사(revalidate)를 하게한다
  // 중첩된 경로에도 영향을 주고싶다면: 두번째 인자로 "layout"을 추가해줘야한다(기본값은 page이다)
  // 즉, 해당 페이지에 연관된 캐시를 비우는 것을 말한다
  // 여기서는 prescription페이지만 재검사하면 되니깐 이렇게만 마무리

  // [Next.js bulid 시 캐싱 구축 및 이해]
  // 넥스트는 공격적인 캐싱을 한다.
  // build를 하면 넥스트는 모든 페이지를 사전 랜더링 함으로써
  // 배포 직후부터 모든 페이지가 동작할 수 있게 한다.
  // 사용자는 랜더링을 기다릴 필요 없이 즉시 완성된 페이지를 보게 된다. 개발 모드에서 시간 지역을 임의로 코드로 걸어두어도 지연이 사라지게 된다.
  // 그 다음 넥스트는 사전 랜더링된 페이지를 캐싱하여 모든 방문자에게 제공한다.
  // 하지만 당연하게도 데이터를 다시 새로 가져오지는 않는다!!
  // 왜냐하면 이미 캐싱되었기 떄문에 코드를 다시 실행하지 않고 사전에 만든 페이지만 이용한다.
  // 따라서 데이터가 변하는 경우 문제가 된다.
  // => 새로운 데이터를 등록할 떄마다 next js에게 캐시의 전체나 일부를 비우라고 해야한다!! (내장함수인 revalidatePath 사용)
  revalidatePath('/prescription')
  redirect('/prescription')
}