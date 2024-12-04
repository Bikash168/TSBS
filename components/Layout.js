import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          {children}
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
