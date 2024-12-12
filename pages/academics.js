import Layout from '../components/Layout';
import Link from 'next/link';

export default function Academics() {
  const programs = [
    { title: 'B.Sc. Biotechnology', description: 'An undergraduate program focused on biotechnology.' },
    { title: 'M.Sc. Biotechnology', description: 'A postgraduate program offering advanced knowledge in biotechnology.' },
    { title: 'M.Sc. Environmental Science', description: 'A program for understanding environmental challenges.' },
    // Add more programs as needed
  ];

  return (
    <Layout title="Academics | TSBS">
      <main className="container mx-auto my-10 flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-1/4 p-6 bg-teal-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-600">Academics Menu</h2>
          <ul className="mt-6 space-y-3">
            {['Programs', 'Faculty', 'Publications', 'Laboratories', 'Research', 'Library', 'Advisory Board', 'Student Projects'].map((item) => (
              <li key={item} className="hover:bg-teal-100 p-2 rounded-lg transition">
                <Link href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-teal-600 hover:text-teal-800">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <section className="lg:w-3/4 lg:pl-8 mt-10 lg:mt-0">
          <h1 className="text-4xl font-bold text-teal-600">Academics at TSBS</h1>
          <p className="mt-4 text-lg text-gray-700">Explore the programs, facilities, and academic excellence at Trident School of Biotech Sciences.</p>
        </section>

        {/* Programs Section */}
        <section id="programs" className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Programs We Offer</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {programs.map((program, idx) => (
              <li key={idx} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all bg-white">
                <h3 className="font-semibold text-teal-600">{program.title}</h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </Layout>
  );
}
