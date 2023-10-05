import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
import NavBar from "@/components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavBar/> 
      {/* // add NavBar component here as it is common to all pages */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
