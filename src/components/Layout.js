import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
