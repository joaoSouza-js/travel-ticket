import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeBottomInset(safeDistanceFromBottom = 24) {
    const { bottom } = useSafeAreaInsets();
    const safeBottom = bottom + safeDistanceFromBottom;
    return { safeBottom };
}
