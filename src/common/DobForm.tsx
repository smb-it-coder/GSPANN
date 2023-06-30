import { FormWrapper } from "./FormWrapper"

type DobData = {
    dateOfBirth: string
}

type DobFormProps = DobData & {
  updateFields: (fields: Partial<DobData>) => void
}

export function DobForm({
  dateOfBirth,
  updateFields,
}: DobFormProps) {
  return (
    <FormWrapper title="Step II">
      <label>Date of Birth</label>
      <input autoFocus required type="date" value={dateOfBirth} onChange={e => updateFields({ dateOfBirth: e.target.value })} />
    </FormWrapper>
  )
}
