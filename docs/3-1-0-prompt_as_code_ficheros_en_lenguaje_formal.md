---
title: Prompt as Code, ficheros en lenguaje formal
description: Tratar los prompts como código fuente.
url: 3-1-0-prompt_as_code_ficheros_en_lenguaje_formal
footer: 3.1. Prompt as Code. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[3. Bibliotecas y talleres](./3-0-0-bibliotecas_y_talleres.md)
# 3.1. Prompt as Code, ficheros en lenguaje formal

- Tratar los prompts como código fuente.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **¿Cómo gestionas la evolución de tus prompts?**
  - Copiar y pegar en chats es efímero y difícil de mejorar.
  - El prompt es la principal primitiva del código.
  - El código se comparte y versiona, los prompts deberían también.

---

## Conceptos

- **Prompt as Code**:
  - Tratar las instrucciones a la IA como activos de software.
- **Estructura formal**:
  - Separar contexto, instrucciones, ejemplos, variables y formato de salida.
- **Prompt engineering**:
  - Aplicaremos los principios de ingeniería al desarrollo de prompts.

---

## Concreción

- **Prompt de especificación**: `3-1-1-spec.md`

```markdown
/spec Provide API management of future rocket launches used for bookings. 
Each launch is defined by:
 a scheduled date, assigned rocket, price per passenger, 
 and a minimum seat threshold required for profitability. 
Launches progress through a defined lifecycle status: 
 scheduled, confirmed, successful, 
 cancelled due to economic viability, 
 suspended due to weather or technical issues.
```

---

## Conclusión

- Los prompts son la primitiva del **software**.
- Necesitan **mantenimiento y colaboración**.
- La calidad del prompt determina la **calidad del resultado**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
