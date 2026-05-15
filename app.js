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

  React.createElement('div', { key: 'hero-text' }, [
  React.createElement('img', {
    key: 'profile-image',
    src: './public/profile.jpg',
    alt: 'Efren Capangpangan',
    className: 'w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl mb-6'
  }),

  React.createElement('h1', { key: 'h1', className: 'text-5xl font-bold leading-tight mb-4' }, 'Efren Capangpangan'),

  React.createElement('p', { key: 'p1', className: 'text-xl mb-6' }, 'Customer Support Manager | Virtual Assistant | Team Leader'),

  React.createElement('p', { key: 'p2', className: 'text-lg text-blue-100 mb-8' }, 'Experienced professional with a strong background in customer support, team leadership, operations management, and virtual assistance.'),

  React.createElement('div', { key: 'buttons', className: 'flex gap-4 flex-wrap' }, [
    React.createElement('a', {
      key: 'btn1',
      href: 'mailto:efrencapangpangan@gmail.com',
      className: 'bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition'
    }, 'Hire Me'),

    React.createElement('button', {
      key: 'btn2',
      className: 'border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition'
    }, 'View Portfolio')
  ])
]),

    // Skills Section
    React.createElement('section', { key: 'skills', className: 'py-16 px-6 max-w-6xl mx-auto' }, [
      React.createElement('div', { key: 'skills-header', className: 'text-center mb-12' }, [
        React.createElement('h2', { key: 'skills-h2', className: 'text-4xl font-bold mb-3' }, 'Skills & Expertise'),
        React.createElement('p', { key: 'skills-p', className: 'text-gray-600' }, 'A combination of leadership, customer support, and operational excellence.')
      ]),
      React.createElement('div', { key: 'skills-grid', className: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4' },
        skills.map((skill, index) =>
          React.createElement('div', { key: index, className: 'bg-white rounded-2xl shadow-md p-5 text-center font-medium hover:shadow-xl hover:-translate-y-1 transition' }, skill)
        )
      )
    ]),

    // Experience Section
    React.createElement('section', { key: 'experience', className: 'bg-white py-16 px-6' },
      React.createElement('div', { className: 'max-w-6xl mx-auto' }, [
        React.createElement('div', { key: 'exp-header', className: 'text-center mb-12' }, [
          React.createElement('h2', { key: 'exp-h2', className: 'text-4xl font-bold mb-3' }, 'Work Experience'),
          React.createElement('p', { key: 'exp-p', className: 'text-gray-600' }, 'Professional experience across customer support, operations, and leadership.')
        ]),
        React.createElement('div', { key: 'exp-grid', className: 'grid md:grid-cols-2 gap-8' },
          experiences.map((exp, index) =>
            React.createElement('div', { key: index, className: 'bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition' }, [
              React.createElement('div', { key: 'header', className: 'flex items-center justify-between mb-4' }, [
                React.createElement('h3', { key: 'h3', className: 'text-2xl font-semibold' }, exp.title),
                React.createElement('span', { key: 'span', className: 'bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium' }, exp.years)
              ]),
              React.createElement('p', { key: 'company', className: 'font-medium text-gray-700 mb-3' }, exp.company),
              React.createElement('p', { key: 'desc', className: 'text-gray-600 leading-relaxed' }, exp.description)
            ])
          )
        )
      ])
    ),

    // About Section
    React.createElement('section', { key: 'about', className: 'py-16 px-6 max-w-5xl mx-auto text-center' }, [
      React.createElement('h2', { key: 'about-h2', className: 'text-4xl font-bold mb-6' }, 'About Me'),
      React.createElement('p', { key: 'about-p', className: 'text-lg text-gray-600 leading-relaxed' }, 'I am passionate about helping businesses improve customer satisfaction, team performance, and daily operations. My experience in customer support, leadership, and administrative management has helped me build strong communication, problem-solving, and organizational skills.')
    ]),

    // Contact Section
    React.createElement('section', { key: 'contact', className: 'bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6' },
      React.createElement('div', { className: 'max-w-4xl mx-auto text-center' }, [
        React.createElement('h2', { key: 'contact-h2', className: 'text-4xl font-bold mb-4' }, "Let's Work Together"),
        React.createElement('p', { key: 'contact-intro', className: 'text-lg text-blue-100 mb-8' }, 'Available for Virtual Assistant, Customer Support, Team Leadership, and Administrative Support opportunities.'),
        React.createElement('div', { key: 'contact-cards', className: 'grid md:grid-cols-3 gap-6 text-left' }, [
          React.createElement('div', { key: 'email-card', className: 'bg-white/10 rounded-2xl p-6 backdrop-blur-md' }, [
            React.createElement('h3', { key: 'email-h3', className: 'font-semibold text-xl mb-2' }, '📧 Email'),
            React.createElement('a', { key: 'email-link', href: 'mailto:efrencapangpangan@gmail.com', className: 'text-blue-100 hover:text-white' }, 'efrencapangpangan@gmail.com')
          ]),
          React.createElement('div', { key: 'location-card', className: 'bg-white/10 rounded-2xl p-6 backdrop-blur-md' }, [
            React.createElement('h3', { key: 'loc-h3', className: 'font-semibold text-xl mb-2' }, '📍 Location'),
            React.createElement('p', { key: 'loc-p', className: 'text-blue-100' }, 'Philippines')
          ]),
          React.createElement('div', { key: 'avail-card', className: 'bg-white/10 rounded-2xl p-6 backdrop-blur-md' }, [
            React.createElement('h3', { key: 'avail-h3', className: 'font-semibold text-xl mb-2' }, '✅ Availability'),
            React.createElement('p', { key: 'avail-p', className: 'text-blue-100' }, 'Open for Freelance & Full-time')
          ])
        ]),
        React.createElement('div', { key: 'contact-links', className: 'mt-8 flex gap-4 justify-center flex-wrap' }, [
          React.createElement('a', { key: 'phone', href: 'tel:09639724519', className: 'bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100' }, '📱 0963 972 4519'),
          React.createElement('a', { key: 'facebook', href: 'https://www.facebook.com/share/1KzfX6zQ51/', target: '_blank', rel: 'noopener noreferrer', className: 'bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100' }, '👥 Facebook')
        ])
      ])
    ),

    // Footer
    React.createElement('footer', { key: 'footer', className: 'bg-gray-900 text-white py-8 text-center' },
      React.createElement('p', null, 'Made with ❤️ by Efren Capangpangan')
    )
  ]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(PortfolioWebsite));
