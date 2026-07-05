# Staging setup notes

This copy was prepared to avoid touching the original production project.

## Safety changes already applied

- `jcm_saas_config.js` was cleared so the app starts in local mono-clinic mode.
- `mfa` was disabled in the cleared Firebase config.
- `JCSAAS_HOSTS` was emptied so no production clinic is selected by hostname.
- `vercel.json` no longer redirects to `medique.cl`, `portal.medique.cl`, `admin.medique.cl`, or `jcmedical.cl`.
- `.gitignore` now excludes `.vercel/`, `.env*`, `.impeccable/`, service accounts, private keys, and credential files.
- `.env.example` lists the server-side variables detected in `api/` and `scripts/`.

## Before connecting GitHub / Vercel

1. Keep the new repository separate from the original repo.
2. Do not copy `.vercel/` from any production checkout.
3. Create a separate Firebase project before enabling SaaS mode again.
4. Add real environment variables only in Vercel project settings, never in Git.
5. Review `vercel.json` again when a real staging or client domain is chosen.

## Local build

Install dependencies, then run:

```bash
npm run build
```

The build compiles `jc-admin/*.jsx` and `jc-proto/*.jsx` into `dist/*.js`.
