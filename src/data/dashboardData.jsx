export const TOPIC_META = [
  { name: "Technology", icon: "💻", count: "1,240 blogs" },
  { name: "Health & Wellness", icon: "🏥", count: "980 blogs" },
  { name: "Finance", icon: "💰", count: "870 blogs" },
  { name: "Travel", icon: "✈️", count: "1,100 blogs" },
  { name: "Food", icon: "🍜", count: "760 blogs" },
  { name: "Science", icon: "🔬", count: "640 blogs" },
  { name: "Lifestyle", icon: "🌿", count: "920 blogs" },
  { name: "Business", icon: "📊", count: "1,050 blogs" },
  { name: "Sports", icon: "⚽", count: "830 blogs" },
  { name: "Education", icon: "📚", count: "710 blogs" },
  { name: "Entertainment", icon: "🎬", count: "890 blogs" },
  { name: "Politics", icon: "🏛️", count: "560 blogs" },
  { name: "Environment", icon: "🌍", count: "490 blogs" },
  { name: "Parenting", icon: "👨‍👩‍👧", count: "380 blogs" },
  { name: "Mental Health", icon: "🧠", count: "670 blogs" },
  { name: "Photography", icon: "📷", count: "320 blogs" },
  { name: "Artificial Intelligence", icon: "🤖", count: "1,180 blogs" },
  { name: "Programming", icon: "👨‍💻", count: "950 blogs" },
  { name: "Cybersecurity", icon: "🔐", count: "620 blogs" },
  { name: "Marketing", icon: "📢", count: "540 blogs" },
  { name: "Design", icon: "🎨", count: "460 blogs" },
  { name: "Career", icon: "💼", count: "780 blogs" },
  { name: "Personal Development", icon: "🚀", count: "690 blogs" },
  { name: "Automotive", icon: "🚗", count: "430 blogs" },
];

export const RECENT_BLOGS = [
  {
    title: "How AI is Reshaping Modern Healthcare",
    topic: "Health",
    date: "Apr 28, 2026",
    status: "published",
    views: 342,
  },
  {
    title: "10 Finance Tips Every Developer Should Know",
    topic: "Finance",
    date: "Apr 22, 2026",
    status: "published",
    views: 218,
  },
  {
    title: "The Future of Travel in a Post-AI World",
    topic: "Travel",
    date: "Apr 15, 2026",
    status: "draft",
    views: null,
  },
  {
    title: "Top 5 Street Food Spots in Chennai",
    topic: "Food",
    date: "Apr 10, 2026",
    status: "published",
    views: 567,
  },
  {
    title: "Understanding Blockchain for Beginners",
    topic: "Technology",
    date: "Mar 30, 2026",
    status: "published",
    views: 430,
  },
  {
    title: "Morning Routines of Top Entrepreneurs",
    topic: "Lifestyle",
    date: "Mar 20, 2026",
    status: "draft",
    views: null,
  },
];

export const SAMPLE_BLOGS = {
  Technology: `
    <p><strong>Introduction</strong><br/>
    The world of technology moves fast. From AI to quantum computing,
    innovation never sleeps.</p>

    <p><strong>Key Trends</strong><br/>
    Electric vehicles, large language models and edge computing are
    reshaping industries across the globe.</p>

    <p><strong>What This Means for You</strong><br/>
    Staying informed is no longer optional—it is a competitive advantage.</p>
  `,

  default: `
    <p><strong>Introduction</strong><br/>
    Understanding this topic has never been more important.</p>

    <p><strong>Deep Dive</strong><br/>
    Our AI has curated the most relevant insights.</p>

    <p><strong>Takeaways</strong><br/>
    Whether you're a beginner or an expert, there is always
    something new to learn.</p>
  `,
};


