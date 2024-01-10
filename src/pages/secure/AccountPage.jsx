import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../../features/authentication/UpdatePasswordForm";

function AccountPage() {
  return (
    <>
      <Heading as="h1">Update account</Heading>

      <Row>
        <Heading as="h2">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h2">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default AccountPage;
