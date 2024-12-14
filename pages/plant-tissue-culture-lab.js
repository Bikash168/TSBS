import Layout from '../components/Layout';
import Link from 'next/link';

const PlantTissueCultureLab = () => {
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
              <li>
                <Link href="/laboratories" className="hover:underline">
                  Laboratories
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Plant Tissue Culture Lab</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Plant Tissue Culture Lab</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Plant Tissue Culture Lab is equipped to perform advanced experiments in micropropagation, genetic modification, and the conservation of plant species. It provides a comprehensive platform for students and researchers to study plant growth and development under controlled conditions.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Equipment Available</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SL NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name of the Equipment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: 'Laminar Air Flow Bench' },
                  { id: 2, name: 'Laboratory Autoclave' },
                  { id: 3, name: 'Hot Air Oven' },
                  { id: 4, name: 'Digital Top Loading Electronic Precision Balance' },
                  { id: 5, name: 'Digital pH Meter' },
                  { id: 6, name: 'Auto Pipettes (Variable Volume)' },
                ].map((equipment) => (
                  <tr key={equipment.id} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{equipment.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{equipment.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experiment Conducted</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SL NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Title of the Experiment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Preparation of callus culture from a suitable plant explant.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Learning Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Hands-on experience with plant tissue culture techniques, including aseptic handling and callus induction.
              </li>
              <li className="text-lg text-gray-700">
                Proficiency in using specialized equipment like laminar air flow benches, autoclaves, and hot air ovens.
              </li>
              <li className="text-lg text-gray-700">
                Understanding the principles of sterilization, media preparation, and pH calibration for plant culture.
              </li>
              <li className="text-lg text-gray-700">
                Knowledge of plant tissue culture applications in agriculture, conservation, and biotechnology.
              </li>
              <li className="text-lg text-gray-700">
                Development of skills to pursue higher studies or careers in plant biotechnology and allied fields.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlantTissueCultureLab;
