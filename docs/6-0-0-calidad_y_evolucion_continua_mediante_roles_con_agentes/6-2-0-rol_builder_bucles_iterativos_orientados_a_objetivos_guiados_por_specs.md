---
title: Rol Builder, bucles iterativos orientados a objetivos guiados por specs
description: Ejecución precisa y autónoma basada en especificaciones claras.
url: 6-2-0-rol_builder_bucles_iterativos_orientados_a_objetivos_guiados_por_specs
footer: 6.2. Builder, bucles iterativos guiados por specs. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 
marp: true
theme: ab
---

[6. Calidad y evolución continua mediante roles con agentes](./6-0-0-calidad_y_evolucion_continua_mediante_roles_con_agentes.md)  
# 6.2. Rol Builder: bucles iterativos orientados a objetivos guiados por specs

- Ejecución precisa y autónoma basada en especificaciones claras.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 

---

## Conexión

- **¿Confías en tus agentes?**
  - La tentación de la automatización total. 
- **¿Cuándo compruebas?**:
  - Recuerda que tú eres el responsable final .

---

## Conceptos

- **Spec-Driven Development (SDD)**:
  - La especificación guia todo el proceso de construcción. 
- **Proceso secuencial**:
  - Leer Spec -> Generar Plan -> Programar -> Verificar -> Cleanup -> Release

---

## Concreción

- Rol orquestador del arquitecto:
  - **Input**: Archivo de especificación y codebase actual.
  - **Output**: Código implementado y reporte de verificación.
- Worker agents:
  - `engineer` : Lee la spec, genera un plan de implementación  
  - `coder`: Implementa el código según el plan.
  - `tester`: Verifica que el código cumple la spec. 
  - `cleaner`: Elimina olores y fomenta el mantenimiento. 
  - `dev-ops`: Gestiona la integración y documentación.
---

> Generación/Instalación de `skills` adecuadas al _tech stack_.
---

## Conclusión

- El rol de Builder transforma el desarrollo en un proceso **industrial y predecible**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
