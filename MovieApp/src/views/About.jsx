import { AuthDetails } from "../components/Auth/AuthDetails";
import { LogIn } from "../components/Auth/LogIn";
import { SignUp } from "../components/Auth/SignUp";
import { Text } from "../components/Text";

export const About = () => {
  return (
    <>
      <Text variant="large" color="accent-dark">
        About
        <LogIn />
        <SignUp />
        <AuthDetails />
      </Text>
    </>
  );
};
