---
name: release-spec
description: Cerrar una spec completada y actualizar la documentación de release.
argument-hint: Spec ID or spec file to release
---
# Release Spec

## Rol

Actuar como coordinador de release que cierra specs completadas y mantiene consistentes los artefactos de release.

## Contexto

Un proyecto tiene una spec implementada con evidencia de validación generada durante `/implement-spec`. La entrada puede incluir ID/archivo de la spec, detalles de PR fusionados, resultados de pruebas y notas de despliegue. Escribir en inglés por defecto, o en el idioma del usuario si se solicita.

### Referencias
- Spec objetivo, `/project/BACKLOG.md`, `/project/CHANGELOG.md`, `/AGENTS.md`, `/project/ADR.md`
- Plantillas: `*.backlog.template.md`, `*.changelog.template.md`, `*.agents.template.md`, `*.adr.template.md`
- Flujo de roadmap: `/release-spec` -> done, o `/update-spec` si quedan brechas

### Skills
- `writing-artifact`
- `updating-backlog`

### Herramientas
- ReadFile / rg / Glob
- Question tool (closed options; tool name is implementation-specific)
- ApplyPatch/Edit tools

## Tarea

Confirmar la preparación para el release a partir de la evidencia de implementación existente, establecer el estado en `/project/BACKLOG.md`, agregar una entrada en `/project/CHANGELOG.md` y actualizar AGENTS/ADR solo cuando sea necesario.

## Restricciones

- Basar las decisiones de release en evidencia explícita de implementación y validación.
- No marcar una spec como completada sin evidencia.
- Mantener los cambios mínimos, trazables y alineados con las plantillas.
- Hacer preguntas de opción cerrada si falta evidencia crítica de release.
- Mantener la orquestación Human-in-the-Loop explícita: `/implement-spec` ejecuta planes y validaciones; `/release-spec` decide el release a partir de la evidencia; `/update-spec` redefine las brechas.
- No ejecutar ciclos completos de prueba de implementación en `/release-spec`; consumir la evidencia producida por `/implement-spec`.

## Pasos

### 1. Analizar Evidencia
Validar la preparación para el release.
- [ ] Confirmar la spec objetivo y el alcance del release.
- [ ] Verificar que todos los planes de tier requeridos estén `Completed` (`front`, `back`, `e2e` cuando corresponda).
- [ ] Verificar que exista evidencia de implementación para los criterios de aceptación, incluyendo evidencia E2E cuando la spec requiera cobertura E2E.
- [ ] Registrar problemas no resueltos o trabajo de seguimiento.
- [ ] Hacer preguntas de opción cerrada si la preparación no está clara.

### 2. Actualizar Estado del BACKLOG
Establecer el estado del flujo de trabajo.
- [ ] Usar la skill `updating-backlog` para actualizar la fila de la spec objetivo en `/project/BACKLOG.md`.
- [ ] Establecer `Completed` solo cuando la evidencia de release sea suficiente.
- [ ] Si el release está incompleto pero es recuperable, mantener o establecer `In Progress` y redirigir a `/update-spec`.
- [ ] Si la evidencia muestra bloqueos no resueltos o validación fallida, mantener `Blocked` o `Failed` según la política.

### 3. Agregar Entrada en CHANGELOG
Registrar el resultado del release.
- [ ] Crear/actualizar la entrada en `/project/CHANGELOG.md` para la spec.
- [ ] Incluir el alcance entregado, resumen de validación y elementos de seguimiento.

### 4. Actualizar Documentación Técnica
Aplicar actualizaciones de documentación solo cuando sea justificado.
- [ ] Check if release changed tools, conventions, or architecture decisions.
- [ ] Ask for confirmation before editing `/AGENTS.md` or `/project/ADR.md`.
- [ ] Actualizar solo si hay evidencia y confirmación; de lo contrario, indicar que no hay cambios.

### 5. Auditoría Final de Consistencia
Asegurar que los artefactos del release estén alineados.
- [ ] Verificar la consistencia entre la spec, `/project/BACKLOG.md`, `/project/CHANGELOG.md` y la documentación técnica.
- [ ] Si está incompleto, no liberar; sugerir `/update-spec` como el siguiente comando Human-in-the-Loop.

## Salida

Fila actualizada en `/project/BACKLOG.md`, entrada de release en `/project/CHANGELOG.md`, actualizaciones opcionales en AGENTS/ADR, y un resumen breve del release con evidencia y seguimiento.

## Verificación

- [ ] Se revisó la evidencia de implementación y validación de la spec objetivo.
- [ ] Los planes por tier requeridos están `Completed` antes de aprobar el release.
- [ ] La validación E2E se trata como evidencia de implementación de `/implement-spec` (no se ejecuta como un ciclo completo en `/release-spec`).
- [ ] `/project/BACKLOG.md` está `Completed` solo con evidencia suficiente; de lo contrario, el estado sigue la política y el siguiente paso es `/update-spec`.
- [ ] `/project/CHANGELOG.md` incluye una entrada de release para la spec.
- [ ] Las ediciones de AGENTS/ADR se confirmaron antes de los cambios y se aplicaron solo cuando eran relevantes.
- [ ] La documentación del release es consistente y trazable a la spec objetivo.
