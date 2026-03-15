# Translation Quick Reference Guide

## Using Translations in Your Code

### Import the Hook
```tsx
import { useLanguage } from "../context/LanguageContext"
```

### Access Translations in Component
```tsx
function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return <h1>{t('hero.title')}</h1>
}
```

## Available Translation Keys

### Navbar (`navbar.*`)
- `navbar.login` - Login button
- `navbar.register` - Register button
- `navbar.search` - Search link
- `navbar.myBookings` - My Bookings link
- `navbar.dashboard` - Dashboard link
- `navbar.createProfile` - Create Profile link
- `navbar.admin` - Admin link
- `navbar.logout` - Logout button

### Landing Page (`landing.*`)
- `landing.services` - Services link
- `landing.contact` - Contact link

### Hero Section (`hero.*`)
- `hero.trustedBadge` - Trust badge text
- `hero.titlePart1` - Title first part
- `hero.titlePart2` - Title highlight part
- `hero.subtitle` - Subtitle text
- `hero.stat1Label` - Professionals stat label
- `hero.stat2Label` - Rating stat label
- `hero.stat3Label` - Guarantee stat label
- `hero.btnGetStarted` - Get Started button
- `hero.btnBecomeProvider` - Become Provider button

### How It Works (`howItWorks.*`)
- `howItWorks.badge` - Section badge
- `howItWorks.title` - Section title
- `howItWorks.subtitle` - Section subtitle
- `howItWorks.step1Title` through `howItWorks.step4Title` - Step titles
- `howItWorks.step1Description` through `howItWorks.step4Description` - Step descriptions
- `howItWorks.step1Detail` through `howItWorks.step4Detail` - Step details
- `howItWorks.progressStep1` through `howItWorks.progressStep4` - Progress labels
- `howItWorks.footer` - Footer text

### Features (`features.*`)
- `features.title` - Features title
- `features.feature1` through `features.feature4` - Feature items

### Login (`login.*`)
- `login.title` - Page title
- `login.subtitle` - Page subtitle
- `login.email` - Email label
- `login.emailPlaceholder` - Email placeholder
- `login.password` - Password label
- `login.passwordPlaceholder` - Password placeholder
- `login.signIn` - Sign In button
- `login.signingIn` - Loading state text
- `login.noAccount` - Account prompt
- `login.createOne` - Create account link
- `login.benefitsTitle` - Benefits section title
- `login.benefit1` through `login.benefit4` - Benefit items
- `login.error` - Error message

### Register (`register.*`)
- `register.title` - Page title
- `register.subtitle` - Page subtitle
- `register.customerRole` - Customer role label
- `register.providerRole` - Provider role label
- `register.fullName` - Full name label
- `register.fullNamePlaceholder` - Full name placeholder
- `register.email` - Email label
- `register.emailPlaceholder` - Email placeholder
- `register.password` - Password label
- `register.passwordPlaceholder` - Password placeholder
- `register.create` - Create button
- `register.creating` - Loading state text
- `register.haveAccount` - Account prompt
- `register.signIn` - Sign in link
- `register.fillAllFields` - Validation message
- `register.benefitsTitle` - Benefits for customers
- `register.benefitsTitle2` - Benefits for providers
- `register.benefitCust1` through `register.benefitCust4` - Customer benefits
- `register.benefitProv1` through `register.benefitProv4` - Provider benefits
- `register.error` - Error message

### Footer (`footer.*`)
- `footer.copyright` - Copyright text

## Adding New Translations

### Step 1: Add to All Languages in `src/i18n/translations.ts`
```ts
export const translations = {
  en: {
    mySection: {
      myKey: "My English Text"
    }
  },
  hi: {
    mySection: {
      myKey: "मेरा हिंदी पाठ"
    }
  },
  // ... other languages
}
```

### Step 2: Use in Component
```tsx
const { t } = useLanguage()
<p>{t('mySection.myKey')}</p>
```

## Language Codes

| Code | Language  | Flag |
|------|-----------|------|
| en   | English   | 🇬🇧 |
| hi   | Hindi     | 🇮🇳 |
| mr   | Marathi   | 🇮🇳 |
| bn   | Bengali   | 🇮🇳 |
| ta   | Tamil     | 🇮🇳 |
| te   | Telugu    | 🇮🇳 |
| kn   | Kannada   | 🇮🇳 |

## Getting Current Language

```tsx
const { language } = useLanguage()
// Returns: 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'kn'
```

## Changing Language Programmatically

```tsx
const { setLanguage } = useLanguage()

// Change to Hindi
setLanguage('hi')

// Change to Marathi
setLanguage('mr')
```

## localStorage Details

- **Key**: `'language'`
- **Saved on**: Language change
- **Read on**: App initialization
- **Default**: `'en'` if not set
- **Persists**: Yes, across page reloads
- **Cleared on**: Manual localStorage.clear() only

## Translation File Structure

```
src/i18n/
└── translations.ts
    └── translations {language}
        ├── navbar
        ├── landing
        ├── hero
        ├── howItWorks
        ├── features
        ├── login
        ├── register
        └── footer
```

## Common Patterns

### Conditional Translation (based on user role)
```tsx
const { t } = useLanguage()

<h3>
  {role === "customer" ? t('register.benefitsTitle') : t('register.benefitsTitle2')}
</h3>
```

### Dynamic Keys
```tsx
const { t } = useLanguage()
const stepNumber = 1

// Direct key access
const title = t(`howItWorks.step${stepNumber}Title`)
```

### Chained Translation Access
```tsx
const { t } = useLanguage()

// Get nested translation
const feature = t('features.feature1')
```

## Error Handling

If a translation key doesn't exist:
1. Falls back to English translation
2. If English also missing, returns the key itself
3. No runtime errors thrown

```tsx
t('nonexistent.key') // Returns: 'nonexistent.key'
```

## Performance Tips

- Hook is memoized - no unnecessary re-renders
- Translations loaded once on app start
- All strings are strings - no complex parsing needed
- localStorage reads are synchronous and fast

## Mobile Considerations

- Language names shown in dropdown
- Abbreviated on mobile (shows 🌐 icon only)
- Full menu still accessible
- Touch-friendly with larger click targets

## Testing Translations

```tsx
// Test all languages in your component
const languages = ['en', 'hi', 'mr', 'bn', 'ta', 'te', 'kn']

languages.forEach(lang => {
  // Test component with each language
})
```

## Common Issues & Solutions

### Translation not showing
- Check the key path is correct
- Verify translation exists in all language objects
- Check component has `useLanguage()` hook imported

### Language not persisting
- Check if localStorage is enabled
- Verify browser doesn't have private mode active
- Check DevTools → Application → Storage

### Wrong language displayed
- Clear browser localStorage
- Force refresh page (Ctrl+Shift+R)
- Check localStorage value: `localStorage.getItem('language')`
