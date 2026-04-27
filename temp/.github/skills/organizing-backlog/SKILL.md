---
name: organizing-backlog
description: Actualizar filas en /project/BACKLOG.md para specs usando una única política de status/importance. Usar al crear, actualizar, releasing o requeuing specs; cualquier prompt debe crear o modificar entradas del BACKLOG.
---

# Organizing Backlog

Flujo canónico para actualizar entradas en `/project/BACKLOG.md` ligado al lifecycle de una spec.

## Contexto

A continuación hay una lista de palabras y frases potencialmente traducibles al español:

- `Pending`, `In Progress`, `Completed`, `Blocked`, `Failed`, `Dependencies`, `Specification`, `Status`, `Importance`, `low`, `HIGH`

## Cuando Usar

- Crear una nueva fila de spec en `/project/BACKLOG.md`
- Actualizar una fila de spec existente tras cambios en la spec
- Marcar una spec released como `Completed` o `Failed`
- Encolar una spec a `Pending` después de un release o gaps de implementación

## Columnas Requeridas

Siempre preservar y actualizar estas columnas:
- `Specification`: el spec ID y link/path.
- `Dependencies`: la lista de spec IDs requeridos por la spec.
- `Status`: el status de la spec.
- `Importance`: la importance de la spec.

## Identidad de Fila y Deducción de Duplicados

Usar esta precedencia para localizar una fila existente:
1. Coincidencia exacta de spec ID en `Specification` (por ejemplo `FR3`, `B07`)
2. Coincidencia exacta de file link/path de la spec
3. Coincidencia exacta del title slug de la spec

## Reglas de Transición de Status

Estados permitidos:
- `Pending`: la spec existe y está implementation-ready pero no se está ejecutando activamente.
- `In Progress`: se inició la implementación activa (plan, implementación).
- `Completed`: la implementación y la evidencia de release son suficientes y aceptadas.
- `Blocked`: el progreso está pausado esperando una dependency.
- `Failed`: la implementación/validación falló en el ciclo de ejecución actual.

Happy path:
- `Pending` -> `In Progress` -> `Completed`
Waiting Path:
- Espera por dependency: marcar `Blocked` mientras se espera que otras dependencies se completen.

Failure Path:
- Falla de implementación: `Pending` -> `In Progress` -> `Failed`
- Remediación humana tras fallo: `Failed` -> `Pending` (requiere un nuevo ciclo de implementación con planes refrescados).

## Importance Policy

Usar `HIGH` cuando el impacto para el user/business o la urgencia sea alta.
Usar `low` en caso contrario.

Si no se puede inferir la importance de forma segura, pedir una aclaración de opción cerrada.

## Procedure

### 1. Analizar Spec Objetivo
- [ ] Identificar spec ID, title y file path.
- [ ] Identificar el action context (draft, report, release, requeue).

### 2. Localizar o Crear Fila
- [ ] Buscar por ID, luego por link/path, luego por slug.
- [ ] Actualizar la fila existente o crear una nueva fila.

### 3. Aplicar Status e Importance
- [ ] Establecer el status usando la status policy y los transition guardrails.
- [ ] Establecer la importance a partir de instrucciones explícitas o evidence de impacto.
- [ ] Preservar las dependencies existentes salvo que nueva evidencia requiera cambio.

### 4. Actualizar Dependencies
- [ ] Actualizar las dependencies relacionadas según el cambio actual.
- [ ] Bloquear o desbloquear dependientes según el cambio actual.

### 5. Validar Consistencia
- [ ] Asegurar que las columnas requeridas estén completas.
- [ ] Asegurar que no haya duplicados para la spec.
- [ ] Asegurar que el status esté alineado con la evidencia del ciclo de vida actual.
- [ ] Asegurar que la transición siga las rutas happy/non-happy y los guardrails anteriores.

## Output

Una fila creada o actualizada en `/project/BACKLOG.md` para la spec objetivo.

## Verification

- [ ] Exactamente una fila existe para la spec objetivo.
- [ ] El status es válido y cumple las transiciones.
- [ ] La importance está justificada o claramente aclarada.
- [ ] Las columnas requeridas están completas y alineadas con la plantilla.
