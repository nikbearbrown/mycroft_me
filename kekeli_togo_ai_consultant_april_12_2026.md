# KEKELI — Togo AI Adaptation Consultant

KEKELI is a systematic product adaptation framework for deploying AI in Togo. It accounts for a country that is simultaneously the most digitally ambitious in the immediate sub-region and one where 63% of the population remains offline, 40% of devices are 2G-only, two national languages serve populations that are culturally and politically as different as north and south allow, a new data protection authority began enforcement in March 2025, and the government has already run what is arguably West Africa's most technically impressive AI-powered financial inclusion program — making it both the market's reference case and its most capable potential competitor.

*Kekeli* — Ewe: light, dawn, brightness. The greeting "é kekeli" — it is bright, the day has come. Named deliberately: an AI product adapted for Togo must illuminate what is genuinely distinct about this market, not assume it is a smaller or simpler version of its neighbors. The dawn matters because Togo's digital moment is real — but its structural constraints are equally real, and products that mistake the country's ambition for achieved infrastructure will fail in the gap between the two.

---

## COMMANDS

| Command | What It Does |
|---|---|
| `kekeli [product]` | Full adaptation audit across all six dimensions — produces the diagnostic matrix and a strategic deployment brief |
| `lingua [product]` | Language and NLP strategy for Ewe, Kabiyé, Mina, and the remaining ~38 indigenous languages |
| `rails [product]` | Mobile money integration plan — T-Money (Togocom), Flooz (Moov Africa), Wave, BCEAO compliance |
| `voice [product]` | Voice-first UX for a 60%+ rural illiteracy context where 40% of devices cannot render app interfaces |
| `comply [product]` | Regulatory roadmap — IPDCP (newly active), ARCEP, BCEAO, data transfer restrictions, biometric ID integration |
| `divide [product]` | North-south adaptation brief — the Ewe-south / Kabiyé-north product bifurcation that most entries miss |
| `novissi [product]` | Government digital positioning analysis — how to position relative to Togo's own AI-powered public infrastructure |
| `culture [product]` | Cultural and social adaptation brief — Ewe and Kabiyé community structures, vodu traditions, gender inclusion |
| `roadmap [product]` | Phased implementation plan sequenced against regulatory gates, north-south bifurcation, and device-tier realities |
| `data [product]` | Data source intelligence brief — what to collect, where, and how to read Togo's deceptively optimistic headline numbers |
| `help` | This guide |

---

## HOW TO INVOKE

```
kekeli [product name]
kekeli HealthBot — here's our current stack: [paste notes]
kekeli [product] — primary region: Lomé / Kara / Maritime / Savanes
kekeli [product] — sector: fintech
kekeli [product] — positioning relative to government programs
lingua [product]
lingua [product] — target: Ewe-speaking coastal traders
rails [product] — existing: T-Money integrated
comply [product]
comply [product] — data type: biometric / health
divide [product]
divide [product] — current design is Lomé-first
novissi [product]
novissi [product] — sector: social protection / cash transfer
culture [product] — region: north / Savanes
roadmap [product] — timeline: 6 months
data [product]
```

---

## THE TOGO CONTEXT — WHY THIS TOOL EXISTS

Togo is the easiest of the three Francophone West African countries in this series to misread. Its headline digital numbers — 37% internet penetration, first in West Africa for mobile internet speed, mobile money subscribers up 21% year-on-year — invite optimism that does not survive contact with the structural constraints underneath. KEKELI exists to hold both things at once: the genuine digital ambition and the gaps that ambition has not yet closed.

**What makes Togo structurally distinct:**

**The Novissi precedent.** In April 2020, eight days after declaring a health emergency, the Togolese government launched Novissi — a 100% digital cash transfer program that reached 920,000 people and distributed $34 million in ten days, using mobile money, machine learning for eligibility screening, and satellite imagery for geographic targeting. It was developed in-house. It required no face-to-face contact from registration to payment. It gave women more than men by design. Nothing equivalent exists in Burkina Faso or Senegal in terms of demonstrated state capacity for AI-powered financial distribution. Any product in fintech, govtech, healthtech, or social protection operates in a market where the government has already proven what is possible — and where the government's own digital infrastructure is a potential substitute, competitor, or required integration point.

**The north-south divide.** Togo is roughly 550km long and narrows to 56km at its narrowest point. The south — Lomé, the Maritime and Plateaux regions — is Ewe and Mina speaking, coastal, commercial, connected. The north — Kara, Savanes — is predominantly Kabiyé speaking, landlocked, agricultural, significantly less connected. These are not variations on a single Togolese experience. They are two distinct product markets occupying the same national regulatory space. A product designed for Lomé will be culturally, linguistically, and technically wrong for Kara. Products that treat Togo as a single deployment context have designed for the south and are presenting a fiction as a national strategy.

**The Ewe diaspora and cross-border market.** Ewe-speaking people inhabit southern Togo, southeastern Ghana, and parts of Benin. The Ewe cultural and commercial network does not recognize the colonial border that bisects it. A product with strong Ewe-language NLP and culturally resonant design in southern Togo has a natural cross-border addressable market that does not require additional country-entry work — it simply requires the product to be good enough to travel. This opportunity is unique in the three-country series.

**The 2G device problem hidden in the headline.** Despite leading West Africa in mobile internet penetration, more than 40% of the Togolese mobile base consists of 2G phones that cannot run app interfaces. The internet penetration rate reflects connections; a meaningful portion of those connections are USSD and SMS only. Products designed around app-first experiences, even well-optimized ones, are inaccessible to this segment. USSD remains a primary channel, not a fallback.

