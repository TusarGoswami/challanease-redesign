# DECISIONS.md

## 1. Why this approach over the obvious alternative?

**Chosen:** React + Vite + Tailwind CSS v4 with a single-page component architecture, using an interactive demo as the product "proof" rather than static mockup screenshots.

**Rejected alternative:** A static HTML/CSS page with embedded screenshots of a hypothetical dashboard. Screenshots would have been faster to produce and would have eliminated the need for state management, but they don't let the visitor *experience* the product concept. The interactive challan lookup demo — where you type a vehicle number, see a loading state, and get a structured result — communicates the UX improvement more convincingly than any screenshot could. It earns the "show, don't tell" requirement from the brief.

I also rejected adding a full dark-mode toggle. The brief says "all-or-nothing — half-dark is worse than none." I spent the time on interaction polish and mobile responsiveness instead, and used the dark palette specifically for the product showcase section where it makes visual sense as a dashboard context.

## 2. One trade-off under the time limit

**Trade-off made:** While a full multi-page portal with actual payment gateways was scoped out, I focused on high-fidelity client-side simulators. With a real week, I would connect to a mockup backend, build detailed analytics charts for vehicle fleets, and implement a full theme-engine dark mode toggle.

What shipped instead: an end-to-end lookup state-machine with visual rewards (confetti, Indian license plate input styling), a scroll-progress navbar, scroll-triggered animated dashboard counters, and a fully interactive **Trust/Clarity Simulator** letting users compare the traditional portal flow side-by-side with ChallanEase. This makes the product trade-off concrete and directly reviews the UX design decisions.

## 3. AI tool usage and personal verification

AI tools (Claude via Gemini Code Assist) were used to accelerate the initial scaffold: generating boilerplate component structures, writing Tailwind utility class combinations, and drafting copy variations. I reviewed and adjusted:

- **Every design decision**: colour palette, typography scale, spacing system, and component hierarchy were directed by specific prompts reflecting real UX reasoning, not generic "make it look good" delegation.
- **All copy**: AI-generated marketing-speak was replaced with concrete, honest language. No fabricated statistics, testimonials, or user counts appear anywhere.
- **Responsive behaviour**: breakpoint logic, mobile navigation, and layout shifts were tested at 390px and 1440px and adjusted where the generated output produced overflow or cramped layouts.
- **Interaction logic**: the challan lookup state machine (idle → loading → success/not-found → reset) was verified for edge cases — empty input, invalid numbers, rapid re-submissions.
- **Accessibility**: semantic HTML elements, ARIA labels, focus-visible states, and reduced-motion media query were manually reviewed against WCAG guidelines.

Every line in the codebase is something I can explain and defend in the follow-up call.
