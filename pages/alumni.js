// pages/alumni.js

import Layout from "../components/Layout";

const AlumniPage = () => {
  return (
    <Layout
      title="Alumni - Trident School of Biotech Sciences"
      description="Alumni page of Trident School of Biotech Sciences"
    >
      <section className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alumni Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Alumni Journey</h2>
            <p className="text-base text-gray-700 mb-4">
              When students and their parents join the college, they come with high hopes and dreams, trusting the institution to shape their future. Throughout their journey, they not only achieve their goals but often feel more satisfied than they initially expected.
            </p>
            <p className="text-base text-gray-700">
              This reflects the college's dedication to providing excellent education and overall development for its students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">A Growing Network</h2>
            <p className="text-base text-gray-700 mb-4">
              Over the past 22 years, since the first batch of M.Sc students graduated in 2004, the alumni network of this college has grown significantly. Former students have maintained strong connections with the institution and its faculty.
            </p>
            <p className="text-base text-gray-700">
              They are now engaged in employment or research across various parts of the country, showcasing the lasting bond between the college and its graduates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Stay Connected</h2>
            <p className="text-base text-gray-700 mb-4">
              The college has created various opportunities for alumni to stay connected, share their experiences, and mentor current students.
            </p>
            <p className="text-base text-gray-700">
              We encourage all alumni to remain a part of our vibrant community and contribute to the continued success of future generations of students.
            </p>
          </div>
        </div>

        {/* Alumni Mentoring Section */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Alumni Mentoring</h2>
          <p className="text-base text-gray-700 mb-4">
            Alumni mentoring is valuable for students, alumni, and the institution. It creates a mutually beneficial relationship that promotes personal and professional growth for both students and alumni, while also strengthening the institution through greater alumni involvement and improved student outcomes. By fostering these connections, educational institutions can build a supportive network that helps students succeed in their careers and continue learning throughout their lives.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Trident values its strong connection with alumni. Besides organizing alumni events, we actively encourage alumni to build relationships with current students. This provides students with the opportunity to be mentored by professionals who have experience in their chosen fields or related industries.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-4">We offer:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Career Advice and Perspectives:</strong> We provide valuable career guidance by offering insights into different career paths, industries, and job roles. Alumni share their personal experiences, including the challenges they faced and the lessons they learned, giving students practical knowledge that goes beyond what is taught in the classroom.</li>
            <li><strong>Networking Support:</strong> We focus on connecting students with industry professionals in their chosen fields, creating opportunities for internships, job shadowing, and potential employment post-graduation. This networking is key to success in the competitive job market.</li>
            <li><strong>Personal Growth:</strong> Along with professional guidance, we also focus on helping students with their personal development. We offer advice on managing work-life balance, overcoming workplace challenges, and building leadership skills.</li>
            <li><strong>Enhancing Confidence:</strong> A mentor’s belief in a student’s potential and their guidance can significantly uplift the student’s confidence. This encouragement is essential in helping students define and achieve their academic and career ambitions.</li>
            <li><strong>Improving Alumni Involvement:</strong> Our mentoring program offers alumni a valuable opportunity to reconnect with their alma mater. It helps them contribute to the growth and success of current students, fostering a sense of pride and satisfaction while strengthening their bond with the institution.</li>
          </ul>
        </section>
      </section>
    </Layout>
  );
};

export default AlumniPage;
