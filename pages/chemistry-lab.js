import Layout from '../components/Layout';
import Link from 'next/link';

const ChemistryLab = () => {
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
              <li className="text-gray-500">Chemistry Laboratory</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Chemistry Laboratory</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              The TSBS Chemistry Laboratory provides graduate students of B.Sc. Biotechnology (Hons) with the opportunity to perform and observe a variety of chemical reactions and experiments, complementing the theoretical knowledge gained through books and lectures. The laboratory is fully equipped with the essential measuring and analytical apparatus, enabling a comprehensive study of the various branches of chemistry. To ensure safety, all experiments are conducted under the guidance of skilled lab instructors, with strict adherence to safety norms.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">List of Major Equipments</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Viscometer</li>
              <li>Centrifuge</li>
              <li>Thistle Tube</li>
              <li>Rectangular Water Bath</li>
              <li>Bunsen Burner</li>
              <li>Digital Thermometer</li>
              <li>Infrared Thermometer</li>
              <li>pH Meter</li>
              <li>Dry Bath</li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experiments Conducted</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  id: 1, name: 'Elemental Detection Test'
                }, {
                  id: 2, name: 'Test for Organic Compounds: Carboxylic test, Carbohydrate test, Phenolic test, Alcoholic test, Carboxyl test, Nitro group test, Amine group test, Amide group test'
                }, {
                  id: 3, name: 'Analysis of unknown organic compounds (solid and liquid) using melting point and boiling point measurement'
                }, {
                  id: 4, name: 'Estimation of total iron in supplied ammonium ferrous sulphate solution'
                }, {
                  id: 5, name: 'Estimation of copper in supplied copper solution'
                }, {
                  id: 6, name: 'Test for Group Radicals I, II, III, IV, and V'
                }, {
                  id: 7, name: 'Dry Test for Acid Radicals'
                }, {
                  id: 8, name: 'Dry Test for Basic Radicals'
                }, {
                  id: 9, name: 'Wet Test for Acid Radicals'
                }, {
                  id: 10, name: 'Wet Test for Basic Radicals'
                }, {
                  id: 11, name: 'Analysis of unknown radicals (four radicals)'
                }, {
                  id: 12, name: 'Estimation of calcium from calcium oxalate solution'
                }, {
                  id: 13, name: 'Estimation of barium from barium salt using gravimetric methods'
                }, {
                  id: 14, name: 'Determination of strength of hypo solution'
                }, {
                  id: 15, name: 'Determination of strength of acetic acid in vinegar solution'
                }].map((experiment, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{experiment.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{experiment.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChemistryLab;

