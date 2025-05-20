### STAR: Problem Solving – Supabase Portfolio Production Bug

**Situation:**  
I was finishing up my React + TypeScript portfolio site which used Supabase as a backend for project data. It worked locally, but after deploying to Azure, key sections would return “Loading...” or failed to fetch.

**Task:**  
The goal was to make the project load dynamically in production while eliminating the fallback static data source.

**Action:**  
I narrowed it down to missing environment variables and incorrect API key handling in the Vite + Azure config. I added explicit runtime checks, validated the key using Supabase’s docs, and rebuilt with updated env variables injected correctly into the deployment process.

**Result:**  
The site now loads content live from Supabase in production. I removed all hardcoded fallback files, reduced load time, and resolved a bug that would’ve silently failed in real user sessions.
