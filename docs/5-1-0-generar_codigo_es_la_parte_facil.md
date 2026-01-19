---
title: Generar código es la parte fácil
description: Con especificaciones claras, la IA se encarga de la implementación.
url: 5-1-0-generar_codigo_es_la_parte_facil
footer: 5.1. Generar código es la parte fácil. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[5. Programar, verificar, documentar](./5-0-0-programar_verificar_documentar.md)  
# 5.1. Generar código es la parte fácil

- Con especificaciones claras, la IA se encarga de la implementación.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **¿Cuánto tiempo pasas tecleando código boilerplate?**
  - La IA puede generar en segundos lo que a ti te lleva horas.
- **¿El miedo al código generado por IA?**
  - Surge cuando no hay control ni contexto. Con specs, el control es total.

---

## Conceptos

- **Context Engineering**:
  - Preparar el entorno (ficheros abiertos, reglas) para el modelo.
  - Seleccionar las especificaciones relevantes para la tarea actual.
- **Rules & Instructions**:
  - Guiar el estilo, convenciones y restricciones técnicas.
  - Evitar alucinaciones o soluciones fuera de arquitectura.
- **Specs as Prompts**:
  - El prompt principal es la especificación funcional detallada.
  - "Implementa lo descrito en `feature.spec.md`".

---

## Concreción

- **Engineer Agent**: `Coding task loop`
```md
# Task: Implement User Login
- [ ] Create `LoginService` interface based on spec.
- [ ] Implement `LoginServiceImpl` with `AuthProvdier`.
- [ ] Create `LoginController` handling DTOs.
```
- **Coder Role**:
  - El humano revisa y aprueba planes, la IA ejecuta.
  - Uso de herramientas de edición de ficheros (`write_file`, `replace`).

---

## Conclusión

- La generación de código se vuelve una **commodity**.
- El valor del desarrollador está en **definir QUÉ hacer** (specs) y **guiar CÓMO hacerlo** (contexto).
- La eficiencia se dispara al eliminar el cuello de botella de la escritura manual.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
