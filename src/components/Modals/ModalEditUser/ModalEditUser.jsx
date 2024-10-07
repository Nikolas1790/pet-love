import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import sprite from '../../../img/sprite.svg';
import XButton from "components/XButton/XButton";
import { ModalEdit,  FormContainer, TitleModalEdit, PhotoBlock, Input } from "./ModalEditUser.styled";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { useDispatch, useSelector } from "react-redux";
import { currentFull, updateUser } from "../../../redux/auth/operationsAuth";
import { selectUser } from "../../../redux/auth/selectorAuth";

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email format"),
  avatar: Yup.mixed().test(
    "fileFormat",
    "Invalid file format",
    value => {
      if (!value || typeof value === 'string') return true; 
      return value instanceof File && /\.(png|jpg|jpeg|gif|bmp|webp)$/.test(value.name);
    }
  ),

  phone: Yup.string().matches(/^\+38\d{10}$/, "Invalid phone number format"),
});

export default function ModalEditUser({ closeModals }) {
  const dispatch = useDispatch();

  const user  = useSelector(selectUser);
  useEffect(() => {
    if (!user || !user.name) {
      dispatch(currentFull());
    }
  }, [dispatch, user]);
  // console.log(user)

  const initialValues = {
    avatar: user?.avatar || '',
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
  
      if (values.avatar && typeof values.avatar !== 'string') {
        formData.append("avatar", values.avatar);
      }

 console.log(...formData);

      await dispatch(updateUser(formData)); 
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
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue  }) => (
          <Form>
            <FormContainer>
              <Input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  if (file) {
                    setFieldValue("avatar", file);
                  }
                }}
              />
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