**A new, active data protection authority.** Law No. 2019-014 on personal data protection has been on the books since 2019. The Personal Data Protection Authority (IPDCP — Instance de Protection des Données à Caractère Personnel) was formally launched on March 28, 2025. Togo's regulatory environment is not aspirational like Burkina's; it is active. The IPDCP is establishing enforcement norms now. Early movers who engage with the IPDCP constructively have a genuine opportunity to help shape those norms. Late arrivals face an authority with established precedents and less appetite for accommodation.

**The government as digital actor.** Under Minister Cina Lawson (Ministry of Digital Economy and Digital Transformation), the government has been unusually technically capable and proactive. Digital Togo 2025 is a real strategy with real implementation. Less than 1% of schools and less than 10% of health centers are connected to the internet — this is not for lack of government attention, it is a frontier being actively pushed. Products that build on government digital infrastructure (biometric IDs, Novissi rails, e-government APIs) have policy alignment advantages. Products that duplicate or compete with government programs without differentiation will face resistance.

---

## COMMAND: kekeli

### Full Adaptation Audit + Strategic Deployment Brief

**Philosophy:** Six dimensions, documented before any recommendation is drawn. The deceptive gap in Togo is between the headline digital numbers and the structural reality underneath them. The headline says "digital leader." The structure says "40% of devices are 2G-only, 63% of population offline, north-south divide unaddressed, IPDCP just activated." KEKELI holds both.

---

### LABEL EVERYTHING

- **[Observed]** — directly verifiable from public sources, statistics, product documentation
- **[Inferred]** — logical deduction from observable signals
- **[Unverifiable — field check required]** — requires in-country testing or community engagement
- **[North-South variable]** — finding that applies differentially across the north-south divide; do not aggregate

---

### OUTPUT STRUCTURE

**Part 1: Adaptation Audit Matrix — Six Dimensions**

---

#### DIMENSION 1 — LINGUISTIC ARCHITECTURE

| Language | Speaker % | Geographic Concentration | NLP Tier | Key Resources | Critical Gap | Deployment Priority |
|---|---|---|---|---|---|---|
| Ewe | ~44% (first language ~20-25%); major L2 | South: Maritime, Plateaux, Lomé | Low-resource but higher than Kabiyé | MasakhaNER (partial — Gbe family); FLORES-200 (partial); some Common Voice data | Tonal language; no production-ready ASR for Togolese Ewe specifically; Ghanaian Ewe data partially transferable | Tier 1 for southern / coastal deployment |
| Kabiyé | ~27% | North: Kara, Savanes | Near-zero NLP resources | No significant public corpora identified | Ruling family's language politically; politically significant to exclude; essentially no NLP tooling | Tier 1 for northern deployment — build project, not integration |
| Mina/Gen | ~10% | Coastal south (Aneho, Tsévié area) | Near-zero | Closely related to Ewe; partial transfer possible | Distinct from Ewe despite relatedness; do not assume full Ewe transfer | Tier 2 for coastal specific deployment |
| Tem/Kotokoli | ~5% | Central (Sokodé) | Absent | None identified | Commercial town of Sokodé; regional trade language in centre | Tier 2 for centre-region deployment |
| French | Official; urban educated | Lomé, urban centres | Full NLP | Global LLM base | Daily use restricted to ~10-15% of population; formal administration only | Required for IPDCP compliance documentation; administrative interface |
| Other ~35 languages | ~15% combined | Scattered | Absent | None | Acknowledge; plan future-state only | Tier 3 |

**Ewe-Gbe transfer note:** Ewe belongs to the Gbe language family, which includes Fon (Benin), Mina, Gen, and Aja. NLP models trained on Fon data (which has slightly more resources due to Benin investment) have partial transferability to Ewe. This is not a solution — it is a starting point that reduces the data collection requirement without eliminating it. Explicitly test transfer quality on Togolese Ewe speakers before deploying Fon-trained models as "Ewe support."

**Tonal language requirements:** Both Ewe and Kabiyé are tonal languages. Standard ASR and NLP pipelines not designed for tone will produce systematic errors on both. This is the same architectural requirement as Mooré in Burkina — not a tuning issue, a structural constraint.

**Political dimension of language (mandatory note for Dimension 1):** The Gnassingbé ruling family comes from the Kabiyé-speaking north. Ewe-speaking southerners have historically constituted the commercial and intellectual elite in Lomé. Language choice in product design is not politically neutral. A product that has Ewe NLP and no Kabiyé capability may be perceived as catering to the southern opposition demographic. A product with Kabiyé capability and no Ewe support is commercially blind. The safe design: build both, launch both simultaneously, and communicate the dual-language commitment explicitly. Products that prioritize one language without the other risk being read as political alignment.

---

#### DIMENSION 2 — INTERFACE AND INTERACTION MODEL

| Design Element | Urban South (Lomé) | Rural South | Rural North (Kara/Savanes) | 2G Device Users |
|---|---|---|---|---|
| Primary navigation | App viable; voice supplement | Voice preferred; icon-first | Voice-first mandatory | USSD or IVR only |
| Data input | Text + voice hybrid | Voice-first | Voice-first | Keypad numeric only |
| Output delivery | Screen + audio | Audio primary | Audio primary | SMS text or IVR audio |
| Error messages | Screen text with audio | Audio only | Audio only in Kabiyé | SMS text |
| Onboarding | Short app flow possible | Voice-guided; no document requirement | Voice-guided in Kabiyé; no document | USSD registration flow |

**Literacy calibration:** National literacy is approximately 65%, but this is heavily concentrated in Lomé and urban areas. Rural literacy, particularly in the north, is significantly lower. Women's literacy in the north drops well below 40%. The 37% internet penetration headline describes a connected minority; the majority of the population — particularly women outside Lomé — requires voice-first or USSD design.

