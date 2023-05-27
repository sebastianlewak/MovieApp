import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../services/firebase";
import styled from "styled-components";
import { Text } from "../Text";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: grid;
  place-items: center;
  border: 5px solid ${(props) => props.theme.colorpalette["accent-dark"]};
  max-width: 400px;
  height: 300px;
  width: 100%;
  border-radius: 20px;
`;

const Form = styled.form`
  display: grid;
  max-width: 300px;
  width: 100%;
  gap: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px 5px;
  outline: none;
  text-align: center;
  height: 35px;
  width: 100%;
`;

const Button = styled.input`
  border-radius: 10px;
  background: ${(props) => props.theme.colorpalette["accent-dark"]};
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid black;
  outline: none;
`;

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signIn = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Text variant="title" color="accent-dark">
        Log in
      </Text>
      <Form onSubmit={handleSubmit(signIn)}>
        <Input
          type="email"
          placeholder="email: ex: test@gmail.com"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>zly mail</p>}

        <Input
          type="password"
          placeholder="password: ex: test123"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>zle haslo</p>}

        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};
