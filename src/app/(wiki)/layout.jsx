import "../globals.css";
// You can import Leaflet's official CSS styles globally here so they apply to your map
import "leaflet/dist/leaflet.css";



export const metadata = {
  title: "My TTRPG Universe Wiki",
  description: "An interactive map and lore wiki for our campaign.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 min-h-screen antialiased">
        {/* You can easily put a global navigation header here later */}
        <main className="w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}