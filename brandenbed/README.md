Brandenbed Dashboard

A React + TailwindCSS + Recharts project delivering:

🌍 Landing Page: Customer-facing, responsive page showcasing company services, hero section, and quick stats.

📊 Internal Dashboard: Team-focused tool with properties, tasks, rent collection, tenant queries, employees, and settings management.

📖 Prototype Overview

This project implements two fully functional prototypes:

Company Landing Page

Modern UI with navigation, hero section, quick stats, services, and footer.

Responsive design optimized for desktop and mobile.

Language toggle (EN/DE) and interactive call-to-action buttons.

Team Dashboard

Sidebar navigation for quick access to all sections.

Overview tab with dynamic stats and line chart for rent collection (Recharts).

Management tabs for Properties, Tasks, Tenant Queries, Rent Collection, Employees, and Settings.

Forms, tables, and status indicators for interactive data management.

🚀 Features
Landing Page

Header with Logo, Navigation, Sign In, and Language toggle.

Hero section with headline, tagline, and CTA buttons.

Quick Stats cards (Properties, Clients, Years of Experience, Districts).

Core Values & Services section.

Footer with company information and social links.

Fully responsive across desktop and mobile devices.

Dashboard

Sidebar navigation with collapsible sections.

Overview with stats cards and dynamic line chart.

Properties listing with search, status indicators, and Add/Edit option.

Tasks list with color-coded status (Pending, In Progress, Resolved).

Tenant Queries section with issue tracking and status labels.

Rent Collection module with form submission and payment history table.

Employees list with roles and permissions.

Settings section placeholder for future customization.

📂 Project Structure
brandenbed-dashboard/
├── public/
│   └── index.html                # Main HTML entry point
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── Chart.jsx             # Line chart component using Recharts
│   │   ├── StatsCard.jsx         # Component for displaying statistics cards
│   │   └── Sidebar.jsx           # Sidebar navigation
│   │
│   ├── pages/                    # Page-level components
│   │   ├── LandingPage.jsx       # Customer-facing landing page
│   │   └── Dashboard.jsx         # Internal dashboard layout
│   │
│   ├── dashboardTabs/            # Individual dashboard sections
│   │   ├── Overview.jsx          # Dashboard overview tab
│   │   ├── Properties.jsx        # Property management tab
│   │   ├── Tasks.jsx             # Task management tab
│   │   ├── TenantQueries.jsx     # Tenant queries tab
│   │   ├── RentCollection.jsx    # Rent submission & history
│   │   ├── Employees.jsx         # Employee management tab
│   │   └── Settings.jsx          # Settings tab placeholder
│   │
│   ├── App.jsx                    # Main React component, handles routing/views
│   ├── index.js                   # React entry point
│   └── styles.css                 # TailwindCSS and global styles
│
├── package.json                   # Project dependencies and scripts
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # Project documentation

🛠️ Tech Stack

Frontend: React – component-based UI

Styling: TailwindCSS – utility-first responsive design

Charts: Recharts – interactive charts for dashboard

Backend (Stub/API-ready): Node.js + Express – placeholder for data handling

Package Management: npm

▶️ Setup & Run
1. Clone the repository
git clone https://github.com/your-username/brandenbed-dashboard.git
cd brandenbed-dashboard

2. Install dependencies
npm install

3. Run development server
npm start


Opens the app at http://localhost:3000/.

Landing Page loads by default; click Sign In to access the Dashboard.

4. Build for production
npm run build


Creates optimized production-ready files in the /build folder.

💡 Usage / Navigation

Landing Page: Explore company services, quick stats, and call-to-action buttons.

Dashboard: Navigate via sidebar to manage properties, tasks, tenant queries, rent collection, employees, and settings.

Interactive elements include:

Charts and stats updates

Task/tenant status indicators

Property and employee lists with add/edit options

Rent collection submission and payment history

👤 Author

[Your Name] – Prototype Developer
Company: Brandenbed Living Spaces UG (haftungsbeschränkt)