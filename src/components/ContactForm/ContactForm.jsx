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
        <Form>
          <label>Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          </label>
          <label>Number
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};