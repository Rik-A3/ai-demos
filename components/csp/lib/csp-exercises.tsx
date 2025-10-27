import { type CSP } from "./csp-types";

export const EXERCISES: CSP[] = [
  {
    id: "4houses",
    name: "4 houses problem",
    variables: ["A", "B", "C", "D"],
    domains: {
      A: ["1", "2", "3", "4"],
      B: ["1", "2", "3", "4"],
      C: ["1", "2", "3", "4"],
      D: ["1", "2", "3", "4"],
    },
    constraints: [
      { scope: ["A", "B"], type: "neq" },
      { scope: ["A", "C"], type: "neq" },
      {
        scope: ["D", "A"],
        type: "custom",
        label: "= -1",
        predicate: ({ d, a }: Record<string, string>) =>
          Number(d) - Number(a) === -1,
      },
      { scope: ["B", "C"], type: "neq" },
      {
        scope: ["B"],
        type: "custom",
        label: "≠ 1",
        predicate: ({ B }) => Number(B) !== 1,
      },
      {
        scope: ["C"],
        type: "custom",
        label: "≠ 3",
        predicate: ({ C }) => Number(C) !== 3,
      },

      {
        scope: ["B", "D"],
        type: "custom",
        label: "|B - D| ≥ 2",
        predicate: ({ b, d }) => Math.abs(Number(b) - Number(d)) >= 2,
      },
      {
        scope: ["C", "D"],
        type: "custom",
        label: ">",
        predicate: ({ d, c }: Record<string, string>) => Number(c) > Number(d),
      },
    ],
    positions: {
      A: { x: 100, y: 50 },
      B: { x: 800, y: 50 },
      D: { x: 800, y: 400 },
      C: { x: 100, y: 400 },
    },
  },
  {
    id: "4teachers",
    name: "4 teachers problem",
    variables: ["A", "B", "C", "D"],
    domains: {
      A: ["1", "2", "3", "4", "5"],
      B: ["1", "2", "3", "4", "5"],
      C: ["1", "2", "3", "4", "5"],
      D: ["1", "2", "3", "4", "5"],
    },
    constraints: [
      { scope: ["A", "B"], type: "neq" },
      { scope: ["A", "C"], type: "neq" },
      { scope: ["C", "D"], type: "neq" },
      { scope: ["A", "D"], type: "neq" },
      {
        scope: ["A"],
        type: "custom",
        label: "≠ 1",
        predicate: ({ A }) => Number(A) !== 1,
      },
      {
        scope: ["B"],
        type: "custom",
        label: "≠ 2",
        predicate: ({ B }) => Number(B) !== 2,
      },
      {
        scope: ["C"],
        type: "custom",
        label: "≠ 5",
        predicate: ({ C }) => Number(C) !== 5,
      },
      {
        scope: ["B", "D"],
        type: "custom",
        label: ">",
        predicate: ({ b, d }: Record<string, string>) => Number(b) > Number(d),
      },
      {
        scope: ["D"],
        type: "custom",
        label: "≥ 3",
        predicate: (vals: Record<string, string>) =>
          Number(vals.D ?? vals.d) >= 3,
      },
      {
        scope: ["C", "B"],
        type: "custom",
        label: "|C - B| > 1",
        predicate: ({ c, b }) => Math.abs(Number(c) - Number(b)) > 1,
      },
    ],
    positions: {
      A: { x: 100, y: 50 },
      B: { x: 800, y: 50 },
      D: { x: 800, y: 400 },
      C: { x: 100, y: 400 },
    },
  },
  {
    id: "Six activities",
    name: "Six activities problem",
    variables: ["F", "D", "K", "J", "M", "N", "B"],
    domains: {
      F: ["1", "2", "3"],
      D: ["1", "2", "3", "5", "6"],
      K: ["1", "2", "3"],
      J: ["1", "2", "3", "4", "5", "6"],
      M: ["1", "3", "5"],
      N: ["1", "2", "3", "4", "5"],
      B: ["5"],
    },
    constraints: [
      { scope: ["J", "D"], type: "neq" },
      { scope: ["N", "B"], type: "neq" },
      {
        scope: ["F", "D"],
        type: "custom",
        label: ">",
        predicate: ({ F, D }: Record<string, string>) => Number(D) < Number(F),
      },
      {
        scope: ["D", "K"],
        type: "custom",
        label: ">",
        predicate: ({ K, D }: Record<string, string>) => Number(D) > Number(K),
      },
      {
        scope: ["N", "J"],
        type: "custom",
        label: ">",
        predicate: ({ J, N }: Record<string, string>) => Number(J) > Number(N),
      },
      {
        scope: ["M", "N"],
        type: "custom",
        label: ">",
        predicate: ({ M, N }: Record<string, string>) => Number(M) > Number(N),
      },
    ],
    positions: {
      F: { x: 100, y: 50 },
      D: { x: 450, y: 50 },
      K: { x: 800, y: 50 },
      J: { x: 450, y: 225 },
      M: { x: 100, y: 400 },
      N: { x: 450, y: 400 },
      B: { x: 800, y: 400 },
    },
  },
];
