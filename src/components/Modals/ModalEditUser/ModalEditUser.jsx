import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import XButton from "components/XButton/XButton";
import { ModalEdit, ErrorMessage, Input, Button, FormContainer } from "./ModalEditUser.styled";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email format")
    .required("Email is required"),
  avatar: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Invalid URL format")
    .required("Avatar URL is required"),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Invalid phone number format")
    .required("Phone number is required"),
});

export default function ModalEditUser({ closeModals }) {
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Send data to backend
      await axios.post("/api/update-user", data);
      // Close modal on success
      closeModals();
    } catch (error) {
      // Show error notification
      alert("Error updating user data: " + error.message);
    }
  };

  return (
    <ModalEdit>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Input type="text" placeholder="Avatar URL" {...register("avatar")} />
          {errors.avatar && <ErrorMessage>{errors.avatar.message}</ErrorMessage>}

          <Input type="text" placeholder="Name" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Input type="text" placeholder="Phone" {...register("phone")} />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

          <Button type="submit">Save</Button>
        </FormContainer>
      </form>
      <XButton closeModals={closeModals} />
    </ModalEdit>
  );
};
