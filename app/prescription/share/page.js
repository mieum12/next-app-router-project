import classes from './page.module.css'
import ImagePicker from "@/components/prescription/image-picker";
export default function SharePrescriptionPage() {
  // Next에서는 onSumbit같은 것으로 직접 form을 제어하지 않는다
  // Server Action 생성해서 form 제출을 제어하기
  // 모인 정보들이 자동으로 formData로 수집된다
  // -> 자스에서 제공되는 FormData class로 들어간다
  async function submitForm(formData) {
    'use server' //server action 생성, 서버에서만 작동하도록 보장하는 기능

    // form 객체 만들기
    const prescription = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instruction: formData.get('instruction'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    //데이터베이스에 저장
    console.log(prescription) //확인
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite Contents</span>
        </h1>
        <p>Or any other prescription you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={submitForm}>
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
          <p className={classes.actions}>
            <button type="submit">Share Prescription</button>
          </p>
        </form>
      </main>
    </>
  );
}