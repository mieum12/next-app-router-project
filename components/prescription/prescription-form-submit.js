'use client'
import {useFormStatus} from 'react-dom'

export default function PrescriptionFormSubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button disabled={pending}>
      {pending ? 'Submitting' : 'Share Prescription'}
    </button>
  )
};