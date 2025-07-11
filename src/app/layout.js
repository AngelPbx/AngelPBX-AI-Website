import "../Assets/CSS/style.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export const metadata = {
  title: "AnglePBX AI",
  description: "AnglePBX AI",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/*  google font */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

        {/* <!-- FontAwesome Icons --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-thin.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-solid.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-regular.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
        />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"></link>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
