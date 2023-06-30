import { FormWrapper } from "./FormWrapper"

type TelephoneData = {
    telephone: string
}

type TelephoneFormProps = TelephoneData & {
  updateFields: (fields: Partial<TelephoneData>) => void
}

export function TelephoneForm({
    telephone,
  updateFields,
}: TelephoneFormProps) {
  
  return (
    <FormWrapper title="Step III">
      <label>Telephone</label>
      <input
        autoFocus
        required
        type="telephone"
        value={telephone}
        onChange={e => updateFields({ telephone: e.target.value })}
      />
    </FormWrapper>
  )
}
