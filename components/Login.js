import { Dialog, Transition } from "@headlessui/react";
import { Form, Formik } from "formik";
import { Fragment, useRef } from "react";
import { useCookies } from "react-cookie";
import * as Yup from "yup";
import BasicInput from "./BasicInput";
import cookiesConfig from "../util/cookies.config";
import toastConfig from "../util/toast.config";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  username: Yup.string().trim().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export default function Login(props) {
  const { open, setOpen } = props;

  const cancelButtonRef = useRef(null);
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmit = async (values, actions) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      actions.setErrors(data.error);
      toast.error(`${data.message}`, toastConfig);
    } else {
      setCookies("token", data.access_token, cookiesConfig);
      actions.resetForm();
      window.location.reload();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex w-full justify-center p-1 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl ">
                <section className="h-auto py-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 items-center my-2 md:my-0">
                  <div className="">
                    <Formik
                      initialValues={{
                        username: "",
                        password: "",
                      }}
                      validationSchema={LoginSchema}
                      validateOnChange={false}
                      validateOnBlur={false}
                      onSubmit={onSubmit}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <BasicInput
                                errors={errors}
                                name="username"
                                type="text"
                                placeholder="@futteboxd"
                                label="Nome de Usuário"
                                required={true}
                              />

                              <BasicInput
                                errors={errors}
                                name="password"
                                type="password"
                                placeholder="********"
                                label="Senha"
                                required={true}
                              />
                            </div>
                          </div>

                          <div className="mt-4 flex flex-col md:flex-row md:justify-between font-semibold text-sm">
                            <label className="ml-5 md:ml-0 flex text-slate-500 hover:text-slate-600 cursor-pointer text-center md:text-left align-middle mb-4 md:mb-0">
                              <input className="mr-1" type="checkbox" />
                              <span>Lembrar de mim</span>
                            </label>
                            <a
                              className="ml-5 md:ml-0  text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                              href="#"
                              children="Esqueceu sua senha?"
                            />
                          </div>
                          <div className="mt-4 flex flex-col md:flex-row md:justify-between font-semibold text-sm">
                            <div className="font-semibold text-sm text-slate-500 text-center md:text-left align-middle mb-4 md:mb-0">
                              Não possui uma conta?{" "}
                              <a
                                className="text-red-600 hover:underline hover:underline-offset-4"
                                href="register"
                              >
                                Cadastre-se
                              </a>
                            </div>
                            <div className="text-center md:text-left">
                              <button
                                className=" bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                                type="submit"
                              >
                                Entrar
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>

                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Ou
                      </p>
                    </div>
                    <div className="text-center md:text-center">
                      <label className="mr-1">Entrar com</label>
                      <button
                        type="button"
                        className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
