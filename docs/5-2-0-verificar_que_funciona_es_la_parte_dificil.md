---
title: Verificar que funciona es la parte difícil
description: El rol del desarrollador evoluciona hacia auditor y tester.
url: 5-2-0-verificar_que_funciona_es_la_parte_dificil
footer: 5.2. Verificar que funciona es la parte difícil. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[5. Programar, verificar, documentar](./5-0-0-programar_verificar_documentar.md)  
# 5.2. Verificar que funciona es la parte difícil

- El rol del desarrollador evoluciona hacia auditor y tester.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **Trust but Verify**
  - El código generado puede parecer correcto y compilar, pero tener fallos lógicos sutiles.
  - La "fatiga de revisión" es el nuevo enemigo.
- **¿Quién prueba al probador?**
  - Si la IA escribe los tests y el código, ¿quién asegura la validez?

---

## Conceptos

- **Testing Automatizado**:
  - Unitarios, integración y E2E.
  - Imprescindibles para detectar regresiones en refactors masivos de IA.
- **Manual Verification / Walkthrough**:
  - Seguir pasos explícitos para validar la funcionalidad desde la UI.
  - Documentar la prueba con evidencias (screenshots, logs).
- **Code Review Asistido**:
  - Usar la propia IA para explicar y analizar el código generado.
  - "Explícame qué hace este bloque y busca posibles edge cases".

---

## Concreción

- **QA Agent**: `Running verification plan`
```bash
npm test -- run-related login.spec.ts
```
- **Verification Plan**:
```md
## Verification
- [x] Unit tests passed (100% coverage on new service).
- [x] Manual login with valid credentials -> Redirects to Dashboard.
- [x] Manual login with invalid credentials -> Shows error message.
```

---

## Conclusión

- La **verificación** consume más tiempo que la codificación.
- Es la **red de seguridad** necesaria para aprovechar la velocidad de la IA.
- Un bug en producción cuesta mucho más que una hora de verificación rigurosa.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
