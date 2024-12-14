import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link';

const PublicationsPage = () => {
  const publications = [
    {
      title: 'Research on Immunology and Microbiology',
      authors: 'Dr. Kalpana Dash, Dr. Arup Sarkar',
      journal: 'Journal of Medical Microbiology',
      year: 2022,
      link: '#',
    },
    {
      title: 'Studies on Apoptosis and Infection Biology',
      authors: 'Dr. Arup Sarkar',
      journal: 'Cell Biology Research',
      year: 2021,
      link: '#',
    },
    {
      title: 'Innovations in Bio-Remediation',
      authors: 'Dr. Deo Raj Sharma',
      journal: 'Environmental Biotechnology Journal',
      year: 2020,
      link: '#',
    },
    {
      title: 'Advancements in Biotechnology and Clinical Research',
      authors: 'Dr. Anshuman Sarangi',
      journal: 'Clinical Microbiology Advances',
      year: 2019,
      link: '#',
    },
    {
      title: 'Medical Microbiology and Biochemistry Breakthroughs',
      authors: 'Mr. Ashok Sarangi',
      journal: 'Journal of Biochemical Sciences',
      year: 2021,
      link: '#',
    },
    // Add more publications as needed
  ];

  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="w-full mb-6 text-sm text-teal-600">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline flex items-center">
                  <span className="mr-1">🏠</span> Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Publications</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Our Publications</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-teal-600 mb-2">
                    {publication.title}
                  </h2>
                  <p className="text-sm text-gray-700 font-bold mb-1">
                    <span className="font-semibold">Authors:</span> {publication.authors}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Journal:</span> {publication.journal}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Year:</span> {publication.year}
                  </p>
                </div>
                <div>
                  <Link
                    href={publication.link}
                    className="text-teal-600 hover:underline text-sm font-semibold"
                  >
                    VIEW PUBLICATION
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicationsPage;
