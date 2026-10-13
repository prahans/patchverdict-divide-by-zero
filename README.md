# patchverdict-divide-by-zero

A small intentionally buggy JavaScript repository used to test PatchVerdict's real repository verification flow.

The project exposes a `divide(a, b)` utility and a Vitest suite covering normal arithmetic and a zero-denominator edge case.

## Run

```bash
npm install
npm test
```

## Bug description

Copy this into PatchVerdict:

```text
The divide utility returns Infinity when the denominator is zero. Division by zero should be handled safely by returning 0, while normal division behavior must remain unchanged.
```
