import Layout from '../components/Layout';
import Link from 'next/link';

const MolecularBiologyLab = () => {
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
              <li className="text-gray-500">Molecular Biology Lab</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Molecular Biology Lab</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Molecular Biology Lab provides a platform for hands-on training in advanced molecular biology techniques using cutting-edge instruments. It is designed to enhance the research capabilities of students and faculty in the fields of genetics, biotechnology, and related disciplines.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Instruments Available</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SL NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name of the Instrument</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: 'Thermocycler (PCR Device)' },
                  { id: 2, name: 'Spectrophotometer UV-Visible' },
                  { id: 3, name: 'Digital Top Loading Electronic Precision Balance' },
                  { id: 4, name: 'Digital pH Meter' },
                  { id: 5, name: 'Horizontal Slab Gel with Electrophoresis Power Pack' },
                  { id: 6, name: 'Vertical Slab Gel with Power Pack for Electrophoresis' },
                  { id: 7, name: 'UV Trans Illuminator' },
                  { id: 8, name: 'Table Top High Speed Centrifuge' },
                  { id: 9, name: 'Auto Pipettes (Variable Volume)' },
                  { id: 10, name: 'ELISA Reader' },
                  { id: 11, name: 'Orbital Shaker' },
                  { id: 12, name: 'Homogenizer' },
                  { id: 13, name: 'Gel Rocker' },
                  { id: 14, name: 'High-Speed Refrigerated Centrifuge' },
                ].map((instrument) => (
                  <tr key={instrument.id} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{instrument.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{instrument.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experiments Conducted</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                DNA and RNA isolation using homogenizers and spectrophotometric analysis of purity and concentration.
              </li>
              <li className="text-lg text-gray-700">
                Amplification of DNA via PCR using the Thermocycler, followed by visualization with a UV transilluminator.
              </li>
              <li className="text-lg text-gray-700">
                Agarose gel electrophoresis for DNA separation using horizontal slab gels and power packs.
              </li>
              <li className="text-lg text-gray-700">
                SDS-PAGE and Western blotting for protein analysis using vertical slab gels.
              </li>
              <li className="text-lg text-gray-700">
                Quantification of enzyme activity via ELISA reader.
              </li>
              <li className="text-lg text-gray-700">
                Protein purification using centrifugation techniques, including high-speed refrigerated centrifuges.
              </li>
              <li className="text-lg text-gray-700">
                Maintaining sterile conditions and conducting microbial studies using auto pipettes and orbital shakers.
              </li>
              <li className="text-lg text-gray-700">
                pH calibration and buffer preparation using the digital pH meter.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Learning Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">Hands-on expertise with advanced molecular biology instruments.</li>
              <li className="text-lg text-gray-700">
                Understanding and application of key molecular biology experiments in research.
              </li>
              <li className="text-lg text-gray-700">
                Proficiency in data collection and analysis using modern tools.
              </li>
              <li className="text-lg text-gray-700">Ability to troubleshoot and optimize experimental protocols.</li>
              <li className="text-lg text-gray-700">
                Enhanced skills for pursuing higher studies or careers in biotechnology and life sciences.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MolecularBiologyLab;
