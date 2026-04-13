# MoctarDatt.com — AI Deployment Strategy, West Africa

Personal site and consulting platform for **Moctar Datt** — AI deployment strategist specializing in West African markets.

---

## What This Site Is

MoctarDatt.com is the public home of Moctar Datt's West Africa AI adaptation work. It serves three functions simultaneously:

1. **A framework library** — sixteen market-specific AI adaptation frameworks covering every country in West Africa, each a systematic diagnostic tool for product teams building AI products for the region
2. **A consulting practice** — three service offerings (Adaptation Audit, Build Review, Advisory) for AI companies entering or already operating in West African markets
3. **A writing platform** — public intellectual work on AI deployment, digital inclusion, and the structural conditions that determine whether AI products succeed or fail in underserved markets

---

## The Core Problem Moctar Solves

Most AI products built for West Africa are built for a West Africa that does not exist.

The product team sees an English-speaking country and assumes NLP is solved. They see WAEMU membership and paste in a Senegal payment architecture. They see a $400B GDP and treat Nigeria as a single deployment target. They see French as an official language and conclude localization is a translation job.

Each of these assumptions produces a product failure at a different layer:

- The English-speaking country is Liberia, where the actual lingua franca is Liberian Vernacular English — a creole that Standard English NLP models misread silently and confidently
- The WAEMU member is Guinea-Bissau, at the frontier tier with four authorized PI-SPI institutions and a narco-state AML/CFT legacy that makes correspondent banking complicated
- The $400B GDP is Nigeria, where the north-south literacy gap is 89 percentage points and "national reach" requires entirely different architectures for Lagos and Zamfara
- The French-official market is Benin, where daily life runs in Fon, Vodoun is a legally recognized governance institution, and the transit economy through Cotonou port is larger than the formal GDP suggests

The frameworks exist to make these gaps visible before products ship, not after.

---

## The Sixteen Frameworks

Each framework is named for a concept from the country's dominant culture — a deliberate choice. A product that does not know what the name means does not know where it is operating.

| Framework | Country | Named For |
|---|---|---|
| **TERANGA** | Senegal | Wolof ethic of unconditional hospitality |
| **NAIJA** | Nigeria | Pan-ethnic self-designation cutting across Hausa, Yoruba, and Igbo |
| **AKWAABA** | Ghana | Akan/Twi word for welcome, posted at Kotoka International Airport |
| **AKWABA** | Côte d'Ivoire | Same root as Akwaaba; distinct deployment environment |
| **NAAM** | Burkina Faso | Mooré: the sacred authority embedded in the Mossi chiefly system |
| **AZIZA** | Benin | Fon: the luminous forest spirits who share knowledge with travelers |
| **LAFIYA** | Niger | Hausa: holistic wellbeing, peace — "lafiya lau" means complete peace |
| **DJOLIBA** | Guinea | Manding name for the Niger River, whose headwaters rise in Guinea |
| **ATTAYA** | Mauritania | The three-glass tea ceremony; refusing the tea is refusing the relationship |
| **KEKELI** | Togo | Ewe: light, dawn — "é kekeli," the day has come |
| **KUSHE** | Sierra Leone | Krio: the universal Sierra Leonean greeting across all ethnic groups |
| **ZOE** | Liberia | Kpelle/Bassa: initiated members of Poro and Sande — those who know |
| **JAMMA** | Gambia | Mandinka: peace, wellbeing — "jamma dorong," peace only |
| **GEBA** | Guinea-Bissau | The river that runs through the heart of the country to the Bijagós estuary |
| **SODADE** | Cape Verde | Kriolu: the longing for those who have left, across oceans |
| **TERANGA** | Mali | Same root; structurally different deployment environment from Senegal |

---

## Framework Architecture

Every framework applies the same six dimensions systematically. The output is always a diagnostic matrix (evidence) followed by a strategic deployment brief (argument). They are never collapsed.

### The Six Dimensions

**1. Linguistic Architecture**
Which languages, at what NLP tier, with which datasets. This dimension names the gap between official language (what the government uses) and vernacular language (what people actually speak). The Portuguese Trap in Guinea-Bissau. The English Trap in Sierra Leone and Liberia. The Bambara 46.76% WER problem in Mali. The Hassaniya void in Mauritania. Each is documented with the specific failure mode it produces in production.

**2. Interface and Interaction Model**
Text-first or voice-first, and for which users. The literacy calibration table — regional breakdown of who can and cannot navigate a text-based interface — is mandatory for every audit. A product designed for Dakar cannot claim national reach in Senegal without specifying what the 72% illiteracy rate in Matam means for its onboarding flow.

**3. Infrastructure and Technical Architecture**
4G coverage, device RAM, electricity access, road conditions, ferry schedules. Not as background context — as active design constraints. Niger's 19% electricity access is a design brief. Cape Verde's inter-island ferry dependency is a sync architecture requirement. Mauritania's 45–50°C ambient temperatures are a device thermal management specification.

