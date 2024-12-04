import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = "TSBS" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Learn about TACT-School of Biotech Sciences (TSBS), a leader in biotechnology education and research."
        />
      </Head>
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
    </>
  );
}
