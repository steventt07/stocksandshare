import React from "react";
import { Header, Footer } from "../Components/Layouts";
import { ExitForm } from "../Components";

const Exit = ({ match }) => (
  <div className="container">
    <Header />
    <br />
    <ExitForm params={match.params} />
    <Footer />
  </div>
);

export default Exit;
