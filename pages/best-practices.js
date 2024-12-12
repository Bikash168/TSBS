import React from 'react';
import Layout from '../components/Layout';

const BestPracticesPage = () => {
  return (
    <Layout>
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-teal-600 text-center">
          Best Practices at TSBS: Leading with Innovation and Excellence
        </h2>
        <p className="text-lg text-black mt-4 text-center">
          Trident School of Biotech Sciences (TSBS) fosters academic excellence through progressive practices that promote learning, research, and community engagement.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">1. Departmental Library</h3>
        <p className="text-lg text-black mt-4">
          TSBS encourages students to develop a habit of self-motivated learning through reading for enjoyment, research, personal growth, and empowerment. The departmental library offers a wide array of resources, including books on biological sciences, technical reports, and periodicals, further enriched by donations from generous supporters.
        </p>
        <p className="text-lg text-black mt-4">
          For more information, please contact: Alok Pani – 8328823287
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">2. Institutional Biosafety Committee</h3>
        <p className="text-lg text-black mt-4">
          TSBS follows the Department of Biotechnology (DBT) guidelines and has established an Institutional Biosafety Committee (IBSC) to oversee research projects involving Genetically Engineered Organisms (GEOs). The committee reviews proposals and evaluates safety protocols to ensure compliance with national and international biosafety standards.
        </p>
        <h4 className="text-xl font-semibold mt-4">Key Functions:</h4>
        <ul className="list-disc ml-6">
          <li>Review rDNA work proposals for compliance with rDNA Safety Guidelines.</li>
          <li>Evaluate toxicity and allergenicity protocols.</li>
          <li>Advise on GMO import/export and protocols.</li>
        </ul>
        <p className="text-lg text-black mt-4">
          Constitution: <br />
          Chairman: Prof. Dr. Kalpana Dash, Dean, TSBS <br />
          Member Secretary: Dr. Arup Sarkar, Professor-Advanced Research Group, TSBS <br />
          Outside Experts: Dr. Prasanta Maity, Dr. Jyotshna Rani Pradhan <br />
          Bio-Safety Officer: Dr. Naresh Chandra Mishra <br />
          Internal Experts: Dr. Anshuman Sarangi, Dr. Deoraj Sharma, Dr. Manisha Mohapatra, Dr. Somnath Jena
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">3. Institutional Ethics Committee</h3>
        <p className="text-lg text-black mt-4">
          TSBS has an Institutional Ethics Committee (IEC) in line with ICMR guidelines, providing ethical approval for research projects involving human subjects and clinical samples. The committee ensures research compliance and offers guidance throughout the project lifecycle.
        </p>
        <h4 className="text-xl font-semibold mt-4">Key Functions:</h4>
        <ul className="list-disc ml-6">
          <li>Support research involving human or clinical subjects.</li>
          <li>Provide oversight and guidance on research ethics.</li>
        </ul>
        <p className="text-lg text-black mt-4">
          Constitution: <br />
          Chairman: Dr. Lipika Nanda, Director, IIPH <br />
          Scientist Nominees: Dr. Prasanta Maity, Dr. Subhasis Chattopadhyay <br />
          Social Activist: Mr. Dilip Kumar Sahoo <br />
          Legal Expert: Mr. Bibhu Prasad Tripathy <br />
          Medical Consultant: Dr. Naresh Chandra Mishra <br />
          Other Expert: Dr. B.C. Guru
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">4. Summer Training/Internships</h3>
        <p className="text-lg text-black mt-4">
          TSBS provides students at both UG and PG levels with opportunities for hands-on training in industry and research environments. This training equips them with practical experience and skills essential for success in the highly demanding biotechnology sector.
        </p>
      </section>

      <section>
        <p className="text-lg text-black mt-4 text-center">
          These best practices ensure that TSBS remains at the forefront of biotechnology education, fostering innovation and sustainability in research and learning.
        </p>
      </section>
    </Layout>
  );
};

export default BestPracticesPage;
