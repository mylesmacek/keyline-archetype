# Integrations — GitHub, Vercel, Claude, Gemini

This project is a static site. AI keys are stored for **future serverless features** (contact forms, content tools) and for **local/scripts** — they are not exposed to the browser.

## GitHub

Remote: **https://github.com/mylesmacek/keyline-archetype**

```bash
git remote -v
git push origin main
```

## Vercel

- **Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard) → import or open the `keyline-archetype` project
- **CLI (already linked after setup):**

```bash
vercel              # preview deploy
vercel --prod       # production deploy
vercel env pull .env.local --yes
```

Git pushes to `main` trigger production deploys when the GitHub integration is connected (see below).

### Connect GitHub → Vercel (one-time)

1. Vercel project → **Settings** → **Git** → connect **mylesmacek/keyline-archetype**
2. Or CLI: `vercel git connect` (from repo root, follow prompts)

## Claude (Anthropic)

1. Create an API key: [console.anthropic.com](https://console.anthropic.com/settings/keys)
2. Add to Vercel (Production + Preview + Development):

```bash
vercel env add ANTHROPIC_API_KEY
```

3. Pull locally: `vercel env pull .env.local --yes`

## Gemini (Google)

1. Create an API key: [Google AI Studio](https://aistudio.google.com/apikey)
2. Add to Vercel:

```bash
vercel env add GOOGLE_GENERATIVE_AI_API_KEY
```

3. Pull locally as above.

## Optional: Vercel AI Gateway

For a single API surface across Claude, Gemini, and other models, use [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) with OIDC on deploy (`vercel env pull` includes gateway auth when enabled on the team).

## Security

- Never commit `.env.local` or real keys.
- Do not prefix secrets with `NEXT_PUBLIC_` (this site has no public env vars).
- Rotate keys in the provider console if they are ever exposed.
