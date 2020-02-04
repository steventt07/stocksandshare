import React, { useEffect, useState } from "react";
import { Header, Footer } from "../Components/Layouts";
import { LoginForm } from "../Components";

export default function Login() {
  return (
    <div className="container">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}