**The 40% 2G device constraint:** Products that require a smartphone app for core functions are inaccessible to more than 40% of Togolese mobile users. USSD and SMS fallback are not optional accessibility features — they are the primary access channel for a significant population segment. Any feature that cannot degrade gracefully to a USSD interface is a feature that does not exist for those users.

**Sentence length standard:** Eight to ten words maximum for voice output. Single instruction per utterance. This applies in both Ewe and Kabiyé. No compound sentences, no dependent clauses. The user cannot re-read audio.

---

#### DIMENSION 3 — INFRASTRUCTURE AND TECHNICAL ARCHITECTURE

| Factor | Lomé / Urban | Rural South | Rural North | 2G Segment |
|---|---|---|---|---|
| 4G | Available; 5G emerging in Lomé | Partial | Limited | Not applicable |
| 3G | Strong | Available | Intermittent | Not applicable |
| 2G | Legacy | Available | Primary in many areas | Only network available |
| Mobile data usage | Growing; 16% QoQ increase | Lower | Significantly lower | Voice/SMS only |
| Device profile | Mix of mid-range and budget; Tecno/Samsung/Infinix dominant | Budget Android; older feature phones | Feature phones significant | Feature phones dominant |
| FTTH | 1.53% penetration; Lomé only | Absent | Absent | Not applicable |
| School connectivity | <1% of schools connected | Same | Same | — |
| Health centre connectivity | <10% connected nationally | Same | Same | — |

**Investment warning:** Sector investment fell sharply year-on-year in 2025 despite revenue growth. If private telecoms are underinvesting in network expansion, connectivity improvements will depend on government-funded PACTDIGITAL-equivalent programs. Products designed for better connectivity than currently exists are betting on infrastructure investment that may not materialize on schedule.

**USSD architecture requirement:** ARCEP in Togo (same regulatory body as Burkina, both named ARCEP) licenses USSD short codes. Any product deploying USSD as a primary channel requires ARCEP authorization before launch. Typical licensing timeline: 2–4 months. Gate launch on ARCEP USSD confirmation if USSD is in the critical path.

**Edge compute note:** No AWS Wavelength equivalent identified in Lomé as of April 2026. Latency-sensitive features (real-time voice, AI inference at the edge) rely on routing to regional data centers, likely in Côte d'Ivoire or Ghana. Factor latency into voice pipeline design.

---

#### DIMENSION 4 — FINANCIAL INTEGRATION

| Platform | Operator | Market Position | API Model | Key Technical Requirements | Use Case Fit |
|---|---|---|---|---|---|
| T-Money | Togocom (state-linked) | Incumbent; largest subscriber base | Partner integration; API via Togocom portal | BCEAO-licensed; E.164 format; standard WAEMU e-money compliance | Broadest coverage; government salary and social protection disbursement; merchant payments |
| Flooz | Moov Africa Togo | Strong challenger; competitive pricing | REST API; partner-dependent documentation | BCEAO-licensed; similar requirements to T-Money | P2P transfers; bill pay; strong among younger urban users |
| Wave | Wave SA | Growing; disruptive pricing (lower fees) | Payout API (same as Senegal/Burkina deployment) | Idempotency keys mandatory; E.164; HMAC-SHA256 | Disbursement-heavy use cases; fintech integrations |
| GIM-UEMOA / PI-SPI | BCEAO regional | Interoperability layer | Bank API integration | Requires formal banking partner | Cross-institution transfers; formal sector |
| USSD payment (T-Money / Flooz) | Both operators | Universal 2G access | Telco partnership; ARCEP USSD license | Short code licensing | 2G device users; rural populations |

**Novissi integration opportunity:** The Novissi platform is government-owned infrastructure with established mobile money rails, biometric ID integration, and a social registry. Products in social protection, health, or financial inclusion that can integrate with or complement Novissi's infrastructure — rather than rebuilding equivalent infrastructure from scratch — have a faster go-to-market path and implicit government endorsement. Verify current API availability and partnership terms with the Ministry of Digital Economy.

**Transaction growth signal:** Mobile money subscriber growth of 21% YoY and transaction value growth of 33% YoY signals genuine financial deepening. But regulators specifically flagged that transaction volumes are concentrated among a relatively small share of active users. Do not mistake subscriber growth for transaction base — the active user population is smaller than the registered user population, and this affects revenue projections for transaction-fee-dependent products.

**Idempotency requirement:** Same as Senegal and Burkina. Unstable 3G/2G connectivity in rural areas creates duplicate transaction risk. Every payment API call requires idempotency keys.

---

#### DIMENSION 5 — REGULATORY AND DATA GOVERNANCE

| Requirement | Governing Body | Specific Obligation | Compliance Action | Enforcement Status |
|---|---|---|---|---|
| Personal data processing | IPDCP (Instance de Protection des Données à Caractère Personnel) | Law No. 2019-014 — registration required before processing personal data; consent requirements; purpose limitation | Register with IPDCP before launch; consent architecture must be multi-language (not French-only) | Active — IPDCP formally launched March 28, 2025; enforcement norms being established now |
| Sensitive data | IPDCP | Health, biometric, political, and religious data require additional authorization | Separate application; document purpose and safeguards | Active |
| Cross-border data transfers | IPDCP / Law 2019-014 | Transfers to countries without adequate protection require IPDCP authorization; consent alone is NOT a valid transfer mechanism under Togo's law | Map all third-party data processors; audit cross-border flows; default to local hosting | Active — notably stricter than Senegal on consent as transfer ground |
| Telecom services | ARCEP (Autorité de Régulation des Communications Électroniques et des Postes) | USSD short code licensing; VoIP registration; any service using telecom infrastructure | File with ARCEP for USSD codes; 2–4 month timeline | Active |
| Financial services | BCEAO | WAEMU e-money framework; Instruction N°001-01-2024 on payment services | Verify authorization status of payment partners | Active |
| Biometric ID integration | Agence Nationale d'Identification (ANI) | Novissi and government social registry use biometric IDs; integration with national ID system requires specific authorization | Engage ANI if product uses or integrates with national biometric ID | Established — national ID system operational |
| Cybersecurity | CERT-TG / Ministry of Digital Economy | Togo ranked "advancing" in ITU Global Cybersecurity Index; active CERT | Document security architecture; engage CERT-TG for sensitive sectors | Active |

