import * as yup from "yup";
export const schema = {
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Must Contain min 6 Characters, One Uppercase, One Lowercase and One Number"
    ),
};

export const schemaRegister = yup.object().shape({
  ...schema,
  name: yup.string().required("Name is required"),
  lastname: yup.string().required("Last Name is required"),
  confirmPassword: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Must Contain min 6 Characters, One Uppercase, One Lowercase and One Number"
    )
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const schemaLogin = yup.object().shape({
  ...schema,
});
