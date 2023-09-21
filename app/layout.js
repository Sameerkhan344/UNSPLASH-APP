import DataStore from "./context";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <DataStore>
          <Navbar />
          {children}
        </DataStore>
      </body>
    </html>
  );
}
