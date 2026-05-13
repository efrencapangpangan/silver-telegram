const { useState } = React;

function PortfolioWebsite() {
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

  const experiences = [
    {
      title: 'Team Manager',
      company: 'Customer Service & Delivery Operations',
      years: '4 Years',
      description:
        'Managed customer service agents, monitored performance, handled escalations, and improved customer satisfaction in a fast-paced environment.'
    },
    {
      title: 'Specialized Customer Support',
      company: 'Lowes Delivery Support',
      years: '1 Year+',
      description:
        'Handled delivery coordination, customer concerns, scheduling, and issue resolution for home improvement deliveries.'
    },
    {
      title: 'Appraiser Manager',
      company: 'Pawnshop Branch Operations',
      years: '4 Years',
      description:
        'Managed branch operations, customer transactions, appraisals, and financial services while ensuring operational efficiency.'
    },
    {
      title: 'Teller',
      company: 'Pawnshop Services',
      years: '1 Year',
      description:
        'Handled customer transactions, cash management, and day-to-day customer service responsibilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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
              <a href="mailto:efrencapangpangan@gmail.com" className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Hire Me
              </a>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-blue-100 leading-relaxed">
                Dedicated customer support and operations professional with
                years of experience in leadership, coaching, customer
                satisfaction, and administrative support. Skilled in managing
                teams, solving problems, and delivering exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-gray-600">
            A combination of leadership, customer support, and operational excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 text-center font-medium hover:shadow-xl hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Work Experience</h2>
            <p className="text-gray-600">
              Professional experience across customer support, operations, and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                    {exp.years}
                  </span>
                </div>

                <p className="font-medium text-gray-700 mb-3">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am passionate about helping businesses improve customer satisfaction,
          team performance, and daily operations. My experience in customer
          support, leadership, and administrative management has helped me build
          strong communication, problem-solving, and organizational skills.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-blue-100 mb-8">
            Available for Virtual Assistant, Customer Support, Team Leadership,
            and Administrative Support opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">📧 Email</h3>
              <a href="mailto:efrencapangpangan@gmail.com" className="text-blue-100 hover:text-white">efrencapangpangan@gmail.com</a>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">📍 Location</h3>
              <p className="text-blue-100">Philippines</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">✅ Availability</h3>
              <p className="text-blue-100">Open for Freelance & Full-time</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="tel:09639724519" className="bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
              📱 0963 972 4519
            </a>
            <a href="https://www.facebook.com/share/1KzfX6zQ51/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
              👥 Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>Made with ❤️ by Efren Capangpangan</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PortfolioWebsite />);