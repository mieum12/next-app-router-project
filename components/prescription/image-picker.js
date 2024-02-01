'use client'
import classes from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label,name}) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()

  function handleClickImagePicker(){
    // ref에 연결된 input의 클릭을 작동시킬 수 있음
    imageInputRef.current.click()
  }

  // input에 변화가 생길떄마다 작동
  function handleImageChange(e){
    const file = e.target.files[0]

    // 파일을 첨부하지 않는 경우
    if (!file) {
      setPickedImage(null);
      return;
    }

    //data url
   const fileReader = new FileReader()
    // onload에 함수를 값으로 저장해 fileReader 객체를 생성한다
    fileReader.onload = () => {
     // 생성된 url을 상태로 저장
     setPickedImage(fileReader.result)
    }
    // 이 data url 메소드가 완료되면
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (<Image src={pickedImage} alt='유저가 선택한 이미지' fill/>) : <p>no image</p>}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required //이미지 선택 필수
        />
        <button className={classes.button} type='button' onClick={handleClickImagePicker}>Attach Images</button>
      </div>
    </div>
  )
}