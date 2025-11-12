import React from "react";

function ProjectSpotlight({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Main Project Info Section */}
      <div className="md:flex">
        {/* Main Content Area */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">{project.title}</h3>

          {/* Key Map Placeholder */}
          {/* <div className="bg-gray-50 p-3 rounded border border-dashed border-gray-300 mb-6">
            <div className="text-xs text-gray-500 text-center">📍 Key Map: Project area visualization coming soon</div>
          </div> */}

          {/* What & How */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-mt-blue mb-2">What Were We Asked to Do?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{project.whatAskedToDo}</p>
            </div>
            <div>
              <h4 className="font-semibold text-mt-blue mb-2">How Did We Do It?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{project.howDidIt}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-50 p-6 border-l border-t border-gray-100">
          {/* Project Info */}
          <div className="mb-6">
            <div className="space-y-2">
              <div>
                <span className="text-xs text-gray-700 font-extrabold">Client:</span>
                <p className="text-xs text-gray-600 mt-1">{project.client}</p>
              </div>
              <div>
                <span className="text-xs text-gray-700 font-extrabold">Location:</span>
                <p className="text-xs text-gray-600 mt-1">{project.location}</p>
              </div>
            </div>
          </div>

          {/* Project Impact */}
          {project.metrics?.summaryStats && (
            <div>
              <h4 className="font-bold text-mt-blue mb-3 text-sm">Project Impact</h4>
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.summaryStats.map((stat, index) => (
                  <div key={index} className="text-center bg-white p-3 rounded-lg">
                    <div className="text-lg font-bold text-mt-blue mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Key Metrics Section - Full Width */}
      <div className="border-t border-gray-100 p-6">
        <h4 className="font-bold text-mt-blue mb-6">Key Metrics</h4>

        {/* Engagement Section */}
        {project.metrics?.engagement && (
          <div className="mb-8">
            <h5 className="font-semibold text-mt-blue mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              Engagement
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Engagement Tools */}
              {project.metrics.engagement.tools && (
                <div className="border border-gray-100 rounded-lg p-4">
                  <h6 className="font-medium text-mt-blue mb-2">Tools:</h6>
                  <ul className="text-sm space-y-2 text-gray-600">
                    {project.metrics.engagement.tools.map((tool, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-mt-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Engagement Stats */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="space-y-4">
                  {project.metrics.engagement.peopleEngaged && (
                    <div>
                      <h6 className="font-medium text-mt-blue mb-2">People:</h6>
                      <ul className="text-sm space-y-2 text-gray-600">
                        {project.metrics.engagement.peopleEngaged.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-mt-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Outreach Section */}
        {project.metrics?.outreach && (
          <div>
            <h5 className="font-semibold text-mt-blue mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Outreach
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Outreach Tools */}
              {project.metrics.outreach.tools && (
                <div className="border border-gray-100 rounded-lg p-4">
                  <h6 className="font-medium text-mt-blue mb-2">Tools:</h6>
                  <ul className="text-sm space-y-2 text-gray-600">
                    {project.metrics.outreach.tools.map((tool, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-mt-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outreach Stats */}
              {project.metrics.outreach.peopleReached && (
                <div className="border border-gray-100 rounded-lg p-4">
                  <h6 className="font-medium text-mt-blue mb-2">People:</h6>
                  <ul className="text-sm space-y-2 text-gray-600">
                    {project.metrics.outreach.peopleReached.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-mt-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSpotlight;
