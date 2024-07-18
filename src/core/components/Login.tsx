import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../utility/services/auth.services";
import { loginStyles } from "../utility/styles/login.stye";
import loginFormSchema from "../utility/validations/loginForm.vaidations";

const Login = () => {
  const { classes } = loginStyles();
  const { data: users } = useGetUsersQuery();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(loginFormSchema),
    validateInputOnBlur: true,
  });

  const onSubmit = (values: { email: string; password: string }) => {
    const user =
      users &&
      users.find(
        (user) =>
          user.emailId === values.email && user.password === values.password
      );

    if (user) {
      navigate(`/users/${user.id}/dashboard`);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("isAdmin", JSON.stringify(user.role === "admin"));
      localStorage.setItem("isAuthenticated", "true");
    } else {
      setError("invalid email or password");
    }
  };

  return (
    <Group h={"100%"} className={classes.wrapper}>
      <Paper shadow="sm" p="xl" w={"450px"} m="auto">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Stack spacing={"xs"}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              withAsterisk
              {...form.getInputProps("password")}
            />
            {error && <Text color="red">{error}</Text>}
          </Stack>
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Paper>
    </Group>
  );
};

export default Login;
