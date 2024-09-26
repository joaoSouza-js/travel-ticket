export const colors = {
    white: "#fff",
    black: "#000",
    gray300: "#d4d4d8",
    gray400: "#a1a1aa",
    gray800: "#27272a",
} as const;

export type ColorsType = keyof typeof colors;
