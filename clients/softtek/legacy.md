# 0. Programación Inteligente

**La IA no te quitará el trabajo, pero lo cambiará para siempre.**
> _Code Smarter!_ 
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)

---
# 1. Becario


```md 
/init minimalista (< 100 líneas en lenguaje simple y accionable). Incluye alcance del producto, stack tecnológico, carpetas principales, scripts de compilación, test, ejecución. Pregunta tus dudas y ofrece respuestas cerradas para agilizar el proceso.
```

```
/create-instruction Convenciones backend Spring extraídas de la implementación actual.
```

```
/create-instruction Convenciones frontend Angular extraíadas de la implmentación actual.
```

```
/create-instruction Convenciones e2e Playwright extraíadas de la implmentación actual.
```

### 1.1 Arreglo quick win

````
No hay links para llegar a la página de lanzamientos.
Necesitamos un link en la home que lleve a la lista de lanzamientos.
````

---
# 2. Analista

```
/create-prompt analiza funcionalidades, bugs o mejoras que quiero implementar. Para ello preguntame lo necesario para entender la definición de problema como _user stories_, un boceto de la solución esperada (sin profundidad técnica) y una lista corta de criterios de aceptación. Después planifica su implementación con una lista de pasos ordenados y que cada paso tenga una lista corta de tareas. Inluye un paso extra para pruebas e2e de los criterios de verificación. Guarda el resultado en un fichero product/{slug-id-nombre-corto}.plan.md para su posterior implmentación
```

### 2.1 Crear reserva

```
/analiza una funcionalidad que permita al operador crear una reserva para un lanzamiento (planificado o confirmado pero con plazas disponibles) guardando el contacto del pasajero (nombre, email y teléfono).
```

---
# 3. Programador

```
/create-prompt codifica que reciba un plan y lo siga paso a paso programando de la manera más sencilla posible la solución a la funcionalidad, bug o mejora solicitada. Haz que inluya test unitarios de las partes críticas (lógica de negocio, validaciones...), pero que NO implemente ni sigas los pasos de pruebas E2E. 
```

### 3.1 Implementa la funcionalidad de reservas

```
/codifica #el-slug-de-la-reserva.plan.md
```

---
# 4. Revisor

```
/create-prompt revisa que reciba un un plan y desarrolle las pruebas E2E para sus criterios de aceptación. Con el código asegurado, debe revisar su implementación limpiando code-smells y buscando oportunidades de simplificación y reutilización. Una vez resueltas, debe documentarlo en un CHANGELOG y actualizar, si procede, las instrucciones y convenios.
```

### 4.1 Revisa la funcionalidad de reservas

```
/revisa #el-slug-de-la-reserva.plan.md
```

---
# 5. Diseñador

```
npx skills add https://github.com/anthropics/skills --skill frontend-design
```
### 5.1 Mejorar la interfaz

```
/analiza una mejora en el diseño de la interfaz que ahora mismo es muy básico. Usa la skill #file:frontend-design para que sea moderno, facil de usar y con un toque espacial.
/codifica #el-slug-de-la-interfaz.plan.md
/revisa #el-slug-de-la-interfaz.plan.md
```

---
# 6. Jefe

```
/create-agent analista para generar planes de implantación de funcioanalidades, correcciones o mejoras. Que no cambie código. Haz que use las herramientas exploración de código y preguntas al usuario para comprender el negocio y la tecnología. Su trabajo debe ser continuado por un agente programador.
```

```
/create-agent programador para implementar planes de desarrollo en cualquier lenguaje y tecnología. Que cumpla las reglas y convenciones. Que use todas las herramientas necesarias. Su trabajo debe ser continuado por un agente revisor.
```

```
/create-agent revisor para garantizar la calidad del código mediante pruebas E2E, limpieza y documentación. Que use todas las herramientas necesarias. Su trabajo debe ser validado por un humano. 
```

```
/create-agent jefe que orqueste a los tres agentes (analista, programador y revisor) para implementar completamente un requerimiento del usuario. Cada agente debe ejecutar su prompt para analizar, programar y revisar el requerimiento.
```

### 6.1 Cancelaciones y suspensiones de lanzamientos

```
@jefe los lanzamientos pueden ser cancelados por inviabilidad económica, o suspendidos por cuestiones técnicas o climatológicas. Un operador que cancele o suspenda un lanzamiento debe especificar la causa.
```

--- 
# 7. Skills

> https://skills.sh/
> https://awesome-copilot.github.com/

- Angular
	- https://github.com/angular/skills
- Java Spring
	- https://github.com/github/awesome-copilot/tree/main/skills/java-springboot
	- https://github.com/github/awesome-copilot/blob/main/skills/java-junit/SKILL.md

- Clean/Simplify
	- https://github.com/github/awesome-copilot/blob/main/instructions/object-calisthenics.instructions.md
	- https://github.com/addyosmani/agent-skills/blob/main/.claude/commands/code-simplify.md

- Los 4 principios de Karpathy
	- https://skills.sh/forrestchang/andrej-karpathy-skills/karpathy-guidelines

- Diseño UI API
	- https://skills.sh/anthropics/skills/frontend-design
	- https://skills.sh/aj-geddes/useful-ai-prompts/rest-api-design
	- https://github.com/addyosmani/agent-skills/blob/main/skills/api-and-interface-design/SKILL.md
	- https://github.com/addyosmani/agent-skills/blob/main/skills/frontend-ui-engineering/SKILL.md

### 7.1 Agregar skills propias:

- **Usando Git**
````
/create-skill usando-git que instruya a los agentes en buenas prácticas para trabajar en repositorios git. Entre otras:

NUNCA uses estos comandos
<comandos-prohibidos>
- `git push` (incluyendo `--force` y otras variantes)
- `git reset --hard`
- `git clean -f` / `git clean -fd`
- `git branch -D`
- `git checkout .` / `git restore .`
</comandos-prohibidos>

Antes de hacer un commit, revisa y agrupa los cambios para que vayan en lotes significativos.

Agrega comentarios siguiendo las reglas de Conventionl-Commits a cada lote de cambios.

Crea una rama antes de implementar cualquier plan de desarrollo. Sea una funcionalidad feat/{slug} un arreglo fix/{slug} o una mejora improvement/{slug}. Pero, antes, guarda en un commit cualquier cambio pendiente.
````


---
# 8. MCPs

> https://github.com/mcp

- https://github.com/mcp/microsoft/playwright-mcp
- https://github.com/mcp/bytebase/dbhub
- https://github.com/mcp/com.figma.mcp/mcp
- https://github.com/mcp/com.atlassian/atlassian-mcp-server

---
# 9. Conclusión
  
- La mejora continua es completa: **Producto + Proceso (IA)**.
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)