/review the bookings module of the api container

/planify a structural refactor: extract the payment-gateway calls scattered across the bookings module into a single payments component, exposed to bookings (charges) and cancellations (refunds) through one PaymentGateway contract

/codify @refactor-payment-gateway/api.plan.md

/extract the api container

/release the payment-gateway structural refactor

---

> Same student question every cohort: *"is a refactor another `/specify`?"* — **No.** `/specify` owns the *what*, and a refactor never changes the what. There is nothing to specify; the acceptance criterion already exists: the e2e suite that `/verify` built. Route by blast radius:
>
> 1. **Route A — cosmetic**: ugly internals, contracts intact. `/review` fixes in place (refactor is folded into its clean-code dimension). Proof: existing tests green, untouched. One `refactor` commit and done — no plan, no spec, no release ceremony beyond the normal flow.
> 2. **Route B — structural**: a contract or component must move. `/planify` accepts a refactor goal **with no spec**; the criterion (existing e2e suite green, untouched) becomes the last step of the last container plan, so it has an owner. Then `/codify`, then `/extract` brownfield to re-sync the arch docs (arch docs are HEAD — they must follow the code), then a patch `/release` (*Changed*, internal).
>
> Live moments to provoke:
>
> - Start `/review` with a failing unit test in place: it must refuse (green-baseline gate — refactoring on red is changing two things at once).
> - During Route B, watch that `/verify` is never invoked and the e2e specs are never edited: the suite is the measuring stick, so nobody may touch it.
> - The trap: ask students to "refactor" the booking confirmation message text. Staying green would require changing a test assertion → behavior changed → it was never a refactor → `/modify`.