export const NAV_ITEMS = [
  { id: "overview",       label: "Overview",      section: "Main",        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { id: "myblogs",        label: "My Blogs",      section: null,          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { id: "generate",       label: "Generate Blog", section: null,          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { id: "topics",         label: "Topics",        section: null,          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg> },
  { id: "community",      label: "Community",     section: "Social",      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { id: "exploreblogs",   label: "Explore Blogs", section: null,          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
  { id: "profile",        label: "Profile",       section: "Account",     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { id: "settings",       label: "Settings",      section: null,          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg> },
];


export const SUGGESTIONS_DATA = [
  { id: 15, name: "Vikram Iyer",   handle: "@vikramtech",   topic: "Technology", bio: "Senior dev writing about AI and open source",    color: "#7C3AED" },
  { id: 16, name: "Sarah Johnson", handle: "@sarahfoods",   topic: "Food",       bio: "Food blogger exploring street cuisine worldwide", color: "#E84A0C" },
  { id: 17, name: "Karthik Rajan", handle: "@karthikfinance",topic: "Finance",   bio: "CFP sharing practical personal finance tips",    color: "#059669" },
  { id: 18, name: "Elena Vasquez", handle: "@elenatravels", topic: "Travel",     bio: "Solo traveller, 40+ countries and counting",     color: "#0284C7" },
  { id: 19, name: "Aman Gupta",    handle: "@amanbiz",      topic: "Business",   bio: "Startup founder writing about entrepreneurship", color: "#D97706" },
];

export const FEED_DATA = [
  { person: "Anjali Mehta",    handle: "@anjalihealth", color: "#059669", time: "2h ago",  title: "5 Morning Habits That Changed My Life",         excerpt: "Starting your day with intention can transform everything from your energy levels to your productivity...", likes: 42,  comments: 8,  liked: false },
  { person: "Sam Wilson",      handle: "@samfinance",   color: "#0284C7", time: "4h ago",  title: "Why Index Funds Beat Most Active Managers",     excerpt: "The data is clear — over a 20-year period, passive investing consistently outperforms active funds...",    likes: 87,  comments: 14, liked: true  },
  { person: "Nithya Krishnan", handle: "@nithyatech",   color: "#7C3AED", time: "1d ago",  title: "Building a RAG Pipeline in Under 100 Lines",    excerpt: "Retrieval-augmented generation doesn't have to be complicated. Here's a simple Python implementation...",   likes: 134, comments: 22, liked: false },
  { person: "Omar Farouq",     handle: "@omartravels",  color: "#D97706", time: "2d ago",  title: "Hidden Gems of Rajasthan You Must Visit",       excerpt: "Beyond the usual tourist trail, Rajasthan hides some of the most breathtaking forts and villages...",      likes: 61,  comments: 9,  liked: false },
];



export const FOLLOWERS_DATA = [
  { id: 1, name: "Aisha Patel",     handle: "@aishawrites", topic: "Technology", mutual: true,  following: false, color: "#7C3AED" },
  { id: 2, name: "Ravi Shankar",    handle: "@raviblog",    topic: "Finance",    mutual: false, following: true,  color: "#0284C7" },
  { id: 3, name: "Meera Nair",      handle: "@meerastories",topic: "Travel",     mutual: true,  following: true,  color: "#059669" },
  { id: 4, name: "Carlos Diaz",     handle: "@carlostech",  topic: "Technology", mutual: false, following: false, color: "#D97706" },
  { id: 5, name: "Priya Singh",     handle: "@priyaeats",   topic: "Food",       mutual: true,  following: true,  color: "#DB2777" },
  { id: 6, name: "Liam Chen",       handle: "@liamscience", topic: "Science",    mutual: false, following: false, color: "#0891B2" },
  { id: 7, name: "Fatima Al-Zahra", handle: "@fatimawrites",topic: "Lifestyle",  mutual: true,  following: false, color: "#E84A0C" },
  { id: 8, name: "David Kim",       handle: "@davidbiz",    topic: "Business",   mutual: false, following: true,  color: "#DC2626" },
];

export const FOLLOWING_DATA = [
  { id: 9,  name: "Anjali Mehta",    handle: "@anjalihealth",     topic: "Health & Wellness", following: true, color: "#059669" },
  { id: 10, name: "Sam Wilson",      handle: "@samfinance",       topic: "Finance",           following: true, color: "#0284C7" },
  { id: 11, name: "Nithya Krishnan", handle: "@nithyatech",      topic: "Technology",        following: true, color: "#7C3AED" },
  { id: 12, name: "Omar Farouq",     handle: "@omartravels",     topic: "Travel",            following: true, color: "#D97706" },
  { id: 13, name: "Lakshmi Devi",    handle: "@lakshmilifestyle", topic: "Lifestyle",         following: true, color: "#DB2777" },
  { id: 14, name: "Alex Thompson",   handle: "@alexscience",     topic: "Science",           following: true, color: "#0891B2" },
];

export const TOPICS = [
  "Technology", "Health & Wellness", "Finance", "Travel", "Food", "Science",
  "Lifestyle", "Business", "Sports", "Education", "Entertainment", "Politics",
  "Environment", "Parenting", "Mental Health", "Photography", "Music", "Gaming",
  "Architecture", "Fashion", "Spirituality", "History", "Coding", "Automotive",
];


export const TOOLBAR_ACTIONS = [
  { cmd: "bold",      label: "B",          style: { fontWeight: 700 } },
  { cmd: "italic",    label: "I",          style: { fontStyle: "italic" } },
  { cmd: "underline", label: "U",          style: { textDecoration: "underline" } },
  { divider: true },
  { cmd: "h2",        label: "H2" },
  { cmd: "h3",        label: "H3" },
  { divider: true },
  { cmd: "ul",        label: "• List" },
  { cmd: "ol",        label: "1. List" },
  { cmd: "quote",     label: "” Quote" },
  { divider: true },
  { cmd: "link",      label: "🔗 Link" },
];

export const SAMPLE_AI_CONTENT = `<p>Artificial intelligence is rapidly reshaping how we think about this topic. The developments of the past year alone have introduced capabilities that were considered theoretical just a decade ago.</p>
<h2>The Current Landscape</h2>
<p>Today's ecosystem is defined by unprecedented speed of change. What was cutting-edge six months ago is often reliable stakes today. This creates both enormous opportunity and significant challenge for anyone operating in this space.</p>
<h2>Key Trends to Watch</h2>
<p>Three forces are converging to reshape the field: commoditisation of foundational capabilities, emergence of specialised vertical applications, and a growing emphasis on explainability and trust.</p>
<h2>Looking Forward</h2>
<p>The organisations and individuals who will thrive are those who treat change as a constant rather than an event. The tools will keep evolving — the underlying principles of quality, honesty, and genuine value creation will not.</p>`;

export const TONES = ["Informative", "Casual", "Professional", "Storytelling"];


export const OVERVIEW_STATS = [
  {
    label: "Total Blogs",
    value: "12",
    change: "↑ 3 this month",
    dir: "up",
  },
  {
    label: "Total Views",
    value: "2.4k",
    change: "↑ 18% vs last month",
    dir: "up",
  },
  {
    label: "Subscribed Topics",
    value: "4",
    change: "↑ 1 new",
    dir: "up",
  },
  {
    label: "Drafts",
    value: "3",
    change: "2 need review",
    dir: "down",
  },
];


export const OVERVIEW_ACTIONS = [
  {
    icon: "⚡",
    bg: "#FDE8E0",
    title: "Generate Blog",
    desc: "Create AI-powered blog posts",
    panel: "generate",
  },
  {
    icon: "📄",
    bg: "#E8F4FE",
    title: "My Blogs",
    desc: "Manage your posts",
    panel: "myblogs",
  },
  {
    icon: "🌐",
    bg: "#E8F5E9",
    title: "Browse Topics",
    desc: "Explore categories",
    panel: "topics",
  },
];

export const modes = [
    {
      key: "manual",
      icon: "✍️",
      title: "Write Manually",
      badge: "PRIMARY",
      primary: true,
      desc: "Full control. Write your own content with a rich editor - add headings, format text, and publish exactly what you want.",
      cta: "Start writing →",
    },
    {
      key: "ai",
      icon: "✨",
      title: "AI Generate",
      badge: "AI ASSIST",
      primary: false,
      desc: "Give us a topic, tone and notes - our AI will draft a complete blog post for you in seconds.",
      cta: "Use AI →",
    },
  ];


  export const DRAFTS = [
  {
    key: "draft1",
    title: "10 Budget Travel Tips for Your Next Trip",
    editedAt: "Edited 2 hours ago",
    words: 340,
  },
  {
    key: "draft2",
    title: "Why Mental Health Days Matter More Than Ever",
    editedAt: "Edited yesterday",
    words: 512,
  },
  {
    key: "draft3",
    title: "A Beginner's Guide to Home Coffee Brewing",
    editedAt: "Edited 3 days ago",
    words: 180,
  },
];

export const TIPS = [
  "Start with a hook that speaks to your reader's problem.",
  "Use short paragraphs and subheadings for skimmability.",
  "End with a clear takeaway or call-to-action.",
];

export const PROFILE_TABS = [
  { id: "info",          label: "Personal Info",   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { id: "notifications", label: "Notifications",   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg> },
  { id: "activity",      label: "Activity",        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { id: "followers",     label: "Followers",       icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { id: "danger",        label: "Danger Zone",     icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
];

export const ACTIVITIES = [
    { icon: "⚡", bg: "#FDE8E0", text: <>Generated blog: <strong>"How AI is Reshaping Modern Healthcare"</strong></>, time: "2 hrs ago" },
    { icon: "📄", bg: "#E8F4FE", text: <>Published post: <strong>"Top 5 Street Food Spots in Chennai"</strong></>,       time: "1 day ago" },
    { icon: "🌐", bg: "#E8F5E9", text: <>Subscribed to topic: <strong>Technology</strong></>,                            time: "3 days ago" },
    { icon: "⚡", bg: "#FDE8E0", text: <>Generated blog: <strong>"10 Finance Tips Every Developer Should Know"</strong></>, time: "5 days ago" },
    { icon: "🔑", bg: "#F5F0FF", text: <>Signed in from <strong>Chennai, India</strong> · Chrome on macOS</>,           time: "5 days ago" },
    { icon: "✅", bg: "#E8F5E9", text: <>Account created and email verified</>,                                          time: "May 1, 2026" },
];


export const APPEARANCE_SETTINGS = [
  { key: "dark", title: "Dark Mode", desc: "Switch to a dark interface", icon: "🌙" },
  { key: "compact", title: "Compact view", desc: "Show more content with less spacing", icon: "📁" },
];

export const PRIVACY_SETTINGS = [
  { key: "public", title: "Public profile", desc: "Allow others to discover and view your blogs", icon: "🌐" },
  { key: "analytics", title: "Analytics tracking", desc: "Help us improve BlogCraft with usage data", icon: "📊" },
];