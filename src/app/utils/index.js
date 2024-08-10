export const userRegistrationFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Please enter your user name",
    ComponentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    ComponentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    ComponentType: "input",
    type: "password",
  },
];

export const initialSignUpFormData = {
  userName: "",
  email: "",
  password: "",
};

export const userLoginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    ComponentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    ComponentType: "input",
    type: "password",
  },
];

export const initialLoginFormData = {
  email: "",
  password: "",
};
