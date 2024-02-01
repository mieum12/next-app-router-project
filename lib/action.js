'use server'
// 이렇게 설정하면 이 파일의 모든 함수가 server action이 된다

// Next에서는 onSumbit같은 것으로 직접 form을 제어하지 않는다
// Server Action 생성해서 form 제출을 제어하기
// 모인 정보들이 자동으로 formData로 수집된다
// -> 자스에서 제공되는 FormData class로 들어간다
import {savePrescription} from "@/lib/prescription";
import {redirect} from "next/navigation";

export async function submitForm(formData) {

  // form 객체 만들기
  const prescription = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instruction'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  //데이터베이스에 저장
  console.log(prescription) //확인
  // prescription객체를 전달해 저장하기
  await savePrescription(prescription)
  redirect('/prescription')
}