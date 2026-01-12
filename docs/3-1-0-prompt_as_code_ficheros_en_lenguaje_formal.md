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
  - El código se versiona, los prompts deberían también.

---

## Conceptos

- **Prompt as Code**:
  - Tratar a las instrucciones a la IA como activos de software.
- **Estructura formal**:
  - Separar contexto, instrucciones, ejemplos variables y formato de salida.
- **Versionado**:
  - Uso de git para control de cambios y evolución de prompts.

---

## Concreción

```markdown
---
description: Generar tests unitarios
---
# Contexto
Eres un experto en testing con Jest.

# Instrucciones
Genera tests para la función proporcionada.
```

---

## Conclusión

- Los prompts son **software**.
- Necesitan **mantenimiento y versionado**.
- La calidad del prompt determina la **calidad del resultado**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