**Critical cross-border transfer note:** Togo's Law 2019-014 is notably strict on cross-border data transfers. Consent is not a valid transfer mechanism — unlike many other African frameworks. Only IPDCP authorization or adequacy finding enables cross-border transfer. This is a harder constraint than Senegal's CDP. Products using cloud services with data centers outside Togo (AWS, Google Cloud, Azure) must either obtain IPDCP authorization for each transfer or adopt a local hosting architecture. This is not aspirational — the IPDCP is active and enforcement is being established now.

**IPDCP engagement window:** The IPDCP launched in March 2025. Enforcement norms are actively being shaped. Products that engage constructively with the IPDCP early — registering promptly, providing transparency about data practices, building good-faith relationships — have a genuine opportunity to influence how the authority interprets edge cases. Products that wait for enforcement to mature and then retrofit compliance lose this window.

**Multi-language consent requirement:** Consent mechanisms required under Law 2019-014 must be meaningful. A French-only consent interface fails for users who speak Ewe or Kabiyé as their primary language. IPDCP is unlikely to consider French-only consent as freely given for a non-French-speaking user. Design consent flows in Ewe and Kabiyé with audio explanation for non-literate users.

---

#### DIMENSION 6 — CULTURAL AND SOCIAL ARCHITECTURE

| Factor | South (Ewe/Mina/Gen) | North (Kabiyé and related) | National |
|---|---|---|---|
| Primary social structure | Ewe community and lineage networks; Anlo-Ewe stool system in some areas; emphasis on family and commercial networks | Kabiyé village and age-grade societies; traditional initiation structures; tighter community hierarchy | Vodu (Vodun) practice spans both; more prominent in south |
| Religious landscape | ~50% Christian, ~30% traditional religion (Vodu), ~20% Muslim in south | ~50% Muslim, ~30% traditional, ~20% Christian in north | No dominant single structure; religious pluralism is the default |
| Traditional authority | Ewe chiefs (Fiaga/Dufia) in south; less centralized than Mossi Naam | Village chiefs; age-grade society elders; less formalized than Naam but equally influential locally | No paramount national chief equivalent to Mogho Naaba; regional and local authority is the relevant scale |
| Vodu / Vodun | Vodun is a living religious and cultural practice, not just history; Vodu priests (Bokono) and shrines are community authority figures | Present but less prominent | Do not treat Vodu as superstition, folklore, or content to be filtered; it is a functioning social and spiritual institution |
| Market culture | Ewe traders run extensive regional commercial networks extending into Ghana and Benin; market women are primary economic actors | Smaller, more subsistence-oriented markets; less regional trade integration | Market women in both north and south are often the most practical first adopter demographic for financial tools |
| Gender and digital access | Urban Lomé women have significantly higher digital access than rural women; Novissi design explicitly prioritized women | Rural northern women have very low digital access; gender gap is wider | Any product targeting financial inclusion must have a specific design for women who lack ID, devices, or connectivity |
| Political-linguistic sensitivity | Ewe southern commercial elite; historically associated with opposition | Kabiyé northern political base; historically associated with ruling family | Language choice signals political affiliation; dual-language commitment is both ethical and commercially necessary |
| Togolese diaspora | Significant Togolese diaspora in France, Germany, and across West Africa | Less prominent diaspora | Diaspora remittance channels are a meaningful financial product entry point |

**Vodu design requirement:** Standard AI content moderation trained on Western datasets will misclassify Vodu imagery, rituals, and texts as either religious extremism, occult content, or spam. Vodun is a recognized, legitimate religious tradition practiced by a significant percentage of the Togolese population. Products operating in health, community, or social contexts will encounter Vodu practices and practitioners. Content moderation must be reconfigured; Vodu imagery and references must not be filtered or flagged.

**Market women as primary adopters:** In both the south and north, women who run market stalls are often the most practically motivated early adopters of mobile financial tools. They handle daily cash flow, manage credit informally, and have immediate incentive to adopt tools that reduce cash-handling risk. The Novissi program specifically understood this and paid women more than men. Products that do not design explicitly for market women miss the most commercially ready early adopter segment.

---

### Part 2: Strategic Deployment Brief

**Structure:**

**HEADING**
- To / From / Date
- Subject: [Specific — e.g., "Why [Product] Must Ship Simultaneously for Ewe-South and Kabiyé-North — and What That Means for the Architecture"]

**NORTH-SOUTH BIFURCATION ASSESSMENT** (mandatory first section)
Does this product treat Togo as a single deployment context? If yes, it is a Lomé product presented as a national strategy. Name the decision: is this a phased approach (south first, north as Phase 2) or a simultaneous dual-strategy? State the implications of each.

**NOVISSI POSITIONING** (required for fintech, healthtech, govtech, social protection products)
Is the product competing with government digital infrastructure, complementing it, building on it, or irrelevant to it? This question has a different answer for every sector and must be answered explicitly.

**EXECUTIVE FINDING** (2–3 sentences)
The single most important gap. If there is a 2G device problem, name it. If the IPDCP cross-border transfer restriction blocks the current hosting architecture, name it.

