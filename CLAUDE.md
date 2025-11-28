# Claude Code Context

This file provides important context for AI assistants (like Claude) working on the Coolify documentation codebase.

## Service Documentation Naming Conventions

### File Naming Rules

Service documentation files in `docs/services/` must follow these conventions:

1. **Use kebab-case lowercase** for all filenames
2. **Match the base service name** from `service-templates-latest.json` in the main Coolify repository
3. **Do not use camelCase** even if the JSON template uses it (e.g., `denoKV` → `denokv.md`)
4. **Include version numbers** when specified in the JSON (e.g., `mautic5.md` not `mautic.md`)
5. **Use compound names** when the JSON specifies them (e.g., `ente-photos.md` not `ente.md`)

### Source of Truth

The authoritative source for service names is:
```
https://raw.githubusercontent.com/coollabsio/coolify/refs/heads/v4.x/templates/service-templates-latest.json
```

When adding or renaming services, always check this file first.

### Related Files That Must Be Updated

When renaming a service documentation file, you must update:

1. **nginx/redirects.conf** - Add redirect rules from old URLs to new URLs
2. **docs/.vitepress/theme/components/Services/List.vue** - Update the `slug` property to match new filename
3. Any internal links in other documentation files

### Disabled Services

Services that are deprecated or temporarily unavailable should:
- Keep their documentation file
- Add `disabled: true` to the frontmatter
- Optionally include a warning message in the content

Example:
```yaml
---
title: "Service Name"
description: "Service description"
disabled: true
---
```

## Service Categories

Services are organized into categories. When adding new services, refer to existing services in the same category for consistency.

## File Structure

```
docs/
├── services/
│   ├── introduction.md       # Overview of services
│   ├── overview.md           # Interactive services list
│   ├── all.md                # Complete categorized directory
│   ├── service-name.md       # Individual service documentation
│   └── ...
├── .vitepress/
│   └── theme/
│       └── components/
│           └── Services/
│               └── List.vue   # Services list component with hardcoded slugs
└── ...
nginx/
└── redirects.conf            # URL redirect rules
```

## Common Tasks

### Adding a New Service

1. Create `docs/services/service-name.md` following existing format
2. Add entry to `docs/.vitepress/theme/components/Services/List.vue`
3. Verify service name matches the JSON template

### Renaming a Service

1. Rename the service documentation file
2. Update slug in `docs/.vitepress/theme/components/Services/List.vue`
3. Add redirect rule in `nginx/redirects.conf`
4. Search for any internal links referencing the old name

### Disabling a Service

1. Add `disabled: true` to frontmatter in the service documentation file
2. Optionally add warning message in content
3. Keep the file - do not delete it
4. Keep nginx redirects pointing to it

## Important Notes

- **Never use camelCase** for filenames, even if the JSON template does
- **Always check the JSON template** before naming services
- **Update all three locations** when renaming: file, List.vue, redirects.conf
- **Maintain redirect rules** even for deleted services to prevent 404 errors
