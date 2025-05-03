import Image from 'next/image';

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section
        className="bg-white text-black bg-cover bg-center min-h-screen pt-24 flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/4.jpeg')" }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Ninox Nature Club</h1>
        <p className="text-2xl mt-4 font-light drop-shadow-md">Making Eco Echo</p>
      </section>

      {/* Our Purpose Section */}
      <section className="bg-white text-black flex flex-col md:flex-row items-center px-6 py-16">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This club’s purpose is to spread awareness about nature and foster a
            sense of responsibility towards the environment. Through educational sessions,
            hands-on activities, clean-up drives, and interactive events, we aim to
            inspire individuals to appreciate, protect, and preserve the natural world around them.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
          <Image
            src="/images/3.jpeg"
            alt="Planting Tree"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Events Summary Section */}
      <section className="bg-gray-50 text-black flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/images/2.jpeg"
            alt="Cleanup Drive"
            width={600}  // change width if req
            height={400} // change width if req
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Events Summary</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This club has organized several impactful events aimed at promoting environmental
            and social well-being. Some of our notable initiatives include a plantation drive
            in collaboration with foreign delegates, a community-wide cleanliness drive, and
            Daan Utsav—a donation event encouraging the spirit of giving.
            Each event brought people together for a common cause and left a lasting impact.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white text-black">
        <div className="flex flex-col items-center text-center my-12">
          <h2 className="text-4xl font-bold mb-8">Blogs</h2>

          <div className="flex items-center justify-center gap-6 w-full px-4">
            {/* Left Arrow */}
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <span className="text-2xl">&#8592;</span>
            </button>

            {/* Blog Card */}
            <div className="bg-white text-black flex rounded-xl shadow-md p-6 max-w-4xl w-full">
              {/* Image */}
              <Image
                src="/images/1.jpeg"
                alt="Butterfly"
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />

              {/* Content */}
              <div className="ml-6 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Article Title</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pulvinar magna eu sapien commodo scelerisque. Nulla facilisi...
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold">Author Name</p>
                  <div className="flex gap-4 text-xl">
                    <button>&#9825;</button>
                    <button>&#128172;</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative bg-white py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Testimonials
        </h2>

        <div className="relative w-full px-4 sm:px-8 flex flex-col lg:flex-row lg:justify-between gap-8">

          {/* Left Section */}
          <div className="flex flex-col space-y-10">
            {/* Row 1: Card 1 & 2 and Card 4 */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
              {/* Column 1: Card 1 & 2 */}
              <div className="flex flex-col space-y-10">
                {/* Card 1 */}
                <div className="w-96 h-40 bg-white shadow-lg rounded-xl p-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                    <img src="/images/teranium.jpeg" alt="description" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-700">hello</p>
                </div>

                {/* Card 2 */}
                <div className="w-96 h-40 bg-white shadow-lg rounded-xl p-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                    <img src="/images/ganna.jpeg" alt="profile" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-700">hi</p>
                </div>
              </div>

              {/* Column 2: Card 4 */}
              <div className="flex flex-col">
                <div className="w-60 h-80 bg-white shadow-lg rounded-xl p-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                    <img src="images/logo.png" alt="profile" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-700">yoo</p>
                </div>
              </div>
            </div>

            {/* Row 2: Card 3 full width below */}
            <div className="w-full">
              <div className="w-full h-40 bg-white shadow-lg rounded-xl p-4 relative">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                  <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                  <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                </div>
                <p className="text-sm text-gray-700 mt-4">ninox</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col space-y-10">
            {/* Card 5 */}
            <div className="w-60 h-80 bg-white shadow-lg rounded-xl p-4">
              <div className="w-48 h-48 bg-gray-300 mb-2"></div>
              <p className="text-sm text-gray-700">wow</p>
            </div>

            {/* Card 6 */}
            <div className="w-60 h-80 bg-white shadow-lg rounded-xl p-4 relative">
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-2 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              <p className="text-sm text-gray-700 mt-20 text-center">less go</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-10">
            {/* Card 7 */}
            <div className="w-96 h-40 bg-white shadow-lg rounded-xl p-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
              <p className="text-sm text-gray-700">i m in</p>
            </div>

            {/* Card 8 */}
            <div className="w-96 h-40 bg-white shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 bg-gray-300 mb-2"></div>
              <p className="text-sm text-gray-700">hurray</p>
            </div>

            {/* Card 9 */}
            <div className="w-96 h-40 bg-white shadow-lg rounded-xl p-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-2"></div>
              <p className="text-sm text-gray-700">yay</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}