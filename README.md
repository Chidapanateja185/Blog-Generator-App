# BlogCreft - AI-Powered Blog Generator

A modern React application for generating and managing blog content using AI. Built with Vite, React 19, and React Router.

## About the Project

BlogCreft is a web-based blog generation platform that leverages AI to help users create engaging blog content quickly. The application features a clean, modern interface with user authentication, allowing creators to sign up, log in, and access a personalized dashboard for managing their blog posts.

The project is structured as a single-page application (SPA) using React, with routing handled by React Router. It includes authentication pages, a main dashboard for viewing blogs, and error handling for unknown routes. The backend service is prepared for integration with AI APIs to generate blog content based on user-selected topics.

## Features

- **User Authentication**: Login and signup functionality with form validation
- **Blog Dashboard**: View and manage generated blog posts
- **AI Blog Generation**: Create blog content based on selected topics
- **Responsive Design**: Modern UI with clean, intuitive interface
- **Fast Development**: Built with Vite for lightning-fast development experience

## Tech Stack

- **Frontend**: React 19 with Hooks
- **Routing**: React Router DOM v7
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern design
- **Icons**: SVG illustrations and icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

The project follows a modular structure with clear separation of concerns:

```
blog-generator/
├── public/                    # Static assets
│   └── vite.svg              # Vite logo
├── src/                      # Source code
│   ├── api/                  # API services
│   │   └── BackendService.jsx # Backend API integration (placeholder)
│   ├── components/           # React components
│   │   ├── Home.jsx          # Main blog dashboard component
│   │   ├── welcome.jsx       # Authentication (login/signup) component
│   │   └── notfound.jsx      # 404 error page component
│   ├── css/                  # Stylesheets
│   │   ├── Home.css          # Styles for Home component
│   │   ├── welcome.css       # Styles for welcome component
│   │   └── notfound.css      # Styles for notfound component
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # Application entry point
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
```

### File Structure Details

- **Components**: Each major page/feature has its own component file, keeping the code organized and maintainable.
- **CSS**: Separate stylesheet for each component, allowing for scoped styling and easier maintenance.
- **API**: Centralized location for backend service functions, making it easy to integrate with external APIs.
- **Main Files**: `App.jsx` handles routing, while `main.jsx` renders the app to the DOM.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## React Compiler

