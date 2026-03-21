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
