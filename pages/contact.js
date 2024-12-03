import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-teal-600">Contact Us</h1>
        <p className="mt-4">
          <strong>Address:</strong> F2, Chandaka Industrial Estate, Infocity Area, Bhubaneswar - 751024
        </p>
        <p><strong>Email:</strong> info@tsbs.ac.in</p>
        <p><strong>Phone:</strong> 9337528083</p>
      </main>
      <Footer />
    </>
  );
}
