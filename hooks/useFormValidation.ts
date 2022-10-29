import { useEffect, useState } from "react";
import { validation } from "@utils";
import type { FormProps } from "@utils";

type Status = { status?: "FAIL" | "SUCCESS"; error?: any };

type FormValidationHook = {
  handleSubmit: (event: any) => void;
  handleChange: (event: any) => void;
  values: FormProps;
  errors: FormProps;
  isSubmitting: boolean;
  submissionStatus: Status;
};
const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};
export function useFormValidation(): FormValidationHook {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState<FormProps>({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<Status>({});

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  function hasErrors(errors) {
    const array = Object.keys(errors).filter((error) => !!errors[error]);
    return array.length > 0;
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setErrors({});
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (!hasErrors(validationErrors)) {
      setSubmitting(true);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => setSubmissionStatus({ status: "SUCCESS" }))
        .catch((error) => setSubmissionStatus({ status: "FAIL", error }));
    }
  }

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    submissionStatus,
  };
}
