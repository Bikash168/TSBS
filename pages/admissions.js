import Layout from '../components/Layout';

export default function Admissions() {
  return (
    <Layout title="Admissions | TSBS">
      <main className="container mx-auto px-4 my-10 space-y-16">
        {/* Page Title */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-teal-600">Admissions at TSBS</h1>
          <p className="text-lg text-gray-700">
            Start your journey with TACT-School of Biotech Sciences (TSBS) and be part of a vibrant academic community.
          </p>
        </section>

        {/* Admission Process */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 text-center">Admission Process</h2>
          <p className="text-lg text-gray-700 text-center">
            Follow these steps to secure your spot at TSBS:
          </p>
          <ol className="list-decimal list-inside mt-4 text-lg text-gray-700 space-y-2">
            <li>Visit our campus or website to learn about our programs.</li>
            <li>Submit your application form online or in person.</li>
            <li>Provide the required documents (listed below).</li>
            <li>Attend the entrance exam or interview, if applicable.</li>
            <li>Complete the fee payment to confirm your admission.</li>
          </ol>
        </section>

        {/* Eligibility Criteria */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 text-center">Eligibility Criteria</h2>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
            <li><strong>B.Tech (Biotechnology):</strong> 10+2 with a minimum of 50% in Science (Physics, Chemistry, Mathematics/Biology).</li>
            <li><strong>B.Sc. (Biotechnology):</strong> 10+2 with a minimum of 50% in Science (Biology preferred).</li>
            <li><strong>M.Sc. (Biotechnology):</strong> Bachelor’s degree in Biotechnology or related field with a minimum of 55%.</li>
            <li><strong>M.Sc. (Applied Microbiology):</strong> Bachelor’s degree in Microbiology or related field with a minimum of 55%.</li>
            <li><strong>M.Sc. (Environmental Science):</strong> Bachelor’s degree in Environmental Science or related field with a minimum of 55%.</li>
            <li><strong>Master in Public Health:</strong> Bachelor’s degree in any discipline with a minimum of 55%.</li>
            <li><strong>Master of Social Work:</strong> Bachelor’s degree in any discipline with a minimum of 55%.</li>
            <li><strong>M.Sc. (Bioinformatics):</strong> Bachelor’s degree in Bioinformatics or related field with a minimum of 55%.</li>
          </ul>
        </section>

        {/* Key Dates */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 text-center">Key Dates</h2>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-teal-100">
                <th className="border border-gray-200 px-4 py-2">Event</th>
                <th className="border border-gray-200 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Application Start Date</td>
                <td className="border border-gray-200 px-4 py-2">January 1, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Application Deadline</td>
                <td className="border border-gray-200 px-4 py-2">March 31, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Entrance Exam</td>
                <td className="border border-gray-200 px-4 py-2">April 15, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Admission Confirmation Deadline</td>
                <td className="border border-gray-200 px-4 py-2">May 31, 2024</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Contact for Admissions */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-teal-600">Contact for Admissions</h2>
          <p className="text-lg text-gray-700">
            For any inquiries related to admissions, please contact:
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Email:</strong> admissions@tsbs.ac.in <br />
            <strong>Phone:</strong> +91 9337528083
          </p>
          <p className="text-lg text-gray-700">
            Visit us at: F2, Chandaka Industrial Estate, Infocity Area, Bhubaneswar - 751024
          </p>
        </section>
      </main>
    </Layout>
  );
}
