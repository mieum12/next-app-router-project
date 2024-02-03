'use client'

import classes from './page.module.css'
import ImagePicker from "@/components/prescription/image-picker";
import {submitForm} from "@/lib/action";
import PrescriptionFormSubmitButton from "@/components/prescription/prescription-form-submit";
import {useFormState} from 'react-dom'
export default function SharePrescriptionPage() {

  // useFormState은 form을 사용하는 페이지나 컴포넌트의 상태를 관리
  // 2개의 인자: form이 제출될때 실행되는 실제 server action, 초기값
  // submitForm 대신 formAction을 써준다
  // 결국 상태는 submitForm의 응답과 실행에 따라 변경된다
  const [state, formAction] = useFormState(submitForm, {message: null})
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite Contents</span>
        </h1>
        <p>Or any other prescription you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label='user image' name='image'/>
          {/*에러메세지 출력*/}
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <PrescriptionFormSubmitButton/>
          </p>
        </form>
      </main>
    </>
  );
}