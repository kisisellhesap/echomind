import FormAuth from "@/app/components/form-auth";
import React, { FC } from "react";

const Login: FC = () => {
  return (
    <div className="flex gap-5 w-full">
      <FormAuth />
    </div>
  );
};

export default Login;
