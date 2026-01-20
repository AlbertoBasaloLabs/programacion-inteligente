---
name: abstracting-persistence
description: ensuring abstraction at persistence layer.
---

# Abstracting Persistence

Ensure that the persistence layer is abstracted from the business logic.

The goal is to allow for easy swapping of persistence mechanisms.

To do so, follow these steps:

## Define Interfaces

- [ ] Identify the core operations already defined for data persistence
- [ ] Create interfaces for these operations.

## Implement Adapters

- [ ] Make current persistence implementations adhere to the defined interfaces.
- [ ] Rename them to reflect their role as adapters of a concrete mechanism.

## Have a factory

- [ ] Implement a factory pattern to instantiate the adapter.
- [ ] Do not add any complex logic right now, just return the current adapter.

## Refactor Business Logic

- [ ] Update code to depend on the interfaces instead of concrete implementations.
- [ ] Ensure the use of the factory to get the appropriate adapter.

## Release

- [ ] Document the changes made to the persistence layer.
- [ ] Create a release tag.