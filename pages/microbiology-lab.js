import Layout from '../components/Layout';
import Link from 'next/link';

const MicrobiologyLab = () => {
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
              <li className="text-gray-500">Microbiology Laboratory</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Microbiology Laboratory</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Microbiology Laboratory at TSBS is pivotal for the biotechnology and applied microbiology courses. It focuses on the screening, isolation, and characterization of microbes, a cornerstone of success in the biotechnology discipline. With a rich variety of microbial structures, forms, and compounds (both beneficial and pathogenic), the laboratory enables students and researchers to explore their potential in multiple functional domains.
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
                  { id: 2, name: 'Binocular Research Microscope' },
                  { id: 3, name: 'Laboratory Autoclave' },
                  { id: 4, name: 'Hot Air Oven' },
                  { id: 5, name: 'Incubator/Water Bath Shaker' },
                  { id: 6, name: 'Digital Top Loading Electronic Precision Balance' },
                  { id: 7, name: 'Digital pH Meter' },
                  { id: 8, name: 'Digital Colony Counter' },
                  { id: 9, name: 'Auto Pipettes (Variable Volume)' },
                  { id: 10, name: 'BOD Incubator' },
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
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experiments Conducted</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SL NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Title of the Experiment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Sterilization and Preparation of Culture Media',
                  'Culture of Bacteria from Water and Soil',
                  'Identification and Observation of Bacteria by Gram Staining',
                  'Determination of Bacteria Sensitivity to Antibiotics',
                  'Determination of Oxygen Consumption in Microbes',
                  'Isolation and Maintenance of Organisms by Plating, Streaking, Serial Dilution Method, Slants, and Stab',
                  'Pure Culture Techniques',
                  'Growth Curve, Measurements of Bacterial Populations, and Generation Time by Turbidometry and Cell Counting',
                  'Staining Techniques for Bacteria & Fungi',
                  'Micrometry (Spores, Conidiophores, Conidia Measurements)',
                  'Effect of Temperature, Incubation Period & pH on Growth of Fungi & Bacteria',
                  'Study of Thermal Death Point (TDP) of Bacteria',
                  'Biochemical Analysis (IMViC Test, TSI, KIA, Urease, Oxidase)',
                  'Estimation of Dissolved O2 (DO), CO2 Content, Total Chloride Content, Total Alkalinity, Total Acidity, Total Hardness & Total Chlorine Content of Water Samples',
                  'Isolation and Identification of Rhizobium Species from Root Nodules and Rhizospheric Soil',
                  'Wine and Alcohol Preparation',
                  'Recombinant Protein Expression in E. coli (Beyond Syllabus)',
                  'Application of Replica Technique for Isolation of Antibiotic Sensitive and Resistant Bacteria (Beyond Syllabus)',
                  'Estimation of Sulfate-Reducing Bacterial Count using MPN Method (Beyond Syllabus)',
                  'Isolation of Extracellular Beta-Glucan from Different Fungal Strains (Beyond Syllabus)',
                ].map((experiment, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{experiment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Learning Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Mastery of techniques in microbial screening, isolation, and characterization.
              </li>
              <li className="text-lg text-gray-700">
                Hands-on experience with modern microbiology equipment and methods.
              </li>
              <li className="text-lg text-gray-700">
                Understanding microbial behavior under different environmental conditions.
              </li>
              <li className="text-lg text-gray-700">
                Skill development in conducting biochemical analysis and culture media preparation.
              </li>
              <li className="text-lg text-gray-700">
                Knowledge of advanced techniques like recombinant protein expression and beta-glucan isolation.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrobiologyLab;
