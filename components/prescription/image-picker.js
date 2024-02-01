'use client'
import classes from "./image-picker.module.css";
import {useRef} from "react";

export default function ImagePicker({label,name}) {
  const imageInputRef = useRef()

  function handleClickImagePicker(){
    // ref에 연결된 input의 클릭을 작동시킬 수 있음
    imageInputRef.current.click()
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input기
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
        />
        <button className={classes.button} type='button' onClick={handleClickImagePicker}>Attach Images</button>
      </div>
    </div>
  )
}