import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import sprite from '../../../img/sprite.svg';
import XButton from "components/XButton/XButton";
import { ModalEdit,  FormContainer, TitleModalEdit, PhotoBlock, Input } from "./ModalEditUser.styled";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email format"),
  avatar: Yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Invalid URL format"),
  phone: Yup.string().matches(/^\+38\d{10}$/, "Invalid phone number format"),
});

export default function ModalEditUser({ closeModals }) {

  const user = {
    avatar: null,
    name: "Name",
    email: "name@gmail.com",
    phone: "+380"
  };

  const initialValues = {
    avatar: user.avatar || '',
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("/api/update-user", values);
      closeModals();
    } catch (error) {
      alert("Error updating user data: " + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalEdit>
      <TitleModalEdit>Edit information</TitleModalEdit>
      <PhotoBlock>
        {user.avatar ? (
          <img src={user.avatar} alt="User Avatar" width={110} height={110} />
        ) : (
          <svg width={110} height={110}>
            <use href={`${sprite}#icon-user-without-photo`} />
          </svg>
        )}
      </PhotoBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormContainer>
              <Input type="text" name="avatar" placeholder="Avatar URL" />
              <ErrorMessage name="avatar" component="div" />

              <Input type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />

              <Input type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />

              <Input type="text" name="phone" placeholder="Phone" />
              <ErrorMessage name="phone" component="div" />

              <ButtonOrange label='Save' type="submit" />
            </FormContainer>
          </Form>
        )}
      </Formik>
      <XButton closeModals={closeModals} />
    </ModalEdit>
  );
}