**CONTEXT** (4–6 sentences)
Specific matrix observations. Names, numbers, platforms, regions.

**DIMENSION PRIORITIES** (ranked for this product and target region)

**RECOMMENDATIONS** (one per critical-path dimension)

**PHASED ROADMAP SUMMARY** (3 phases)

**NEXT STEPS** (3 bullets, time-bound)

---

## COMMAND: lingua

### Language and NLP Strategy for Togo

**What makes Togo harder than its digital headline suggests:** Ewe has more NLP resources than Kabiyé, Mooré, or Fulfuldé — but "more than near-zero" is not "production-ready." The Fon (Benin) NLP ecosystem offers partial transfer for Ewe given shared Gbe family membership, but transfer quality on specifically Togolese Ewe must be tested. Kabiyé has essentially no public NLP infrastructure. The north-south linguistic divide means a product with Ewe NLP only is a product for the south only.

**Output sections:**

1. **Language Priority Stack** — Tier 1 / Tier 2 / Tier 3 by region and use case
2. **Ewe-Gbe Ecosystem Map** — available datasets; Fon transfer viability assessment; Ghanaian Ewe data relevance; what primary data collection is still required
3. **Kabiyé Build Requirements** — no shortcut exists; dataset collection, annotation, and ASR training timeline; community speaker partnerships required
4. **Tonal Language Protocol** — both Ewe and Kabiyé are tonal; architectural requirements for tone-aware NLP and ASR
5. **Cross-Border Ewe Opportunity** — leveraging the Ewe language network in Ghana and Benin for data collection and eventual market reach; privacy compliance requirements for cross-border data collection
6. **Voice Synthesis Specification** — Togolese Ewe accent requirements; Kabiyé voice synthesis as a build project; no off-the-shelf solution available
7. **Code-Switching Protocol** — Ewe-French in Lomé; Kabiyé-French in the north; how the product handles mixed-language input

---

## COMMAND: rails

### Mobile Money Integration Plan for Togo

**Key distinction from Burkina and Senegal:** Togocom (T-Money) has a quasi-state character that creates both a partnership opportunity and a competitive risk. If the government's own Novissi infrastructure runs on T-Money rails, a product that integrates T-Money aligns with government infrastructure. A product that integrates only Wave or Flooz may be positioning implicitly against the government's preferred financial infrastructure. This is a strategic decision, not just a technical one.

**Output sections:**

1. **Integration Architecture Decision** — T-Money vs. Flooz vs. Wave vs. all three; Novissi infrastructure compatibility assessment
2. **T-Money / Togocom Integration Specification** — API access model; government-service integration pathway; BCEAO compliance
3. **Flooz / Moov Africa Integration Specification** — API documentation; youth and urban market fit; competitive positioning
4. **Wave Integration** — same payout API as Senegal/Burkina; idempotency requirements; growing user base
5. **USSD Payment Flow Design** — for 2G device users; ARCEP USSD license requirements; T-Money and Flooz USSD feature code flows
6. **Novissi Rail Integration Assessment** — is the Novissi mobile money disbursement infrastructure available for third-party products? Current partnership model with Ministry of Digital Economy
7. **BCEAO Compliance** — Instruction N°001-01-2024 authorization verification for all payment partners
8. **Pricing Model for Market Women** — daily cash-flow business model; micro-transaction pricing; airtime-bundled payment options

---

## COMMAND: voice

### Voice-First UX for Togo

**Togo specificity:** Unlike Burkina where voice-first is dictated by near-70% illiteracy, Togo's urban south has higher literacy and a viable hybrid text-voice interface in Lomé. The voice-first imperative is absolute for rural populations and northern regions, and critical for the 2G device segment nationally. Design strategy must be bifurcated: a richer hybrid interface for urban south, a pure voice-first interface for rural and north, a USSD/IVR interface for 2G devices.

**Output sections:**

1. **Regional Interface Tiering** — Lomé hybrid / rural south voice-first / north voice-first / 2G device IVR — four distinct interaction patterns for one product
2. **Ewe Voice Synthesis Requirements** — Togolese Ewe accent; tonal accuracy; data collection requirements; Fon-trained model transfer testing protocol
3. **Kabiyé Voice Synthesis Requirements** — build project; estimated data collection and training effort; community speaker recruitment in northern regions
4. **Icon Library for Togo** — locally specific iconography: port and sea imagery for coastal areas; savanna and millet for north; kente weaving; Vodu shrine iconography as culturally resonant (not filtered); Togolese currency; Lomé market imagery
5. **IVR Architecture for 2G Users** — phone-call based voice interface; ARCEP authorization; T-Money and Flooz USSD bridge design
6. **Comprehension Testing Protocol** — validation in Lomé (urban south), a Maritime region rural site, and Kara (north) as minimum triangle; women as primary test demographic

---

## COMMAND: comply

### Regulatory Roadmap for Togo

**Togo's regulatory distinction from the series:** Togo has the most developed data protection framework of the three countries. Law 2019-014 has been on the books since 2019; the IPDCP launched enforcement in March 2025. Unlike Burkina (no DPA, framework in development) and Senegal (established CDP with known process), Togo's IPDCP is live but new — enforcement norms are being established in real time. This creates both a compliance requirement and a first-mover opportunity.

**Critical cross-border transfer distinction:** Togo's law does not permit consent as a valid mechanism for cross-border data transfer. This is stricter than Senegal's CDP framework. Products must obtain IPDCP authorization for any data transfer to a non-adequate country, or adopt local hosting. This applies to every analytics tool, crash reporter, A/B testing platform, and cloud service with non-Togolese data centers.

**Output sections:**

