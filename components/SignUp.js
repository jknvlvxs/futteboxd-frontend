import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import * as Yup from "yup";
import cookiesConfig from "../util/cookies.config";
import toastConfig from "../util/toast.config";
import BasicInput from "./BasicInput";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters!")
    .max(14, "Username must be at most 14 characters!")
    .trim()
    .required("Required field"),
  email: Yup.string().email("Invalid email address").required("Required field"),
  password: Yup.string()
    .min(8, "Minimum password length is 8 characters")
    .required("Required field"),
  notification: Yup.boolean(),
});

export default function SignUp() {
  const router = useRouter();
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmit = async (values, actions) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      console.error(`An error occurred: ${data.message}`);
      actions.setErrors(data.error);
      toast.error(`${data.message}`, toastConfig);
    } else {
      setCookies("token", data.access_token, cookiesConfig);
      actions.resetForm();
      router.push("/");
    }
  };

  return (
    <section>
      <div className="max-w-1xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-800">
              Sign-up on Futteboxd.
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5 pb-10">
        <div className="relative z-10">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              notification: false,
            }}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="space-y-12 bg-white rounded-md  shadow-lg">
                  <div className="border-b border-gray-900/10 p-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Join our community
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Become part of the best football match review platform.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <BasicInput
                        errors={errors}
                        name="username"
                        type="text"
                        placeholder="@futteboxd"
                        label="Username"
                        required={true}
                      />

                      <BasicInput
                        errors={errors}
                        name="email"
                        type="email"
                        placeholder="user@futteboxd.com"
                        label="Email"
                        required={true}
                      />
                      <BasicInput
                        errors={errors}
                        name="password"
                        type="password"
                        placeholder="********"
                        label="Password"
                        required={true}
                      />

                      <div className="sm:col-span-3">
                        <div className="space-y-5 mt-10">
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <Field id="notification" name="notification">
                                {({ field }) => (
                                  <input
                                    {...field}
                                    id="notification"
                                    name="notification"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                )}
                              </Field>
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="notification"
                                className="font-medium text-gray-900"
                                children="I want to receive notifications via email."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-1 space-y-5 px-12">
                      <fieldset></fieldset>
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-x-6 px-12 pb-5">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        children="Sign Up"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
