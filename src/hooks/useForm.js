import { useState } from "react"

export const useForm = () => {
  const [formValues, setFormValues] = useState({})

  const handleChange = evt => {
    const  { name, value } = evt.target

    setFormValues({ ...formValues, [name]: value })
  }

  return { formValues, setFormValues, handleChange }
}
