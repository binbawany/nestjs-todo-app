NestJS ToDo App with MongoDB + Docker + ELK Stack
🛠 Stack
NestJS (Backend API)

MongoDB (Database)

Docker Compose (Container Orchestration)

Elasticsearch, Logstash, Kibana (Logging and Visualization)

🚀 Running Project
Requirements
1:Docker
2:Docker Compose

Steps
1:git clone https://github.com/your-username/your-repo-name.git
2:cd your-repo-name
3:docker-compose up --build
📑 API Endpoints

Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	Get all tasks
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
🔥 Access Services

Service	URL
NestJS API	http://localhost:3000/tasks
MongoDB	localhost:27017 internally
Elasticsearch	http://localhost:9200
Kibana	http://localhost:5601
⚙ How it Works
NestJS handles API requests (/tasks) and logs actions.

MongoDB stores tasks.

Logs are sent to Logstash, pushed into Elasticsearch.

Kibana visualizes all logs for analytics.

✅ Project Ready!
