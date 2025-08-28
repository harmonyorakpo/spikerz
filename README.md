# Spikerz - Network Monitoring & Risk Assessment Dashboard

A modern, responsive web application for real-time network monitoring, security risk assessment, and server management built with Angular.

## Features

- **Network Visualization**
  - Interactive network topology display
  - Real-time server status monitoring
  - IP address management and visualization
  - Server relationship mapping

- **Risk Assessment**
  - Real-time security risk monitoring
  - Multi-level risk categorization (Critical, High, Medium, Low)
  - Asset risk tracking
  - Contextual risk analysis

- **Dashboard & Reports**
  - Comprehensive network status overview
  - Interactive data visualization
  - Custom report generation
  - Server performance metrics

- **User Interface**
  - Modern, responsive design
  - Intuitive navigation
  - Interactive charts and graphs

## Tech Stack

- **Frontend Framework**: Angular v19.2.0
- **Styling**: TailwindCSS
- **Data Visualization**: Chart.js
- **State Management**: RxJS
- **Testing**: Jasmine & Karma

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI v19.2.15

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harmonyorakpo/spikerz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd spikerz
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change any source files.

## Building for Production

Build the project:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

Execute unit tests:

```bash
ng test
```

## Project Structure

```
src/
├── app/
│   ├── core/         # Core modules, models, and services
│   ├── pages/        # Main application pages
│   ├── services/     # Application services
│   └── shared/       # Shared components and utilities
├── assets/           # Static assets and configuration
└── styles/          # Global styles and themes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Angular team for the amazing framework
- Chart.js for visualization capabilities
- TailwindCSS for the utility-first CSS framework
