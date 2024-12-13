// components/EventCarousel.js
import { Carousel } from 'react-responsive-carousel';

const EventCarousel = () => {
  return (
    <section className="event-carousel relative">
      <Carousel
        autoPlay
        interval={5000} // Set time interval for each slide (5000ms = 5 seconds)
        infiniteLoop // Enable infinite loop for continuous cycling
        showThumbs={false}
        showStatus={false}
        showArrows // Enable navigation arrows
        stopOnHover={false} // Ensure auto-play continues even on hover
      >
        {/* Slide 1 */}
        <div>
          <img
            src="/images/event1.jpeg"
            alt="College Fest 2024"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <p className="legend bg-black bg-opacity-60 text-white py-2 text-center text-sm md:text-base">
            Join the movement towards advancing bioeconomy and biomanufacturing, shaping a sustainable and prosperous future for India.
          </p>
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="/images/event2.jpeg"
            alt="Annual Sports Day"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <p className="legend bg-black bg-opacity-60 text-white py-2 text-center text-sm md:text-base">
            A DSIR-certified Scientific and Industrial Research Organization (SIRO)
          </p>
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="/images/event3.jpeg"
            alt="Graduation Ceremony"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <p className="legend bg-black bg-opacity-60 text-white py-2 text-center text-sm md:text-base">
            Teaching and research are strengthened through our association with IIT-Bhubaneswar, DBT-ILS, and CSIR-IMMT.
          </p>
        </div>

        {/* Slide 4 */}
        <div>
          <img
            src="/images/event4.jpg"
            alt="Affiliation Details"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <p className="legend bg-black bg-opacity-60 text-white py-2 text-center text-sm md:text-base">
            Affiliated with Utkal University, Odisha, and permanently recognized by the Department of Higher Education, Government of Odisha.
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default EventCarousel;
