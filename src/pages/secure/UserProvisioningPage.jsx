import Heading from "../../ui/Heading";
import SignupForm from "../../features/authentication/SignupForm";

function UserProvisioningPage() {
  return (
    <>
      <Heading as="h1">Create a new Authorized User</Heading>
      <SignupForm />
    </>
  );
}

export default UserProvisioningPage;
