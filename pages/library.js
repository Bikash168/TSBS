import Layout from '../components/Layout';
import Link from 'next/link';

export default function Library() {
  const facilities = [
    {
      title: 'Extensive Book Collection',
      description: 'A comprehensive collection of academic, reference, and leisure reading books across various disciplines.'
    },
    {
      title: 'Digital Resources',
      description: 'Access to e-books, research papers, and online journals through institutional subscriptions.'
    },
    {
      title: 'Study Spaces',
      description: 'Dedicated quiet zones and collaborative spaces for focused learning and group discussions.'
    },
    {
      title: 'Research Assistance',
      description: 'Guidance for students and faculty in conducting academic research and sourcing credible references.'
    },
    {
      title: 'Library Management System',
      description: 'An advanced library system for seamless book borrowing, returning, and tracking.'
    },
    {
      title: 'Special Collections',
      description: 'Rare books and curated materials for specialized research and interests.'
    }
  ];

  return (
    <Layout title="Library | TSBS">
      <main className="container mx-auto my-10 flex flex-col lg:flex-row">
        {/* Sidebar Menu */}
        <div className="w-full lg:w-1/4 p-6 bg-teal-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-600">Library Menu</h2>
          <ul className="mt-6 space-y-3">
            {[
              { name: 'About', link: '/library' },
              { name: 'Vision and Mission', link: '/vision-mission' },
              { name: 'Catalogue of Books', link: '/catalogue-books' },
              { name: 'Catalogue of Journals', link: '/catalogue-journals' },
              { name: 'E-Resources', link: '/e-resources' },
              { name: 'Suggestions', link: '#suggestions' },
              { name: 'List of Books', link: '#list-books' },
              { name: 'Open Access', link: '#open-access' },
              { name: 'Contact', link: '#contact' },
              { name: 'E-Newspaper', link: '#e-newspaper' }
            ].map((item) => (
              <li key={item.name} className="hover:bg-teal-100 p-2 rounded-lg transition">
                <Link href={item.link} className="text-teal-600 hover:text-teal-800">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <section className="lg:w-3/4 lg:pl-8 mt-10 lg:mt-0">
          <h1 className="text-4xl font-bold text-teal-600">Library at TSBS</h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover a world of knowledge and resources at the Trident School of Biotech Sciences Library.
          </p>

          {/* Library Overview */}
          <section id="overview" className="mt-10">
            <h2 className="text-2xl font-bold text-teal-600">Library Overview</h2>
            <p className="mt-4 text-gray-700">
              The TSBS Library is a hub of academic resources designed to support learning, teaching, and research for students and faculty alike. 
              With a rich collection of books, journals, and digital materials, the library fosters an environment of intellectual growth and discovery.
            </p>
          </section>

          {/* Facilities */}
          <section id="facilities" className="mt-10">
            <h2 className="text-2xl font-bold text-teal-600">Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {facilities.map((facility, idx) => (
                <li key={idx} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all bg-white">
                  <h3 className="font-semibold text-teal-600">{facility.title}</h3>
                  <p className="mt-2 text-gray-600">{facility.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </Layout>
  );
}
