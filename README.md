export default function PortfolioWebsite() {
  const profileImage = '/profile.jpg';

  const skills = [
    'Customer Support',
    'Team Leadership',
    'Virtual Assistance',
    'Email & Chat Support',
    'Operations Management',
    'Data Entry',
    'Delivery Coordination',
    'Escalation Handling',
    'Administrative Support',
    'Performance Coaching'
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Efren Capangpangan
            </h1>

            <p className="text-xl mb-6">
              Customer Support Manager | Virtual Assistant | Team Leader
            </p>

            <p className="text-lg text-blue-100 mb-8">
              Experienced professional with a strong background in customer
              support, team leadership, operations management, and virtual
              assistance.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Hire Me
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition">
                View Portfolio
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">

              <img
                src={profileImage}
                alt="Efren Capangpangan"
                className="w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white/20 object-cover"
              />

              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md rounded-2xl px-5 py-4 text-white max-w-sm">
                <h2 className="text-2xl font-semibold mb-2">
                  Professional Virtual Assistant
                </h2>

                <p className="text-sm text-gray-200 leading-relaxed">
                  Experienced in customer support, team leadership,
                  operations management, and administrative assistance.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
