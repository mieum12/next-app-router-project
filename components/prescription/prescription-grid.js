import classes from "./prescriptions.module.css";
import PrescriptionItem from "@/components/prescription/prescription-item";
export default function PrescriptionGrid({prescriptions}) {
  return (
    <ul className={classes.prescriptions}>
      {prescriptions.map(prescription => <li key={prescription.id}>
        <PrescriptionItem {...prescription}/>
      </li>)}
    </ul>
  )
}