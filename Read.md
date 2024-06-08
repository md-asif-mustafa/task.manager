task-manager/
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── favicon.ico
│   └── src/
│       ├── components/
│       │   ├── TaskList.js
│       │   └── TaskItem.js
│       ├── redux/
│       │   ├── actions/
│       │   │   └── taskActions.js
│       │   ├── reducers/
│       │   │   └── taskReducer.js
│       │   └── store.js
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       ├── index.css
├── docker-compose.yml
└── README.md
