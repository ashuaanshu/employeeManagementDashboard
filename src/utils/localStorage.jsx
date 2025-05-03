
const employees = [
  {
    id: 1,
    first_name: "Aarav",
    email: "e@e.com",
    password: "123",
    task_summary: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare sales report",
        date: "2025-05-01",
        category: "Reporting",
        description: "Compile the monthly sales data for review.",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Client meeting",
        date: "2025-05-02",
        category: "Meeting",
        description: "Discuss the Q2 strategy with the client.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM",
        date: "2025-04-30",
        category: "Data Entry",
        description: "Ensure all client information is up to date.",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    first_name: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    task_summary: {
      active: 2,
      new_task: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design new logo",
        date: "2025-04-25",
        category: "Design",
        description: "Create a fresh logo concept for the rebranding.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Team feedback",
        date: "2025-05-01",
        category: "HR",
        description: "Collect performance feedback from team members.",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Prototype UI",
        date: "2025-05-03",
        category: "UI/UX",
        description: "Build prototype for mobile dashboard.",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix header bug",
        date: "2025-04-29",
        category: "Development",
        description: "Resolve issue with the fixed header on scroll.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    first_name: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    task_summary: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Inventory check",
        date: "2025-04-28",
        category: "Logistics",
        description: "Verify stock availability for next shipment.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Send newsletter",
        date: "2025-05-01",
        category: "Marketing",
        description: "Dispatch new campaign newsletter.",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Clean test database",
        date: "2025-05-02",
        category: "Maintenance",
        description: "Delete old test records and reset tables.",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    first_name: "Devansh",
    email: "employee4@example.com",
    password: "123",
    task_summary: {
      active: 1,
      new_task: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Backend optimization",
        date: "2025-04-27",
        category: "Development",
        description: "Optimize database queries for user module.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Security audit",
        date: "2025-05-03",
        category: "Security",
        description: "Review security configurations for the server.",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "API docs update",
        date: "2025-04-30",
        category: "Documentation",
        description: "Update Swagger documentation.",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      },
      {
        title: "Unit testing",
        date: "2025-04-29",
        category: "Testing",
        description: "Write tests for the auth controller.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    first_name: "Yug",
    email: "employee5@example.com",
    password: "123",
    task_summary: {
      active: 1,
      new_task: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Content writing",
        date: "2025-05-01",
        category: "Content",
        description: "Write blog article for new feature launch.",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Video editing",
        date: "2025-04-26",
        category: "Media",
        description: "Edit product demo video.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO audit",
        date: "2025-04-28",
        category: "Marketing",
        description: "Analyze current SEO stats and suggest improvements.",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      }
    ]
  }
];


  const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  ];

  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse( localStorage.getItem('employees'))

    const admin=JSON.parse( localStorage.getItem('admin'))

    return {admin, employees};
  }