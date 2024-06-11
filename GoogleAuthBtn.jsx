import React from "react";
import { IconGoogle } from "@/assets/svgIcon";
import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const signIn = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <Button
      onClick={() => signIn()}
      startIcon={<IconGoogle className="mr-3 text-[25px] md:text-[28px]" />}
      variant="outlined"
      color="primary"
      size="large"
    >
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
