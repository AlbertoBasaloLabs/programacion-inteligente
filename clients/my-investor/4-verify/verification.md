/verify @feat-seat-booking/e2e.plan.md

/verify @feat-seat-booking/e2e.report.md

/review the feat-seat-booking changes

/release @feat-seat-booking/spec.md

---

> 1. First `/verify` run writes the e2e tests, runs them, and produces `e2e.report.md`.
> 2. Resume `/verify` on the report while defects remain; it escalates structural defects to `/planify`.
> 3. `/review` only starts on a green suite; it fixes quality findings in place without touching tests.
> 4. `/release` bumps the version, updates the changelog, syncs arch docs, and closes the spec (`done` + `released-version`).
