---
title: Agentes aumentados con MCPs
description: Extender las capacidades de los agentes con herramientas.
url: 3-2-0-agentes_aumentados_con_mcps
footer: 3.2. Agentes aumentados con MCPs. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[3. Bibliotecas y talleres](./3-0-0-bibliotecas_y_talleres.md)
# 3.2. Agentes aumentados con MCPs

- Extender las capacidades de los agentes con herramientas.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **¿Puede tu agente acceder a tu base de datos? ¿Y al gestor de tareas?**
  - Los LLM están aislados, necesitan herramientas para interactuar.
  - Los agentes de los IDEs les dan acceso al sistema de ficheros y a la terminal.
  - Pero, pueden ir mucho más allá.

---

## Conceptos

- **Model Context Protocol (MCP)**:
  - Estándar abierto para conectar agentes de IA a sistemas de software.
- **Cliente-Servidores**:
  - El cliente trabaja en lenguaje natural.
  - El servidor gestiona las herramientas y la lógica.
- **Herramientas (Tools)**:
  - Cada MCP ofrece un conjunto de herramientas específicas.
  - Los agentes las utilizan según las necesidades contextuales.

---

## Concreción

- ToDo: Instalar y usar uno de estos MCPS:
  - Github
  - Context7
  - DbHub

---

## Conclusión

- Los MCPs transforman un **conversador** en un **trabajador**.
- Permiten **integraciones en lenguaje natural**.
- Un gran poder conlleva una gran responsabilidad: **seguridad y control**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