This project uses the React Compiler for optimized performance. See the [React Compiler documentation](https://react.dev/learn/react-compiler) for more information.



# BlogCraft — Complete Production Ready Project Structure


blogcraft/
├── .env                                   [config] // VITE_API_URL, VITE_AI_KEY — never commit
├── .env.example                           [config] // safe template for team members
├── .env.production                        [config] // production env values
├── .gitignore                             [config]
├── .eslintrc.cjs                          [config] // lint rules — catches unused vars, bad imports
├── .prettierrc                            [config] // consistent code formatting
├── index.html                             [config] // root HTML — Google Fonts CDN link goes here
├── vite.config.js                         [config] // path aliases @/ → src/
├── package.json                           [config]
├── package-lock.json                      [config]
├── README.md                              [config]

├── public/                                // static assets — served as-is, no bundling
│   ├── favicon.ico
│   ├── logo.svg
│   ├── og-image.png                       // social share preview image
│   └── robots.txt

├── src/
│   ├── main.jsx                           [global] // entry — imports globals.css, wraps App in providers
│   ├── App.jsx                            [global] // React Router v6 routes + AuthProvider + ToastProvider
│
│   ├── styles/                            // ALL css lives here — nowhere else in the project
│   │
│   │   ├── base/                          // layer 1 — imported once in main.jsx
│   │   │   ├── globals.css                [global] // :root tokens, resets, base tags, utility classes
│   │   │   └── Auth.css                   [global] // shared split-panel layout — Login, Register, ForgotPassword
│   │
│   │   ├── layout/                        // layer 2 — shell components
│   │   │   ├── Navbar.css                 [layout] // nav- prefix
│   │   │   └── DashboardShell.css         [layout] // db- prefix — sidebar, topbar, layout grid
│   │
│   │   ├── pages/                         // layer 3 — one file per route
│   │   │   ├── Home.css                   [page] // hm- prefix
│   │   │   ├── ForgotPassword.css         [page] ✓ built // fp- prefix
│   │   │   ├── Explore.css                [page] // ex- prefix
│   │   │   ├── BlogReader.css             [page] // br- prefix
│   │   │   ├── About.css                  [page] // ab- prefix
│   │   │   └── Contact.css                [page] // ct- prefix
│   │
│   │   ├── components/                    // layer 4 — shared UI, used in 2+ places
│   │   │   ├── BlogCard.css               [component] // bc- prefix
│   │   │   ├── TopicPill.css              [component] // tpl- prefix
│   │   │   ├── FollowButton.css           [component] // fb- prefix
│   │   │   ├── StatusBadge.css            [component] // sb- prefix
│   │   │   ├── ToggleSwitch.css           [component] // ts- prefix
│   │   │   ├── AvatarUpload.css           [component] // av- prefix
│   │   │   ├── RichTextEditor.css         [component] // rte- prefix
│   │   │   ├── Paywall.css                [component] // pw- prefix
│   │   │   └── Toast.css                  [component] // tst- prefix
│   │
│   │   └── dashboard/                     // layer 5 — dashboard panels + tabs
│   │       ├── DashboardShell.css         [layout] // db- prefix
│   │       ├── OverviewPanel.css          [component] // op- prefix
│   │       ├── MyBlogsPanel.css           [component] // mb- prefix
│   │       ├── GeneratePanel.css          [component] // gen- prefix
│   │       ├── TopicsPanel.css            [component] // tp- prefix
│   │       ├── CommunityPanel.css         [component] // cm- prefix
│   │       ├── ProfilePanel.css           [component] // pf- prefix — includes DangerZone styles
│   │       ├── SettingsPanel.css          [component] // set- prefix
│   │       └── FollowersTab.css           [component] // fw- prefix
│
│   ├── context/                           // global React state — imported everywhere via hooks
│   │   ├── AuthContext.jsx                [global] // currentUser, token, login(), logout(), isLoggedIn
│   │   └── ToastContext.jsx               [global] // showToast(msg, type), queue management
│
│   ├── hooks/                             // one hook per data domain — no direct API calls in components
│   │   ├── useAuth.js                     [hook] // reads AuthContext, exposes login/logout helpers
│   │   ├── useBlogs.js                    [hook] // blogs[], myBlogs[], create, update, delete
│   │   ├── useBlog.js                     [hook] // single post by id — used in BlogReader page
│   │   ├── useFollow.js                   [hook] // followState{}, follow(), unfollow(), accept()
│   │   ├── useInteractions.js             [hook] // liked, saved, comments[], likeBlog, saveBlog
│   │   ├── useTopics.js                   [hook] // subscribed Set, toggleSubscribe(), allTopics[]
│   │   ├── useProfile.js                  [hook] // profile{}, settings{}, update, uploadAvatar
│   │   └── useToast.js                    [hook] // convenience wrapper — useContext(ToastContext)
│
│   ├── api/                               // all backend calls — one file per domain
│   │   ├── client.js                      [api] // axios instance, baseURL from .env
│   │   ├── auth.api.js                    [api] // login, register, logout, sendOtp, verifyOtp
│   │   ├── blogs.api.js                   [api] // getBlogs, create, update, delete, aiGenerate
│   │   ├── interactions.api.js            [api] // likeBlog, saveBlog, getComments
│   │   ├── follows.api.js                 [api] // follow, unfollow, accept, getFollowers
│   │   ├── user.api.js                    [api] // getMe, updateMe, updateSettings
│   │   ├── topics.api.js                  [api] // getSubscriptions, updateSubscriptions
│   │   ├── newsletter.api.js              [api] // subscribe — home page newsletter form
│   │   └── contact.api.js                 [api] // submitContactForm — Contact page
│
│   ├── pages/                             // route-level files — thin shells
│   │   ├── Home.jsx                       [page]
│   │   ├── Login.jsx                      [page]
│   │   ├── Register.jsx                   [page]
│   │   ├── ForgotPassword.jsx             [page] ✓ built
│   │   ├── Explore.jsx                    [page]
│   │   ├── BlogReader.jsx                 [page]
│   │   ├── Dashboard.jsx                  [page]
│   │   ├── About.jsx                      [page]
│   │   ├── Contact.jsx                    [page]
│   │   └── NotFound.jsx                   [page]
│
│   ├── components/                        // shared reusable pieces — used across 2+ pages
│   │   ├── layout/
│   │   │   ├── Navbar.jsx                 [layout]
│   │   │   └── ProtectedRoute.jsx         [layout] // redirects to /login if no token
│   │
│   │   └── ui/
│   │       ├── BlogCard.jsx               [component]
│   │       ├── TopicPill.jsx              [component]
│   │       ├── FollowButton.jsx           [component]
│   │       ├── StatusBadge.jsx            [component]
│   │       ├── ToggleSwitch.jsx           [component]
│   │       ├── AvatarUpload.jsx           [component]
│   │       ├── RichTextEditor.jsx         [component]
│   │       ├── Paywall.jsx                [component]
│   │       └── Toast.jsx                  [component]
│
│   ├── dashboard/                         // everything inside the /dashboard route
│   │   ├── DashboardShell.jsx             [layout] // sidebar + topbar + panel router
│   │   ├── Sidebar.jsx                    [component]
│   │   ├── Topbar.jsx                     [component]
│   │
│   │   ├── panels/
│   │   │   ├── OverviewPanel.jsx          [component]
│   │   │   ├── MyBlogsPanel.jsx           [component]
│   │   │   ├── GeneratePanel.jsx          [component]
│   │   │   ├── TopicsPanel.jsx            [component]
│   │   │   ├── CommunityPanel.jsx         [component]
│   │   │   ├── ProfilePanel.jsx           [component]
│   │   │   └── SettingsPanel.jsx          [component]
│   │
│   │   └── profile-tabs/
│   │       ├── PersonalInfoTab.jsx        [component]
│   │       ├── NotificationsTab.jsx       [component]
│   │       ├── ActivityTab.jsx            [component]
│   │       ├── FollowersTab.jsx           [component]
│   │       └── DangerZoneTab.jsx          [component]
│
│   ├── utils/                             // pure helper functions — no React
│   │   ├── formatDate.js
│   │   ├── formatNumber.js
│   │   ├── readTime.js
│   │   ├── validators.js
│   │   ├── storage.js
│   │   └── constants.js
│
│   └── assets/
│       └── blog-svgs/
│           ├── BlogIllustration1.jsx
│           ├── BlogIllustration2.jsx
│           ├── BlogIllustration3.jsx
│           └── BlogIllustration4.jsx