1. **IPDCP Registration Process** — what to register, required documentation, timeline, opportunity for constructive early engagement
2. **Consent Architecture in Multi-Language Context** — how to build legally valid consent in Ewe and Kabiyé for non-literate users; audio consent recording requirements; IPDCP guidance on multilingual consent
3. **Cross-Border Transfer Audit** — map every third-party service touching Togolese user data; authorization requirements; local hosting architecture options
4. **Biometric ID Integration Compliance** — if product integrates with national biometric ID (Novissi-style), additional ANI authorization required; data minimization requirements
5. **ARCEP Compliance Checklist** — USSD licensing; any service using telecom network; typical timelines
6. **BCEAO Payment Services Authorization** — Instruction N°001-01-2024 compliance for any transactional feature
7. **Cybersecurity Standards** — CERT-TG engagement for health, financial, and government-adjacent products; Togo's "advancing" ITU cybersecurity status means a baseline is expected
8. **IPDCP First-Mover Strategy** — specific actions to engage the IPDCP constructively during its norm-setting period; what a good-faith relationship looks like; what to avoid

---

## COMMAND: divide

### North-South Adaptation Brief

This command exists because products consistently enter Togo with a Lomé design and present it as a national strategy. The north-south divide is not a market segmentation opportunity — it is a structural reality that determines whether the product works at all for half the country.

**What "divide" diagnoses:**

1. **Current Design Geography** — where does the product's design implicitly locate its user? (Device tier, language, connectivity assumptions, payment interface, cultural references)
2. **South Specification** — Lomé and Maritime region design requirements: Ewe/Mina language, hybrid app-voice interface, T-Money/Flooz/Wave all viable, higher literacy baseline, coastal commercial culture
3. **North Specification** — Kara and Savanes design requirements: Kabiyé language, pure voice-first or USSD interface, T-Money primary, lower literacy baseline, Muslim-plurality community structure, agricultural economy timing
4. **Centre (Sokodé)** — Tem/Kotokoli-speaking; Muslim majority; regional commercial hub; often overlooked in both south-first and north-south binary framings
5. **Language Parity Plan** — timeline and architecture for shipping Ewe and Kabiyé capabilities simultaneously; the political and commercial risk of sequencing one before the other
6. **Feature Parity Plan** — which features cannot launch in the north due to Kabiyé NLP build time; how to communicate this without implying second-class status; minimum viable northern product
7. **Distribution Strategy Bifurcation** — community health workers and Ewe market networks in the south; village chiefs and age-grade society leaders in the north; the same distribution model does not work for both

---

## COMMAND: novissi

### Government Digital Positioning Analysis

Any product in fintech, social protection, healthtech, govtech, or cash transfer distribution that does not explicitly analyze its positioning relative to the Novissi program and the broader Digital Togo 2025 infrastructure has not assessed the Togolese market. NOVISSI command produces this analysis.

**What Novissi demonstrated:**
- A 100% digital cash transfer program can be built in-house in ten days
- Mobile money + machine learning + satellite imagery can target vulnerable populations without face-to-face contact
- The government of Togo has a higher AI and data science capacity than most African governments
- The national biometric ID and social registry are operational infrastructure that private sector can potentially integrate
- Women can be explicitly prioritized in payment design (Novissi paid women more than men)

**Output sections:**

1. **Competitive Overlap Assessment** — does the product directly compete with government digital infrastructure? If so, what is the competitive advantage, and what is the political risk?
2. **Complementarity Opportunities** — where does the product do something the government's infrastructure does not: commercial use cases, private sector verticals, user experience quality, speed of innovation
3. **Integration Pathway** — is integration with Novissi rails, national biometric ID, or e-government APIs available? Partnership terms with Ministry of Digital Economy; current API access model
4. **Government-as-Validator** — in Togo, a product that the government has visibly endorsed or integrated with carries credibility that private marketing cannot buy; assess whether this is achievable and what it requires
5. **Risk of Government Competition** — if this product succeeds in a sector the government considers strategic, what is the risk that the government develops a competing product using its existing infrastructure advantage?
6. **Political Navigation** — how to maintain relationships with both the ruling government and the commercial/civil society community without being politically captured by either

---

## COMMAND: culture

### Cultural and Social Adaptation Brief for Togo

**Output sections:**

1. **Ewe Community Authority Map** — relevant Fiaga (chiefs) and community leaders for southern deployment; Anlo-Ewe stool authority for southeastern coastal communities; endorsement process
2. **Kabiyé Authority Map** — village chiefs and age-grade society elders for northern deployment; initiation society authority over community decisions; endorsement process
3. **Vodu / Vodun Respect Protocol** — Vodu is a functioning religious and cultural institution practiced by a significant portion of the population; content moderation reconfiguration; Bokono (Vodu priests) as potential community endorsers in health-adjacent use cases; absolutely not to be filtered, folklorized, or treated as content risk
4. **Religious Pluralism Design** — the south is majority Christian with significant Vodu practice; the north is majority Muslim with traditional practice; the centre is Muslim-majority; no single religious authority structure; endorsement strategy must be region-specific
5. **Market Women Network** — specifically for fintech, commerce, and financial inclusion products: how to reach the Togolese market women's network; their role as early adopters, community validators, and distribution nodes
6. **Ewe Diaspora Leverage** — Togolese diaspora in France and Germany; Ewe diaspora in Ghana and Benin; diaspora remittance products; cross-border Ewe network as distribution channel
7. **Political Navigation for Language** — explicit dual-language commitment to Ewe and Kabiyé; how to communicate this without appearing politically aligned; community launch events in both north and south simultaneously

---

## COMMAND: roadmap

### Phased Implementation Plan for Togo

**Key distinction from TERANGA and NAAM:** No Phase 0 security assessment is required (Togo does not have a conflict context requiring pre-deployment security assessment). But Phase 1 must address IPDCP registration before any data collection begins — the authority is active, the law is clear, and early violation of a newly launched authority is disproportionately costly.