**4. Financial Integration**
Which payment rail, in which market, with which compliance requirements and idempotency architecture. Wave in Senegal. MTN MoMo + GhIPSS in Ghana. Orange Money USSD in Niger. Afrimoney (Africell) in Sierra Leone. Vinti4 + dual LRD/USD in Liberia. Each market's financial integration requirements are structurally distinct and cannot be copied between frameworks.

**5. Regulatory and Data Sovereignty**
CDP in Senegal. DPC in Ghana. NDPC/NDPA 2023 in Nigeria. IPDCP (active since March 2025) in Togo. No comprehensive DPA in Liberia. CNPD in Cape Verde with GDPR diaspora intersection. Every framework maps the specific regulatory body, the specific rule, and the specific compliance action required — with honest assessment of enforcement maturity.

**6. Cultural and Social Architecture**
Who needs to say yes before a product can scale. Sufi brotherhoods in Senegal. Chieftaincy + Pentecostal megachurches + Susu groups in Ghana. Vodoun community leaders as the third gatekeeper in Benin. Poro and Sande secret societies as the primary governance institution in Sierra Leone and Liberia's interior. Mossi Naam system and griots in Burkina Faso and Mali. The cashew aggregator network in Guinea-Bissau. Each framework names the specific gatekeeper, the specific endorsement process, and what bypassing it actually costs.

### Framework Commands

Each framework is structured as a command system. Invoking a command produces a specific type of output:

```
[framework] [product]        — Full adaptation audit + strategic deployment brief
lingua [product]              — Language and NLP strategy
rails [product]               — Mobile money integration plan
voice [product]               — Voice-first UX adaptation
comply [product]              — Regulatory roadmap
culture [product]             — Social and cultural adaptation brief
roadmap [product]             — Phased implementation plan
data [product]                — Data source intelligence brief
```

Several frameworks include commands that do not exist in others because the market requires them:

- **NAAM** has a `conflict` command — Burkina Faso has active conflict in six of thirteen regions and two million internally displaced people; no other framework needs this
- **KEKELI** has a `divide` command and a `novissi` command — Togo's north-south linguistic-political divide and its government's demonstrated AI capacity (Novissi reached 920,000 people in ten days) require dedicated diagnostics
- **PALAVA** (Liberia) has a `kolokwa` command, a `monrovia` command, and an `afford` command — Liberian Vernacular English NLP, the concentration of digital infrastructure in Monrovia, and data affordability as an acute access barrier each deserve their own treatment
- **SODADE** (Cape Verde) includes diaspora corridor design, island-by-island connectivity mapping, and tourism overlay as primary design requirements unique in the suite

### Evidence Labels

Every claim in every framework is labeled:

- **[Observed]** — directly verifiable from public sources
- **[Inferred]** — logical deduction from observable signals
- **[Unverifiable]** — requires fieldwork; flagged for investigation
- **[Not Applicable]** — dimension does not apply; reason stated

Missing data is never left blank. The framework documents the attempt: what was searched, what was found, and the specific action that would close the gap.

---

## The Structural Failure Modes Each Framework Addresses

The frameworks are organized around failure modes, not market opportunities. Each names the specific wrong assumption that produces product failure in its market.

| Framework | Primary Failure Mode | What It Looks Like |
|---|---|---|
| TERANGA (Senegal) | The Usage Gap | 97% 4G coverage, 43% actual mobile internet use — coverage is not access |
| NAIJA (Nigeria) | The North-South Fracture | 96% literacy in Imo, 7% in Yobe — "Nigeria" is not a single interface target |
| AKWAABA (Ghana) | The English Trap | Standard English NLP fails on Ghanaian accent; dumsor breaks untested session management |
| NAAM (Burkina Faso) | The Coverage Fiction | 22% internet penetration, 70%+ illiteracy, active conflict — the infrastructure numbers describe a country that doesn't exist for most users |
| AZIZA (Benin) | The French Trap + Vodoun Blindspot | Fon is the urban vernacular; Vodoun is a governing institution, not a cultural footnote |
| LAFIYA (Niger) | The App-First Assumption | 19% electricity, USSD-only viable outside Niamey, feature phones are not legacy |
| DJOLIBA (Guinea) | The Susu Void | Susu has zero NLP resources; Conakry's actual lingua franca is invisible to any deployed model |
| ATTAYA (Mauritania) | The MSA Substitution | Hassaniya Arabic ≠ Modern Standard Arabic; MSA NLP fails on Mauritania's majority language |
| KEKELI (Togo) | The Headline Gap | 37% internet penetration headline obscures 40% of devices being 2G-only |
| KUSHE (Sierra Leone) | The English Adjacency Trap | Krio looks like English until it doesn't; Standard English NLP produces confident, wrong outputs |
| ZOE (Liberia) | The English Assumption | Liberian Vernacular English is a distinct creole; tested only with Monrovia elite, deployed to everyone |
| JAMMA (Gambia) | The TERANGA Portability Error | Wolof NLP from Senegal serves 16% of Gambians; Mandinka (42%) has near-zero resources |
| GEBA (Guinea-Bissau) | The Portuguese Trap | Portuguese NLP reaches the literate minority; Kriol is the actual national language |
| SODADE (Cape Verde) | The Portuguese Adjacency Trap | Same mechanism as Sierra Leone's English Trap, applied to Kriolu |
| TERANGA (Mali) | The Senegal Copy Error | Wave doesn't dominate; Bambara WER is 46.76%; N'Ko script exists; ECOWAS withdrawal disrupts assumptions |

