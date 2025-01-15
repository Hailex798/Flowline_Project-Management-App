import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn 
  appearance={{
    layout: {
      // socialButtonsPlacement: 'bottom',
      socialButtonsVariant: 'auto',
      socialButtons: 'bg-white',
      termsPageUrl: 'https://clerk.com/terms'
    }
  }}
  />;
}

export default SignInPage;