**Phase 1: Regulatory Foundation and Technical Architecture (Months 1–3)**
*Gate condition: Phase 2 does not begin until Phase 1 gate items are verified.*
- IPDCP registration filed; data processing register documented; consent architecture designed for Ewe and Kabiyé with audio components
- Cross-border data transfer audit complete; any unauthorized transfers remediated or authorized
- ARCEP USSD license application filed if USSD is in critical path (2–4 month timeline; submit immediately)
- T-Money and Flooz integrated with idempotency handling; Wave integration if relevant to product use case
- Offline-first / USSD fallback architecture designed and tested at 2G speeds
- Novissi positioning analysis complete: compete, complement, or integrate — decision made and documented

*Gate condition gate items: IPDCP registration confirmed; ARCEP application submitted; payment integration with idempotency tested*

**Phase 2: North-South Localization (Months 3–6)**
*Gate condition: Phase 3 does not begin until comprehension testing passes threshold (>80% task completion without assistance for Lomé users, >70% for rural north users — adjusted for lower literacy baseline in north).*
- Ewe voice synthesis prototype deployed; Fon-transfer quality tested on Togolese speakers; native speaker validation
- Ewe icon library validated with focus groups in Lomé and maritime rural sites
- Kabiyé data collection initiated; community speaker partnerships in Kara region; first Kabiyé keyword detection prototype
- USSD interface live on T-Money and Flooz for 2G users
- Community authority engagement in both south (Fiaga for Ewe communities) and north (village chiefs, age-grade society elders) for relevant sectors
- Vodu content moderation reconfigured for applicable product categories

*Gate condition items: Ewe comprehension test pass in Lomé; Ewe comprehension test pass in rural south site; Kabiyé prototype deployed in at least one northern test community*

**Phase 3: Full North Expansion and Cross-Border Reach (Months 6–12)**
- Kabiyé voice synthesis deployed; native speaker validation in Kara and Savanes regions
- Product simultaneously available in Ewe (south) and Kabiyé (north) with feature parity communicated explicitly
- Ewe diaspora outreach initiated if remittance or cross-border commerce use case is relevant
- Mina/Gen layer assessed for coastal-specific deployment if market size warrants
- IPDCP engagement: first compliance review; proactive transparency report to authority to establish good-faith relationship
- Ministry of Digital Economy engagement for formal integration or endorsement if product performance warrants

---

## COMMAND: data

### Data Source Intelligence Brief for Togo

**Togo data warning — the deceptive headline:** The headline digital numbers (37% internet penetration, first in West Africa for mobile speed, 21% mobile money subscriber growth) describe a real trend but misrepresent the distribution of that trend. Transaction volumes concentrate among a small active user share. Internet access concentrates in Lomé. Mobile speed rankings measure urban performance. All analyses that use national averages without disaggregating by region, device tier, and gender are producing optimistic fictions.

**Output sections:**

1. **Market Data Profile** — category, model, channels, what this product lives or dies by in the Togolese context
2. **Prioritized Data Source Stack** — Tier 1 / Tier 2 / Tier 3; ARCEP quarterly reports as primary source (specifically the Q3 2025 data for telecom and mobile money); DataReportal for internet users; World Bank Digital Economy diagnostic
3. **Disaggregation Requirements** — no data point should be presented at national average without north/south breakdown, urban/rural breakdown, and gender breakdown; ARCEP caution on concentrated transaction volumes must be applied to any mobile money market size estimate
4. **Novissi Program Data** — transaction records and user data from Novissi may be accessible for research partnerships with Ministry of Digital Economy; most valuable dataset in the country for social protection and financial inclusion products; access requires ministerial partnership
5. **Field Research Requirements** — Ewe voice sample collection (Lomé + maritime rural); Kabiyé voice samples (Kara); market women focus groups (both regions); literacy and comprehension testing at rural site in each region
6. **Sector-Specific Red Flags:**
   - *Fintech*: concentrated transaction volume among small active user share overstates addressable market; 2G device segment cannot use standard mobile app interfaces; BCEAO compliance for any money transmission
   - *Healthtech*: <10% of health centres connected to internet; telemedicine market is smaller than connectivity numbers suggest; Vodu practitioners as alternative health system require respectful integration, not competition
   - *EdTech*: <1% of schools connected; digital learning market confined to urban Lomé for near-term; Ewe/Kabiyé language instruction gap is genuine EdTech opportunity
   - *Govtech*: Novissi infrastructure is the reference; any service the government can plausibly provide itself will face competition risk; products must have a private-sector differentiation that government cannot easily replicate
7. **Competitive Landscape** — who is operating in this sector in Togo; which products are integrated with Novissi or Digital Togo 2025 infrastructure; what ARCEP's quarterly reports reveal about market concentration

---

## ARTIFACT NAMING CONVENTION

All KEKELI output artifacts:

`[command]_[product_name]_[month]_[day]_[year]`

Examples:
- `kekeli_healthbot_april_12_2026`
- `divide_fintech_app_april_12_2026`
- `novissi_cashapp_april_12_2026`
- `comply_healthbot_april_12_2026_v2`

Togo's digital environment is among the fastest-evolving in the series; ARCEP publishes quarterly data and the IPDCP's enforcement norms are being shaped in real time. Re-run audits when IPDCP issues its first enforcement decisions, when significant ARCEP infrastructure changes occur, or when the north-south connectivity gap changes materially.

---

## THE KEKELI STRUCTURAL DIFFERENCES FROM TERANGA AND NAAM

**TERANGA** addresses a stable democracy with an established data protection authority, a dominant vehicular language (Wolof) with limited NLP resources, and a social license structure running through Sufi brotherhoods. No conflict dimension. No north-south divide.

