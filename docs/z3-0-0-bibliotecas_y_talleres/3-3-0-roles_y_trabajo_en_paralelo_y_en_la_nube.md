---
title: Roles y trabajo en paralelo y en la nube
description: Orquestando equipos de agentes.
url: 3-3-0-roles_y_trabajo_en_paralelo_y_en_la_nube
footer: 3. Bibliotecas y talleres. &copy; [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 
marp: true
theme: ab
---

[3. Bibliotecas y talleres](./3-0-0-bibliotecas_y_talleres.md)
# 3.3. Roles y trabajo en paralelo y en la nube

- Orquestando equipos de agentes en trabajos largos y complejos.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 

---

## Conexión

- **¿Un solo programador para todo el proyecto?**
  - En equipos humanos especializamos roles (QA, Dev, Arch).
  - El trabajo pasa de unos a otros.
  - Los miembros de equipo trabajan en paralelo.

---

## Conceptos

- **Roles especializados**:
  - Capacidades y herramientas específicas para cada función.
- **Orquestación**:
  - Coordinación de múltiples agentes en flujos de trabajo.
    - **HandOffs**: Transferencia de responsabilidades entre agentes.
    - **Cloud**: Transferencia a la nube.
    - **WorkTree**: Ramas simultáneas locales.
---

## Concreción

- Cabecera `YAML` para definir el rol y las herramientas de cada agente.
 - Modelo, Herramientas, ayudas, etc.
 - HandOffs: Permite establecer flujos de trabajo entre agentes. 
   - analyze -> architect -> spec
   - spec -> plan -> code
   - code -> test
---

## Conclusión

- La **especialización** aumenta la calidad.
- La **orquestación** permite abordar proyectos complejos.
- La **nube** escala la capacidad de producción de software.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
