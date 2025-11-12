import React from "react";
import ProjectSpotlight from "./ProjectSpotlight";
import { featuredProjects } from "./projectData";
import "./App.css";

function App() {
  // Featured projects to display
  const displayedProjects = featuredProjects; // Display all featured projects

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-mt-blue to-mt-blue/80 text-white py-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">Our Year in Review</h1>
                <h2 className="text-2xl font-light mb-8">2025 Planning & Communications at McCormick Taylor</h2>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Celebrating our achievements in planning and communications throughout 2025, showcasing impactful projects
              and innovative approaches to community engagement.
            </p>
            <div className="flex justify-between items-end">
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Published: November 12, 2025</div>

              <div>
                <h4 className="text-sm font-bold mb-2">Contributors</h4>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-mt-blue border-2 border-white flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-green border-2 border-white flex items-center justify-center text-white text-xs">
                    RB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-blue-light border-2 border-white flex items-center justify-center text-white text-xs">
                    JQ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Executive Summary</h2>
          <p className="text-gray-700 mb-6">
            Welcome to McCormick Taylor's 2025 Year in Review! This document celebrates our achievements in planning and
            communications, highlighting the innovative projects, community engagement strategies, and impactful work
            we've accomplished throughout the year. From large-scale transportation planning initiatives to local
            community outreach programs, our team has demonstrated excellence in connecting with communities and
            delivering meaningful results for our clients.
          </p>
        </section> */}

        {/* Key Metrics */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Key Metrics</h2>
          <p className="text-gray-700 mb-8">
            A snapshot of our impact and reach throughout 2025, demonstrating our commitment to meaningful community
            engagement and effective project delivery.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-mt-blue mb-2">25+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-mt-green mb-2">15</div>
              <div className="text-sm text-gray-600">Counties & Municipalities</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-mt-blue mb-2">50+</div>
              <div className="text-sm text-gray-600">Public Outreach Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-mt-green mb-2">6,000+</div>
              <div className="text-sm text-gray-600">People Engaged</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-mt-blue mb-4">Types of Outreach Events and Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Engagement Methods</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-blue rounded-full mr-3"></span>Public meetings and workshops
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-blue rounded-full mr-3"></span>Pop-up events
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-blue rounded-full mr-3"></span>Online surveys and virtual forums
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-blue rounded-full mr-3"></span>Stakeholder interviews
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Communication Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-green rounded-full mr-3"></span>Online polling sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-green rounded-full mr-3"></span>Physical flyers, surveys, and post
                    cards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-green rounded-full mr-3"></span>Social media posts and digital
                    toolkits
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-mt-green rounded-full mr-3"></span>Video content and virtual
                    presentations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">Featured Projects</h2>
          <p className="text-gray-700 mb-8">
            Highlighting our most impactful community engagement and planning projects from 2025.
          </p>
          <div className="space-y-16">
            {displayedProjects.map((project, index) => (
              <div key={index} className={index > 0 ? "pt-8 border-t border-gray-200" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-mt-blue text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    Featured Project #{index + 1}
                  </div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <ProjectSpotlight project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* 5 Things You Didn't Know About Planning & Communications at MT */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-mt-blue mb-6">
            5 Things You Didn't Know About Planning & Communications at McCormick Taylor
          </h2>
          <p className="text-gray-700 mb-8">
            Discover the unique capabilities, innovative approaches, and specialized expertise that sets our planning
            and communications team apart.
          </p>

          <div className="space-y-6"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Our Year in Review</h3>
              <p className="text-gray-600">2025 | Published November 12, 2025</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">Contributors</h4>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-mt-blue border-2 border-white flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-green border-2 border-white flex items-center justify-center text-white text-xs">
                    RB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mt-blue-light border-2 border-white flex items-center justify-center text-white text-xs">
                    JQ
                  </div>
                </div>
              </div>

              {/* <div>
                <button className="px-4 py-2 bg-mt-blue text-white rounded-lg font-medium hover:bg-mt-blue/90">
                  Share Report
                </button>
              </div> */}
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© McCormick Taylor</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
