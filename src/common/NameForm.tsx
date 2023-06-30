import { FormWrapper } from "./FormWrapper";

type NameData = {
  firstName: string
  lastName: string
}

type NameFormProps = NameData & {
  updateFields: (fields: Partial<NameData>) => void
}


export function NameForm({
    firstName,
    lastName,
    updateFields,
  }: NameFormProps) {
    return (
      <FormWrapper title="Step 1">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={e => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={e => updateFields({ lastName: e.target.value })}
        />
       
      </FormWrapper>
    )
  }