---

## Consulting Services

Three ways to engage:

### Adaptation Audit
Full six-dimension diagnostic against one market framework. Produces a findings matrix and a strategic deployment brief.

For AI companies evaluating whether their product can survive a specific market before they build anything — or before they discover in production that their Portuguese NLP pipeline reaches 20% of their intended users.

### Build Review
Technical review of an in-progress deployment against the relevant market framework. Identifies the gaps before they become production incidents: the wrong payment rail, the missing NLP layer, the unregistered data pipeline, the interface that excludes 60% of the target region.

### Advisory
Ongoing engagement for teams building in West Africa over a sustained period. Access to the frameworks as they develop, direct input on architecture decisions, standing relationship with someone who has mapped these conditions systematically.

---

## Technical Stack

The site is built on Next.js 15 App Router with TypeScript and React 19.

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Database | Neon serverless PostgreSQL |
| Auth | HMAC SHA-256 session cookie |
| Rich text | Tiptap |
| Visualizations | D3.js v7 |
| Image uploads | Vercel Blob |
| AI rewriter | Anthropic API (claude-haiku-4-5) |
| Analytics | @vercel/analytics |
| Dark mode | next-themes |

### Color Palette — Pan-African Tricolor

The design system uses a Pan-African tricolor: teranga green (`#006030`), republic red (`#A81520`), star gold (`#FDEF42`), on white.

| Token | Hex | Role |
|---|---|---|
| `--p1` | `#000000` | Primary text |
| `--p2` | `#006030` | Primary accent (teranga green) |
| `--p3` | `#A81520` | Danger/emphasis (republic red) |
| `--p4` | `#FDEF42` | Highlight backgrounds only (star gold — never text on this) |
| `--p5` | `#333333` | Secondary text |
| `--p6` | `#727272` | Muted text |
| `--p7` | `#EBEBEB` | Borders, subtle backgrounds |

### Tools and Artifacts System

Two kinds of tools exist on the site:

1. **Filesystem artifacts** — `.html` files dropped into `public/artifacts/` appear on `/tools` automatically via `lib/html-meta.ts:scanHtmlDir()`
2. **Link tools** — DB rows in the `tools` table managed via the admin dashboard

The frameworks themselves are deployed as HTML artifacts and as Claude system prompts, accessible through the `/tools` interface.

### Admin System

- Login: `/admin/login` (HMAC SHA-256 session, 7-day cookie)
- Dashboard: `/admin/dashboard` — Blog · Tools · Substack · Rewriter
- AI Rewriter: Anthropic API for post reformatting via `claude-haiku-4-5`

---

## Environment Variables

```bash
DATABASE_URL=            # Neon PostgreSQL connection string (pooled)
ADMIN_PASSWORD=          # Hashed at runtime with HMAC SHA-256
ANTHROPIC_API_KEY=       # Admin dashboard rewriter
BLOB_READ_WRITE_TOKEN=   # Vercel Blob for image uploads
NEXT_PUBLIC_SITE_URL=    # https://moctardatt.com
NEXT_PUBLIC_GA_ID=       # Optional Google Analytics
```

Create `.env.local` for local development. All four core variables are required for full functionality; the site builds and renders without them but DB reads will 500 and admin login will fail.

---

## Database Schema

Schema file: `schema.sql` — paste into the Neon SQL editor to initialize.

| Table | Purpose |
|---|---|
| `blog_posts` | Blog content managed via admin CMS |
| `tools` | DB-backed link tools (filesystem artifacts are separate) |
| `substack_sections` | Newsletter section categories |
| `substack_articles` | Articles imported via Substack ZIP export |
| `publication_personas` | AI rewriter personas |

Key conventions:
- Raw SQL via Neon serverless driver — no ORM, no migrations library
- `TEXT[]` for tags everywhere; filter with `= ANY(tags)`
- Slug uniqueness enforced at the DB level; collisions return 409
- All admin API routes call `isAdmin(request)` before any DB work

---

## What the Frameworks Are Not

The frameworks are not market opportunity reports. They are not investment theses. They are not generic "emerging markets" playbooks.

They are failure prevention tools. The analytical posture throughout is: *what will break, why will it break, and what specific action prevents it?* Every recommendation traces to a matrix cell. Every matrix cell is labeled with its epistemic status. No claim is made that cannot be verified, inferred, or flagged for field investigation.

The one sentence that appears at the top of the site — *"Most AI products built for West Africa are built for a West Africa that doesn't exist"* — is the thesis the frameworks exist to disprove, one market at a time.

---

## Built By

[Bear Brown, LLC](https://bearbrown.co) in collaboration with [Irreducibly Human](https://irreducibly.xyz)
