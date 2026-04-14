# ¿Qué no hacer con IA?

>  Procesos deterministas bien conocidos, de negocio o muy particulares.

## Boilerplates

### Java Spring Boot
 ```bash
 curl https://start.spring.io/starter.zip \
  -d dependencies=web \
  -d type=maven-project \
  -d language=java \
  -d javaVersion=25 \
  -d groupId=academy.aicode \
  -d artifactId=astrobookings \
  -d name=astrobookings \
  -d packageName=academy.aicode.astrobookings \
  -o back.zip

unzip back.zip -d back
```

### Node.js Express

```bash
git clone https://github.com/AlbertoBasalo/express2026.git
```

### Angular

- `ng new AstroBookings --ai-config=copilot --directory=front --routing --skip-git --ssr=false --style=css  --zoneless --dry-run`


> Tratar los boilerplates según sea un mono-repo o un mono-servicio. Asegurar ficheros root de agentes.
```text
.                         # Project root
├── AGENTS.md             # Agent instructions for this repository
├── .agents/              # Agents skills and prompts
│   └── skills/           # Agent skills for specific tasks
├── project/              # Project-specific documentation
│   ├── ADD.md            # Architecture Design Document
│   ├── PRD.md            # Product Requirements Document
│   └── specs/            # Project specifications
└── README.md             # Project overview
```	

## Briefings

- [AstroBookings](../../project/briefing.md)
- [AstroBookings Español](../../project/es.briefing.md)


## Otros

- Templates
- Configuración de sistemas