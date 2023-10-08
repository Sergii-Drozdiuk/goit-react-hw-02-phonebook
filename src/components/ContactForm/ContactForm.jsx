import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ContactShema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .matches(
        /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
        "Name may contain only letters, apostrophe, dash and spaces."
      )
      .required('This is a required field'),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      )
      .required('This is a required field')
      .min(9, "Please enter at least 9 characters"),
});
export class ContactForm extends Component {

    render() {
        return   <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, actions) => {
            this.props.onAddContact(values)
            actions.resetForm();
        }}

        validationSchema={ContactShema}
      >
        <Form className="flex flex-col gap-2 items-center mb-2">
          <label className="flex flex-col gap-2 items-center">Name
          <Field name="name" type="text" className="text-black rounded-lg pl-2"/>
          <ErrorMessage name="name" />
          </label>
          <label className="flex flex-col gap-2 items-center">Number
            <Field name="number" type="tel" className="text-black rounded-lg pl-2"/>
            <ErrorMessage name="number" />
          </label>
          <button type="submit" className="rounded-lg px-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 mt-3">Add contact</button>
        </Form>
      </Formik>
    }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};