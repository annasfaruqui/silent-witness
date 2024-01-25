import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import ButtonGroup from "../../ui/ButtonGroup";

import { useLogin } from "./useLogin";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("fake@email.com");
  const [password, setPassword] = useState("12345678");
  const { login, isLoggingIn } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form type="login" onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>

      <FormRowVertical>
        <ButtonGroup>
          <Button $grow="true" size="large" disabled={isLoggingIn}>
            {!isLoggingIn ? "Login" : <SpinnerMini />}
          </Button>
          <Button
            $grow="true"
            onClick={() => navigate(-1, { replace: true })}
            type="reset"
            size="large"
            $variation="secondary"
            disabled={isLoggingIn}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
