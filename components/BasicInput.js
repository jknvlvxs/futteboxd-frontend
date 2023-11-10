import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

function getStyles(error) {
  if (error) {
    return {
      border: "1px solid red",
    };
  }
  return {};
}

export default function BasicInput(ref) {
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor={ref.name}
          className="block text-sm font-medium leading-6 text-gray-900"
          children={ref.label}
        />
        <div className="mt-2">
          <Field
            name={ref.name}
            type={ref.type}
            required={ref.required}
            placeholder={ref.placeholder}
          >
            {({ field, form: { errors }, ...props }) => (
              <div>
                <input
                  {...field}
                  {...props}
                  type={ref.type}
                  required={ref.required}
                  id={ref.name}
                  style={getStyles(errors[field.name])}
                  autoComplete={ref.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors[field.name] && (
                  <ErrorMessage name={ref.name}>
                    {() => (
                      <div className="text-red-500 text-xs">
                        {errors[field.name]}
                      </div>
                    )}
                  </ErrorMessage>
                )}
              </div>
            )}
          </Field>
        </div>
      </div>
    </>
  );
}
