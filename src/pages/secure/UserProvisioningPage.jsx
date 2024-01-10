import SignupForm from "../../features/authentication/SignupForm";
import Heading from "../../ui/Heading";

function UserProvisioningPage() {
  return (
    <>
      <Heading as="h1">Create a new Authorized User</Heading>
      <SignupForm />
    </>
  );
}

export default UserProvisioningPage;
