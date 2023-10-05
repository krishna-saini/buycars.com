import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";

function Cars() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <div>All Cars</div>;
}

export default Cars;
