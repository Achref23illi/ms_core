---
description: Project coding rules and guidelines for MS Core application
---

# MS Core - Project Rules & Guidelines

## 🚨 MANDATORY RULES - MUST FOLLOW

### 1. NO HARDCODING
- **NEVER** hardcode colors, fonts, spacing, or any design tokens directly in components
- **ALWAYS** use values from configuration files:
  - Colors: `import { colors } from '@/app/src/config'`
  - Fonts: `import { fontSizes, fontWeights, typography } from '@/app/src/config'`
  - Assets: `import { icons, images, logos } from '@/app/src/config'`
- **NEVER** hardcode text strings - always use translations

### 2. COMPONENT-BASED ARCHITECTURE
- **ALL pages must be built using reusable components**
- Create components in `app/src/components/` directory
- Components should be:
  - Small and focused (single responsibility)
  - Reusable across multiple pages
  - Well-typed with TypeScript
  - Properly documented with comments

#### Component Structure:
```
app/src/components/
├── ui/                 # Base UI components (Button, Input, Card, etc.)
├── layout/             # Layout components (Header, Footer, Sidebar, etc.)
├── forms/              # Form-related components
├── shared/             # Shared/common components
└── [feature]/          # Feature-specific components
```

### 3. ALWAYS USE TRANSLATIONS (next-intl)
- **NEVER** write text directly in components
- **ALWAYS** use the `useTranslations` hook:
  ```tsx
  import { useTranslations } from 'next-intl';
  
  const MyComponent = () => {
    const t = useTranslations('namespace');
    return <h1>{t('title')}</h1>;
  };
  ```
- Add all text to `messages/[locale].json` files
- Use namespaces to organize translations (e.g., `common`, `auth`, `navigation`)

### 4. RESPONSIVENESS IS OBLIGATORY
- **ALL components and pages MUST be responsive**
- Use Tailwind CSS breakpoints:
  - `sm:` - 640px and up
  - `md:` - 768px and up
  - `lg:` - 1024px and up
  - `xl:` - 1280px and up
  - `2xl:` - 1536px and up
- Mobile-first approach: design for mobile, then scale up
- Test on multiple screen sizes before considering complete

---

## 📁 Project Structure

```
app/
├── src/
│   ├── components/     # All reusable components
│   │   ├── ui/         # Base UI components
│   │   ├── layout/     # Layout components
│   │   └── ...
│   ├── config/         # Configuration files
│   │   ├── colors.ts   # Color palette
│   │   ├── fonts.ts    # Typography
│   │   ├── assets.ts   # Asset paths
│   │   └── index.ts    # Barrel export
│   ├── store/          # Redux store
│   │   ├── slices/     # Redux slices
│   │   └── ...
│   ├── i18n/           # Internationalization
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   └── [pages]         # Page components
├── messages/           # Translation files
│   ├── en.json
│   └── [other locales].json
└── public/             # Static assets
```

---

## 🎨 Brand Colors

| Color     | Hex Code  | Usage                    |
|-----------|-----------|--------------------------|
| Primary   | `#092963` | Main brand color         |
| Secondary | `#0272c2` | Secondary actions, links |

Access via: `import { colors } from '@/app/src/config'`

---

## ✅ Code Quality Checklist

Before completing any component or page, verify:

- [ ] No hardcoded colors (use `colors.*`)
- [ ] No hardcoded text (use `t('key')`)
- [ ] No hardcoded font sizes (use `fontSizes.*`)
- [ ] Component is responsive (tested on mobile, tablet, desktop)
- [ ] Component uses TypeScript with proper types
- [ ] Component is reusable where applicable
- [ ] Accessibility considerations (aria labels, semantic HTML)

---

## 🔄 State Management (Redux)

- Use Redux for global state management
- Use typed hooks:
  ```tsx
  import { useAppDispatch, useAppSelector } from '@/app/src/store';
  ```
- Create slices in `app/src/store/slices/`
- Keep component state local when possible (useState for UI state)

---

## 📝 Naming Conventions

| Type          | Convention      | Example                  |
|---------------|-----------------|--------------------------|
| Components    | PascalCase      | `UserProfile.tsx`        |
| Hooks         | camelCase       | `useAuth.ts`             |
| Utils         | camelCase       | `formatDate.ts`          |
| Constants     | SCREAMING_SNAKE | `MAX_RETRY_COUNT`        |
| CSS Classes   | kebab-case      | `user-profile-card`      |
| Translation   | camelCase       | `signInButton`           |

---

## 🚀 Quick Start for New Features

1. **Create translations** in `messages/en.json`
2. **Create/update components** in `app/src/components/`
3. **Use config values** for colors, fonts, assets
4. **Make it responsive** - mobile first
5. **Test thoroughly** - all breakpoints
