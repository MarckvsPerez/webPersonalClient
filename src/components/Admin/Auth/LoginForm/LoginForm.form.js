import { functionsIn } from "lodash";
import * as Yup from "yup";

export function inititalValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });
}
