import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          
          <Sidebar />

          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 p-6 bg-gray-50">
              {children}
            </main>
          </div>

          <RightSidebar />

        </div>
      </body>
    </html>
  );
}
