/** Shared motion constants — kept in a plain module so both server and client code can import it. */

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const REVEAL_DURATION = 0.65;

export const viewportOnce = { once: true, amount: 0.25 } as const;
