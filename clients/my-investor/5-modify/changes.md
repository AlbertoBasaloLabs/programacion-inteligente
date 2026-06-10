/modify the bookings feature: passengers can book seats on a launch that is already full; the booking must be rejected when the requested seats exceed the available capacity.

/modify the bookings feature: when a passenger cancels a booking, a refund must now be processed automatically through the payment gateway.

---

> Two change requests on the same released feature, one per route:
>
> 1. **Route A — implementation defect**: the released acceptance criteria already forbid overbooking, but the code violates them. `/modify` fixes in place + regression e2e test, then a patch `/release` (changelog under *Fixed*). No spec artifacts touched.
> 2. **Route B — requirement change**: the code matches the released criteria; the desired behavior is new. `/modify` hands off to `/specify` with `amends: feat-seat-booking`, the full pipeline runs again, and `/release` stamps `superseded-by:` on the old spec.
>
> If the first request turns out *not* to violate a released criterion, that is the lesson: business calls it a "bug", but without a criterion stating the correct behavior it is a requirement change in disguise — Route B.
