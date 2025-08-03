# 🏢 Employee Management System (EMS)

A modern, responsive React-based web application for comprehensive employee task management and workflow tracking. Built with React 19, Vite, and Tailwind CSS, this system provides role-based access control with separate dashboards for administrators and employees.

![EMS Dashboard](https://img.shields.io/badge/React-19.1.0-blue)
![EMS Dashboard](https://img.shields.io/badge/Vite-7.0.0-orange)
![EMS Dashboard](https://img.shields.io/badge/Tailwind-4.1.11-cyan)

## ✨ Features

### 🔐 Authentication & Authorization

- **Role-based access control** with Admin and Employee roles
- **Secure login system** with email/password authentication
- **Session management** with localStorage persistence
- **Automatic logout** functionality

### 👨‍💼 Admin Dashboard

- **Task Creation**: Create and assign tasks to specific employees
- **Employee Overview**: View all employees with their task statistics
- **Task Management**: Monitor task distribution across the team
- **Real-time Updates**: Live task count tracking

### 👷 Employee Dashboard

- **Task Statistics**: Visual cards showing task counts by status
- **Task Categories**:
  - 🟢 **New Tasks**: Recently assigned tasks awaiting acceptance
  - 🟡 **Active Tasks**: Currently in-progress tasks
  - 🔵 **Completed Tasks**: Successfully finished tasks
  - 🔴 **Failed Tasks**: Tasks marked as failed
- **Task Actions**: Accept, complete, or mark tasks as failed
- **Personal Task List**: Horizontal scrollable task cards

### 📊 Task Management

- **Task Properties**:
  - Title and detailed description
  - Due date assignment
  - Category classification (Design, Development, QA, etc.)
  - Status tracking (New → Active → Completed/Failed)
- **Task Lifecycle**: Complete workflow from creation to completion
- **Category System**: Organized task classification
- **Date-based Scheduling**: Deadline management

### 🎨 User Interface

- **Modern Design**: Clean, professional interface with dark theme
- **Responsive Layout**: Optimized for different screen sizes
- **Color-coded Status**: Visual task status indicators
- **Interactive Elements**: Hover effects and smooth transitions

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.0** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Context API** - State management for user data

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
EMS/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── auth/
│   │   │   └── Login.jsx              # Authentication component
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx     # Admin interface
│   │   │   └── EmployeeDashboard.jsx  # Employee interface
│   │   ├── General/
│   │   │   ├── AllTask.jsx            # Admin task overview
│   │   │   ├── CreateTask.jsx         # Task creation form
│   │   │   ├── Header.jsx             # Navigation header
│   │   │   └── TaskListNumber.jsx     # Task statistics cards
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx         # Active task component
│   │       ├── CompleteTask.jsx       # Completed task component
│   │       ├── FailedTask.jsx         # Failed task component
│   │       ├── NewTask.jsx            # New task component
│   │       └── TaskList.jsx           # Task list container
│   ├── context/
│   │   └── AuthProvider.jsx           # Authentication context
│   ├── utils/
│   │   └── localStorage.jsx           # Data persistence utilities
│   ├── App.jsx                        # Main application component
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite configuration
└── README.md                          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Affan166114/Employee-Management-System.git
   cd employee-management-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔑 Default Login Credentials

### Admin Access

- **Email**: `abcd@gmail.com`
- **Password**: `123`

### Employee Access

Use any of these employee credentials:

- **Email**: `e@e.com` | **Password**: `123` (Affan)
- **Email**: `employee2@example.com` | **Password**: `123` (Abid)
- **Email**: `employee3@example.com` | **Password**: `123` (Abrar)
- **Email**: `employee4@example.com` | **Password**: `123` (Rehan)
- **Email**: `employee5@example.com` | **Password**: `123` (Hashim)

## 📋 Usage Guide

### For Administrators

1. **Login** with admin credentials
2. **Create Tasks**:
   - Fill in task title, description, and due date
   - Select category (Design, Development, QA, etc.)
   - Assign to specific employee by name
   - Click "Create Task"
3. **Monitor Progress**:
   - View all employees and their task statistics
   - Track task distribution across the team

### For Employees

1. **Login** with employee credentials
2. **View Dashboard**:
   - See task statistics in colored cards
   - Browse tasks by status (New, Active, Completed, Failed)
3. **Manage Tasks**:
   - Accept new tasks
   - Mark tasks as completed or failed
   - View task details and deadlines

## 🎯 Task Status Flow

```
New Task → Active Task → Completed Task
     ↓           ↓
  Failed Task ← Failed Task
```

- **New Task**: Recently created, awaiting employee acceptance
- **Active Task**: Accepted and currently being worked on
- **Completed Task**: Successfully finished
- **Failed Task**: Marked as failed by employee

## 🔧 Configuration

### Environment Variables

Currently, the application uses localStorage for data persistence. For production deployment, consider:

- Setting up a backend API
- Implementing proper database storage
- Adding environment variables for API endpoints

### Customization

- **Styling**: Modify Tailwind classes in components
- **Categories**: Add new task categories in the CreateTask component
- **User Roles**: Extend the role system in AuthProvider

## 🐛 Known Issues

- Task status updates are not fully functional (buttons need event handlers)
- Data persistence relies on localStorage (not suitable for production)
- No form validation for task creation
- Limited error handling

## 🚧 Future Enhancements

- [ ] **Backend Integration**: Connect to a real database
- [ ] **Real-time Updates**: Implement WebSocket connections
- [ ] **Task Comments**: Add commenting system
- [ ] **File Attachments**: Support for task-related files
- [ ] **Email Notifications**: Automated task notifications
- [ ] **Advanced Filtering**: Search and filter tasks
- [ ] **Task Templates**: Predefined task templates
- [ ] **Reporting**: Generate task reports and analytics
- [ ] **Mobile App**: React Native version
- [ ] **Multi-language Support**: Internationalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




