function isEmail(email: string): string {
  if (!email) {
    return "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return "Invalid email address";
  }
}

function isEmpty(value: string, type: string): string | undefined {
  if (!value) {
    return "Required " + type;
  }
}

export type FormProps = {
  email?: string;
  name?: string;
  subject?: string;
  body?: string;
};

const validation = (values: FormProps): FormProps => {
  let errors: FormProps = {};
  errors.email = isEmail(values.email);
  errors.name = isEmpty(values.name, "Name");
  errors.subject = isEmpty(values.subject, "Subject");
  errors.body = isEmpty(values.body, "Body");

  return errors;
};

export { validation };
