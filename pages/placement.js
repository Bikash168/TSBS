import React from 'react';
import Layout from '../components/Layout';

const PlacementPage = () => {
  return (
    <Layout>
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-teal-600 text-center">Placement & Career Support</h2>
        <p className="text-lg text-black mt-4 text-center">
          Our dedicated placement department supports students by providing resources, guidance, and opportunities to secure positions with top companies like Biocon, Dr. Reddy's, Cipla, and many others. Students have also joined prestigious research institutions worldwide.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">The Department</h3>
        <p className="text-lg text-black mt-4">
          The placement department facilitates a smooth transition from academics to professional careers by offering resume writing, interview prep, and internship opportunities. Our placement team includes experienced professionals dedicated to guiding students toward career success.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Placement Infrastructure</h3>
        <ul className="text-lg text-black mt-4">
          <li>AC Auditorium (Capacity-500)</li>
          <li>2 Examination Halls for written tests (Capacity-150 each)</li>
          <li>4 AC Rooms for GD</li>
          <li>6 AC Cabins for Personal Interviews</li>
          <li>Online test facility with 1300 Mbps Connectivity</li>
        </ul>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Alumni Mentoring</h3>
        <p className="text-lg text-black mt-4">
          Trident encourages strong alumni connections to provide career advice, networking opportunities, and personal development support to students. Alumni mentoring enhances student confidence and helps them navigate their professional journeys.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Meet Our Placement Team</h3>
        <ul className="text-lg text-black mt-4">
          <li>Jaydev Das, Executive Director of Placement</li>
          <li>Biplab Kumar Patra, Assistant Director, Placement</li>
          <li>Dr. Arup Sarkar, Faculty-In-charge, Placement</li>
          <li>Ashok Kumar Sarangi, Faculty-In-charge, Placement</li>
        </ul>
      </section>
    </Layout>
  );
};

export default PlacementPage;
