import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs, { init } from "emailjs-com";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const SERVICE_ID = "your_service_id";
  const TEMPLATE_ID = "your_template_id";
  const USER_ID = "your_user_id";

  const validationSchema: Yup.Schema<ContactFormValues> = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleOnSubmit = (values: ContactFormValues) => {
    const { name, email, message } = values;
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (response) => {
        console.log("Email sent successfully:", response.text);
        // Add success message or further logic here
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        // Handle error, show an alert, etc.
      }
    );
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      <Form
        id="contact-form"
        className="border-2 rounded-lg border-blue-500 shadow-xl shadow-[#8e8eff] flex flex-col flex-[2] p-6"
      >
        <div className="flex items-center gap-5">
          <div className="mb-4 flex-1">
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-2"
            >
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-input w-full border-2 border-blue-300 p-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="form-input w-full border-2 border-blue-300 p-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Your Message"
            className="form-textarea w-full border-2 border-blue-300 p-2"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Me
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
