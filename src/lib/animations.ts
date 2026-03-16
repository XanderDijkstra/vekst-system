export const systemEase: [number, number, number, number] = [0.2, 0, 0, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.4, ease: systemEase },
};
