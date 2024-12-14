import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link';

const FacultyPage = () => {
  const faculties = [
    {
      name: 'Dr. Kalpana Dash',
      title: 'Principal (TSBS)',
      qualifications: 'Ph.D. (Medical Microbiology), Post Doc. (CSIR)',
      area: 'Immunology, Medical Microbiology, Biochemistry',
      experience: '38 years',
      email: 'pritsbs@trident.ac.in',
      profileLink: '#',
    },
    {
      name: 'Dr. Arup Sarkar',
      title: 'Professor',
      qualifications: 'Ph.D., Post-Doc',
      area: 'Infection Biology and Immunology, Apoptosis Driven Infection, Cell Biology',
      experience: '10 Years',
      email: 'arup.s2010@gmail.com',
      profileLink: '#',
    },
    {
      name: 'Dr. Anshuman Sarangi',
      title: 'Associate Professor',
      qualifications: 'Ph.D.',
      area: 'Malaria, Immunology, Biochemistry, Clinical microbiology, NBS (New Born Screening), Plant tissue culture.',
      experience: '22 Years',
      email: 'anshumanbbsr2@gmail.com',
      profileLink: '#',
    },
    {
      name: 'Mr. Ashok Sarangi',
      title: 'Associate Professor',
      qualifications: 'MSc (BT), M.Phil (BT), MBA (HR) PGDMLT, Ph.D (Cont.)',
      area: 'Medical Microbiology, Biochemistry, Immunology',
      experience: '20 Years',
      email: 'ashokbiotech2@gmail.com',
      profileLink: '#',
    },
    {
      name: 'Dr. Deo Raj Sharma',
      title: 'Associate Professor',
      qualifications: 'Ph.D',
      area: 'Recombinant DNA Technology, Bio-Remediation, Environmental Biotechnology',
      experience: '21 Years',
      email: 'drajsharma2014@gmail.com',
      profileLink: '#',
    },
    // Add other faculty details here...
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
              <li className="text-gray-500">Our Faculties</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Our Faculties</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-teal-600 mb-2">
                    {faculty.name}
                  </h2>
                  <p className="text-sm text-gray-700 font-bold mb-1">
                    {faculty.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Qualifications:</span> {faculty.qualifications}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Area of Work:</span> {faculty.area}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Experience:</span> {faculty.experience}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Email:</span> {faculty.email}
                  </p>
                </div>
                <div>
                  <Link
                    href={faculty.profileLink}
                    className="text-teal-600 hover:underline text-sm font-semibold"
                  >
                    SEE PROFILE
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

export default FacultyPage;
