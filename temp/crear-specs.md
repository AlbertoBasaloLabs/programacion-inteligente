Cómo escribir una buena especificación para agentes de IA  
Fuente: https://addyosmani.com/blog/good-spec/

El artículo propone un marco práctico para crear especificaciones efectivas que guíen a agentes de IA (como Claude Code, Gemini CLI o Copilot) sin saturarlos con información ni provocar errores por exceso de contexto. La idea central: una buena spec es clara, modular, evolutiva y diseñada para que la IA pueda trabajar con precisión y autonomía.

🎯 1. Empieza con una visión de alto nivel
Define objetivos, usuarios y criterios de éxito.

Deja que la IA expanda esa visión en un plan detallado.

Usa modos de planificación (como Plan Mode) para refinar antes de ejecutar.

Guarda la spec como un archivo persistente (p. ej., SPEC.md) que actúe como “fuente de verdad”.

🧱 2. Estructura la spec como un PRD/SRS profesional
Incluye secciones claras que la IA pueda interpretar sin ambigüedad:

Comandos (build, test, lint, etc.)

Testing (framework, ubicación, cobertura)

Estructura del proyecto

Estilo de código (con ejemplos reales)

Workflow de Git

Límites y prohibiciones (qué hacer, qué preguntar, qué nunca tocar)

La organización clara mejora la “experiencia del agente” (AX).

🧩 3. Divide el trabajo en tareas modulares
Evita el “prompt gigante” que mezcla todo.

El exceso de instrucciones reduce la adherencia del modelo (“curse of instructions”).

Usa resúmenes jerárquicos, TOCs extendidos y sub-especificaciones.

Trabaja por fases: backend, frontend, API, etc.

Incluso puedes usar subagentes especializados o procesos paralelos.

🛡️ 4. Añade autochecks, límites y tu experiencia
Usa un sistema de tres niveles:

✔️ Siempre hacer

⚠️ Preguntar antes

⛔ Nunca hacer

Fomenta la auto-verificación: que la IA revise su output contra la spec.

Usa un segundo agente como “juez” para revisar estilo o calidad.

Incluye criterios de conformidad, tests o casos esperados.

Añade tu conocimiento experto: patrones, trampas, decisiones arquitectónicas.

🧘 5. Mantén la spec viva
Actualízala a medida que tú o la IA tomáis decisiones.

Haz que el documento guíe el ciclo completo: especificar → planificar → crear tareas → implementar.

Evita que el proyecto se convierta en un “castillo de naipes” por falta de coherencia.

⭐ Conclusión
Una buena spec para agentes de IA es:

Clara

Estructurada

Modular

Iterativa

Diseñada para que la IA pueda trabajar sin ambigüedades

El objetivo no es escribir un documento enorme, sino uno inteligente, que permita a la IA producir trabajo fiable y alineado con tu visión.