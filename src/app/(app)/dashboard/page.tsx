import Image from 'next/image';

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section
        className="bg-white text-black bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
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
            width={500}  // change width if req
            height={300} // change height if req
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
    </main>
  );
}