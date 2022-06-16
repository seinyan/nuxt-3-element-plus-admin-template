import {FormInstance} from "element-plus";

export const emailRule = { validator: () => true, message: '222', trigger: 'blur' }
export const required = { required: true, message: 'Please input Activity name', trigger: 'blur' }

export function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
}

export async function useValidateForm(formEl: FormInstance | undefined): Promise<boolean> {
  if (!formEl) return false
  return await formEl.validate((valid, fields) => {
    return valid
  })
}
