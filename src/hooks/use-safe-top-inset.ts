import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeTopInset(distanceFromTop = 16) {
    const { top } = useSafeAreaInsets();
    const safeTop = top + distanceFromTop;
    return { safeTop };
}
