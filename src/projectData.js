// Project data structure matching the Communications Trends Report template
export const createProject = ({
  title,
  client,
  location,
  whatAskedToDo,
  howDidIt,
  engagementTools = [],
  engagementStats = [],
  stakeholderOrgs = [],
  outreachTools = [],
  outreachStats = [],
  summaryStats = [],
  testimonial = null,
  keyMap = null,
}) => ({
  title,
  client,
  location,
  whatAskedToDo,
  howDidIt,
  keyMap,
  metrics: {
    engagement: {
      tools: engagementTools,
      peopleEngaged: engagementStats,
      stakeholderOrgs,
    },
    outreach: {
      tools: outreachTools,
      peopleReached: outreachStats,
    },
    summaryStats,
  },
  testimonial,
});

// Sample projects using the template format
export const featuredProjects = [
  createProject({
    title: "Sussex County Land Use Reform Working Group",
    client: "Sussex County Government",
    location: "Sussex County, Delaware",
    whatAskedToDo:
      "Support a countywide working group to evaluate Sussex County's development framework and recommend updates to better align land use, housing, infrastructure, and preservation goals.",
    howDidIt:
      "Led a collaborative process, including ten meetings, one-on-one interviews, and technical analyses and best practices, to support the development of 20 actionable recommendations balancing growth, housing, and preservation priorities.",
    engagementTools: [
      "10 Working Group meetings (in-person and hybrid)",
      "Two rounds of one-on-one stakeholder interviews",
      "Interactive exercises and online polling sessions",
    ],
    engagementStats: [
      "10 Working Group members participated in all meetings",
      "Representatives from agriculture, development, housing, environment, and state agencies",
      "Public attendees at each meeting providing community input",
    ],
    stakeholderOrgs: [
      "10 Working Group members representing agriculture, development, housing, environment, and state agencies",
      "Members of the public attending each meeting",
    ],
    outreachTools: [
      "County website project page",
      "Public meeting notices and press releases",
      "Meeting recording and presentation materials posted after each meeting",
    ],
    outreachStats: [
      "County-wide distribution through official channels",
      "Stakeholder organizations reached through direct communication",
      "Public accessibility through recorded materials and online resources",
    ],
    summaryStats: [
      { value: "10", label: "Working Group Meetings" },
      { value: "20", label: "Actionable Recommendations" },
      { value: "10", label: "Stakeholder Organizations" },
      { value: "2", label: "Rounds of Interviews" },
    ],
  }),

  createProject({
    title: "Connecting Communities: Long Range Transportation Plan (LRTP)",
    client: "North Jersey Transportation Authority (NJTPA)",
    location:
      "13 counties in Northern New Jersey, including Hunterdon, Warren, Sussex, Passaic, Bergen, Hudson, Essex, Union, Morris, Somerset, Middlesex, Monmouth, and Ocean",
    whatAskedToDo:
      "Develop and execute NJTPA's next Long-Range Transportation Plan, outlining the region's transportation goals including highways, transit, and bicycle/pedestrian infrastructure. Public outreach was critical to develop a meaningful LRTP.",
    howDidIt:
      "McCormick Taylor partnered with Mercer Planning Associates, NJTPA, and subregions to deliver a successful outreach program. Our priority was to understand and integrate the region's various lifestyles and transportation needs through contextual, flexible planning and outreach. The team's innovative outreach methods gathered feedback from over 4,000 people.",
    engagementTools: [
      "One Board Visioning Workshop",
      "Three Stakeholder Advisory Committee (SAC) meetings with representatives from 13 organizations",
      "Three Virtual Stakeholder Forums",
      "Seventeen Pop-up Events",
      "Two Online Surveys in six languages",
      "Two Paper/In-Person Surveys in six languages",
      "One Virtual Open House",
      "Dedicated Youth Outreach",
    ],
    engagementStats: [
      "32 Board Visioning Workshop Attendees",
      "18 SAC Members from 13 Stakeholder Organizations",
      "95 Virtual Stakeholder Forum Participants",
      "2,208 Survey Responses",
      "1,307 Pop-up Event Participants",
      "274 Youth Coloring Contest Entries",
      "42 Virtual Open House Attendees",
      "Demographics included diverse age groups, income levels, and ethnic backgrounds across 6 languages",
    ],
    outreachTools: [
      "Connecting Communities Website",
      "Partner Toolkit with multilingual resources",
      "Social media campaign across multiple platforms",
      "Print materials distributed at libraries",
      "Email outreach to partner organizations",
    ],
    outreachStats: [
      "12 Partner Organizations received custom email communications",
      "365 Social Media Posts reached thousands across the region",
      "1,836 Paper Surveys, 8,125 Bookmarks, and 395 Print Flyers distributed at 51 Local Libraries",
      "Multilingual outreach in English, Spanish, Portuguese, Hindi, Korean, and Simplified Chinese",
      "Regional coverage across 13 counties in Northern New Jersey",
    ],
    summaryStats: [
      { value: "4,000+", label: "Total Engaged" },
      { value: "6", label: "Languages" },
      { value: "13", label: "Counties" },
      { value: "17", label: "Pop-up Events" },
    ],
  }),
];