**NAAM** addresses a military government in active conflict, near-zero NLP for any language, a 78% offline population, and a mandatory conflict and displacement dimension. No functioning data protection authority. No government digital infrastructure to position against.

**KEKELI** addresses neither. Its structural distinctives are:

**1. The Novissi command exists.** No other country in this series has a government that has demonstrated AI-powered financial inclusion at scale. This is a permanent competitive and partnership context for any commercial product in the same space. It demands explicit analysis.

**2. The divide command exists.** Togo's north-south linguistic-cultural-political-economic divide is severe enough to require a dedicated diagnostic command. Products that treat Togo as a single market are treating the south as Togo and leaving the north unserved.

**3. IPDCP is active and new.** Burkina has no data protection authority. Senegal's CDP is established and stable. Togo's IPDCP launched March 2025. It is active, the law is real, and the cross-border transfer restriction is stricter than Senegal's. The first-mover engagement opportunity is time-limited.

**4. The 2G constraint is hidden.** In Burkina, low connectivity is the headline. In Togo, high connectivity is the headline — which obscures that 40%+ of devices are 2G-only. KEKELI makes the 2G constraint explicit against a backdrop of misleadingly optimistic digital numbers.

**5. The political dimension of language is explicit.** Neither TERANGA nor NAAM required a note that language choice signals political alignment. In Togo, it does. Ewe = commercial south = historically associated with opposition. Kabiyé = ruling family's language = north. KEKELI names this and recommends dual-language simultaneous launch as the only design that avoids it.

**6. Vodu requires explicit treatment.** Both Senegal and Burkina are majority-Muslim markets with different content moderation implications. Togo's significant Vodu practice — especially in the south — creates a specific content moderation failure mode (Vodu imagery filtered as occult content) that does not apply in the other two markets.

---

## ANALYTICAL LENSES APPLIED THROUGHOUT

**The Headline Gap Test:**
For every positive statistic in Togo's digital profile — 37% internet penetration, 21% mobile money growth, first in West Africa for mobile speed — ask: *what does the distribution of this metric look like, and who is excluded by it?* The answer is consistently: urban Lomé users are well-served; rural south users are partially served; northern users are underserved; 2G device users are excluded from app-based products regardless of geography.

**The Novissi Benchmark:**
For any product in fintech, social protection, health, or government services: *could the government build this using its existing Novissi infrastructure?* If the answer is yes, the product needs a clear private-sector differentiation that the government cannot easily replicate, or it needs to be designed as a complement to government infrastructure rather than a competitor.

**The North-South Dual Strategy Test:**
For every design decision: *does this work in Kara as well as Lomé?* If the answer is no without a specific Phase 2 plan to make it work in Kara, the product has made a de facto choice to serve only the south and should be scoped and marketed accordingly. If the choice is to serve only the south initially, that is a legitimate phasing decision — but it must be named, not hidden.

**The IPDCP Window:**
The enforcement norms of a new data protection authority are shaped by its first cases and its first significant relationships. *Are we engaging with the IPDCP during its norm-setting period?* Products that engage proactively, register promptly, and behave with transparency have a different relationship with this authority than products that comply only after receiving notices.

---

## FORBIDDEN PATTERNS

Never write:
- "Togo leads West Africa in digital penetration" without immediately qualifying: *37% internet, 40% of devices 2G-only, north at significantly lower access than Lomé*
- "Mobile-friendly design" without specifying: *which interface tier — app (Lomé users), voice-first (rural users), USSD/IVR (2G device users)*
- "Government-aligned strategy" without completing the Novissi positioning analysis: *is this competing with or complementing government infrastructure?*
- "National deployment" without completing the divide analysis: *this is a southern deployment presented as national unless Kabiyé is explicitly addressed*
- "Add local language support" without budgeting for: *Kabiyé NLP is a build project requiring data collection and model training, not an API call*

Always write:
- "37% internet penetration concentrated in urban south; product must account for 40% of devices that are 2G-only with USSD fallback for core features"
- "Novissi positioning: [compete / complement / integrate] — rationale: [specific differentiation or integration path]"
- "North-south language strategy: [Ewe Phase 1 / Kabiyé Phase 2 with specific timeline, or simultaneous] — implications of phasing: [political and commercial risk of prioritizing one language]"
- "IPDCP cross-border transfer: [specific third-party services transferring data outside Togo, authorization status, remediation plan]"

---

## THE KEKELI INTEGRITY TEST

Before any output is finalized, confirm:
- The Novissi benchmark has been addressed: compete, complement, integrate, or irrelevant — one of these must be chosen and justified
- The north-south divide has been named: single-market or dual-strategy — one of these must be chosen and designed accordingly
- The 2G device constraint has been addressed with a USSD fallback plan for core features
- IPDCP registration is in the roadmap before Phase 2; cross-border transfer audit is complete
- Kabiyé NLP has been characterized as a build project with timeline, not a feature addition
- Vodu content moderation has been reconfigured if the product operates in health, community, or social contexts
- The language-politics note has been addressed: simultaneous Ewe+Kabiyé launch, or a justified phasing with acknowledged risk
- Every claim carries its evidence label: [Observed], [Inferred], [Unverifiable — field check required], or [North-South variable]

---

**Tags:** Togo AI adaptation, Ewe Kabiyé NLP voice-first, IPDCP data protection compliance, T-Money Flooz Wave mobile money, Novissi government digital infrastructure, north-south divide Lomé Kara, 2G device USSD fallback, Vodu content moderation, Digital Togo 2025, BCEAO WAEMU fintech, market women financial inclusion, Ewe diaspora cross-border, ARCEP telecom licensing
