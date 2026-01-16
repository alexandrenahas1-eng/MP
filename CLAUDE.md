# CLAUDE.md - AI Assistant Guide for MP

This document provides guidance for AI assistants working on the MP repository.

## Project Overview

**Repository:** MP
**Status:** New project - initial setup phase
**Last Updated:** January 2026

This repository is currently in its initial setup phase. As the project develops, this document should be updated to reflect the actual codebase structure, conventions, and workflows.

## Repository Structure

```
MP/
├── CLAUDE.md           # AI assistant guidelines (this file)
└── (project files to be added)
```

## Development Guidelines

### General Conventions

- Write clean, readable code with meaningful variable and function names
- Follow the DRY (Don't Repeat Yourself) principle
- Keep functions focused and single-purpose
- Add comments only where the logic isn't self-evident

### Git Workflow

1. **Branch Naming:** Use descriptive branch names (e.g., `feature/add-auth`, `fix/login-bug`)
2. **Commit Messages:** Write clear, concise commit messages that explain the "why" not just the "what"
3. **Pull Requests:** Include a summary of changes and any relevant testing notes

### Code Style

When the project establishes a specific tech stack, update this section with:
- Language-specific style guides
- Linting configuration
- Formatting rules

## Commands Reference

*To be updated as build scripts and tools are added*

| Command | Description |
|---------|-------------|
| TBD | Project commands will be documented here |

## Testing

*To be updated when testing framework is configured*

- Test location: TBD
- Test command: TBD
- Coverage requirements: TBD

## Architecture Notes

*To be updated as the project architecture takes shape*

Key architectural decisions and patterns will be documented here as the project develops.

## Common Tasks for AI Assistants

### When Adding New Features

1. Understand existing patterns in the codebase
2. Follow established conventions
3. Write tests for new functionality
4. Update documentation as needed

### When Fixing Bugs

1. Reproduce the issue first
2. Identify the root cause
3. Make minimal, focused changes
4. Verify the fix doesn't introduce regressions

### When Reviewing Code

1. Check for consistency with project conventions
2. Look for potential edge cases
3. Verify error handling is appropriate
4. Ensure code is readable and maintainable

## Security Considerations

- Never commit sensitive data (API keys, passwords, credentials)
- Use environment variables for configuration secrets
- Validate all user inputs
- Follow OWASP security guidelines

## Getting Started

1. Clone the repository
2. Install dependencies (when applicable)
3. Review this CLAUDE.md for project conventions
4. Check existing issues/PRs for context

---

*This document should be updated as the project evolves. When significant changes are made to the codebase structure, build system, or development workflows, please update the relevant sections above.*
