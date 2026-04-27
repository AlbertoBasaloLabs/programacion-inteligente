---
name: implement-spec
description: Implement one full spec by generating and executing per-tier physical plans.
argument-hint: Spec ID, spec file path, or backlog row reference
---
# Implement Spec

## Role

Actúa como un implementation orchestrator que entrega una spec end-to-end mediante planes por tier.

## Context

Un proyecto tiene una spec objetivo en `specs/`, un `/project/BACKLOG.md`, y convenciones de implementación en `/AGENTS.md` y `/project/ADR.md`. La implementación debe dividirse por physical layer (`front`, `back`, `e2e`) con un plan por tier, y ejecutarse en secuencia hasta completar la validation.

### Referencias

- Target spec, `/project/BACKLOG.md`, `/AGENTS.md`, `/project/ADR.md`, source code, test suites
- Plan files: `specs/<spec-slug>.<tier>.plan.md`
- Roadmap flow: `/implement-spec` -> `/release-spec` or `/update-spec`

### Skills

- `writing-plan`
- `implementing-plan`
- `updating-backlog`

### Herramientas

- ReadFile / rg / Glob
- Question tool (closed options; tool name is implementation-specific)
- ApplyPatch/Edit tools
- Shell (build, test, lint, git workflow)

## Task

Implementar una spec completa haciendo: (1) crear o refrescar todos los physical-layer plans requeridos, (2) ejecutar cada plan, y (3) mantener los lifecycle states de task/plan/spec consistentes.

## Restricciones

- No implementar sin una target spec.
- Mantener un archivo de plan por tier y evitar archivos de plan duplicados.
- Usar lifecycle states explícitos y actualizarlos conforme cambie la evidence.
- Preguntar con closed-option questions cuando falten inputs críticos (tier scope, blockers, ambiguous acceptance).

## Pasos

### 1. Seleccionar y Validar la Spec Objetivo

Elegir la spec a implementar y verificar su readiness.
- [ ] Resolver la spec objetivo a partir del input (ID, archivo o fila del backlog).
- [ ] Confirmar que la spec tiene secciones de Solution y Verification accionables.
- [ ] Si la spec no está lista para implementación, detenerse y sugerir `/update-spec`.

### 2. Establecer el Estado Inicial de la Spec

Marcar el inicio de la implementación.
- [ ] Usar `updating-backlog` para establecer el estado de la spec en `In Progress` en `/project/BACKLOG.md` (si no lo está ya).
- [ ] Preservar o actualizar dependencias solo con evidencia.

### 3. Crear/Actualizar Planes por Tier

Generar planes antes de codificar.
- [ ] Determinar los tiers requeridos (`front`, `back`, `e2e`) a partir del alcance de la spec.
- [ ] Usar la skill `writing-plan` para crear/actualizar un plan por cada tier requerido.
- [ ] Asegurarse de que cada plan tenga pasos ordenados y tareas verificables.
- [ ] Marcar cada plan generado/actualizado como `Pending` en la sección de seguimiento de la spec.

### 4. Ejecutar Planes

Implementar los planes uno por uno.
- [ ] Ejecutar cada plan por tier usando `implementing-plan`.
- [ ] Mantener los estados de plan/tarea actualizados (`In Progress`, `Completed`, `Failed`, `Blocked`) según la evidencia real.
- [ ] Hacer commit del progreso por cada paso completado del plan cuando sea apropiado.

### 5. Validar Resultado End-to-End

Verificar el estado final de la implementación.
- [ ] Ejecutar validaciones apropiadas por tier (tests/build/lint/static checks).
- [ ] Confirmar que los criterios de verificación de la spec se cumplen.
- [ ] Si la implementación está incompleta pero es recuperable, mantener la spec en `In Progress` y sugerir `/update-spec`.

### 6. Cerrar Estado de Implementación

Establecer el estado final de la spec.
- [ ] Si todos los planes requeridos se completaron y la verificación pasó, mantener la spec lista para `/release-spec`.
- [ ] Si la validación falla después de los intentos de remediación, establecer el estado de la spec en `Failed`.
- [ ] Mantener los bloqueos no resueltos reflejados como `Blocked`.

## Salida

Archivos de plan por tier actualizados, cambios de implementación en código/tests, estados de ciclo de vida sincronizados (tareas/planes/spec), y un informe de implementación conciso con el siguiente comando (`/release-spec` o `/update-spec`).

## Verificación

- [ ] Se seleccionó y validó exactamente una spec objetivo.
- [ ] Los planes por tier requeridos se crearon/refrescaron antes de la ejecución.
- [ ] Los estados de plan/tarea reflejan el progreso basado en evidencia.
- [ ] El estado de la spec en `/project/BACKLOG.md` sigue las transiciones permitidas.
- [ ] Se verificaron los criterios de la spec y se registraron los resultados.
- [ ] La recomendación final es explícita: `/release-spec` o `/update-spec`.
