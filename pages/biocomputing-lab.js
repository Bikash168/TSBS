import Layout from '../components/Layout';
import Link from 'next/link';

const BiocomputingLab = () => {
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
              <li className="text-gray-500">Biocomputing Lab</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Biocomputing Lab</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ushering in on the advances in the biological sciences and development of computer algorithms, the academics and research environment have found dedicated softwares and programs for understanding gene structure, cDNA architecture, and protein modeler complexities. Learning the basics of macromolecular assembly, positional conformation, and regulatory functions utilizing the basic and advanced informatics softwares makes for an improved understanding of the concepts in biological sciences. Furthermore, with Next-Generation Sequencing becoming easily accessible to smaller labs, the big data generated could be annotated and analyzed amicably using the Linux or Windows operating softwares. At TSBS, we provide a dedicated bio-computing lab with N-computing features for easy annotation and characterization of the gene and the protein.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">List of Softwares</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Software</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Application</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  id: 1,
                  name: 'Lasergene software (Full suite) by DNASTAR Inc.',
                  application: 'Software for all major applications in genomics, molecular biology, and structural biology. Encompasses analysis of single gene to whole-genomics.'
                }, {
                  id: 2,
                  name: 'Clustal X and Clustal W software by Conway Institute',
                  application: 'Used for multiple sequence alignments (MSA) to understand protein domains, motifs, and regulatory binding sites.'
                }, {
                  id: 3,
                  name: 'Molecular Evolution and Genetics Analysis (MEGA ver. 5.0)',
                  application: 'A platform for evolutionary distance analysis and construction of phylogenetic trees using various methods.'
                }, {
                  id: 4,
                  name: 'GeneDoc (ver. 2.7)',
                  application: 'Addresses the need for selecting conserved domains in cDNA structure.'
                }, {
                  id: 5,
                  name: 'FGENESH and FGENESHV',
                  application: 'Used for gene detection in sequences and annotation of Next-Generation Sequencing data.'
                }, {
                  id: 6,
                  name: 'Matinspector, TRANSFAC, and other neural network software',
                  application: 'For promoter sequence analysis.'
                }].map((software, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{software.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{software.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{software.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">List of Experiments Conducted</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Topic</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  id: 1, name: 'Introductory information and utilization of composite databases such as PubMed and GenBank'
                }, {
                  id: 2, name: 'Overview and utilization of protein sequence databases like NCBI nr, Swiss-Prot, PROSITE'
                }, {
                  id: 3, name: 'Concept of Basic Local Alignment Search Tool (BLAST)'
                }, {
                  id: 4, name: 'Construction of Multiple Sequence Alignment using Clustal W/Clustal X'
                }, {
                  id: 5, name: 'Using MEGA 5.0 for phylogenetic analysis'
                }, {
                  id: 6, name: 'Protein structural modeling using RASMOL/Swiss-PDB viewer'
                }, {
                  id: 7, name: 'Use of predictive protein servers for domain analysis'
                }, {
                  id: 8, name: 'Understanding Lasergene software for composite gene and protein analysis'
                }, {
                  id: 9, name: 'Getting accustomed to Gene Prediction softwares such as FGENESH'
                }, {
                  id: 10, name: 'Analysis of NGS data for Gene Ontology Annotations using BLAST2GO'
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

export default BiocomputingLab;
