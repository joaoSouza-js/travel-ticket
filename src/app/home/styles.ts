import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: theme.colors.black,
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ticket: {
        backgroundColor: theme.colors.white,
        borderRadius: 22,
        overflow: "hidden",
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    flight: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    flyingTime: {
        flex: 1,
        alignItems: "center",
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
    },
    inline: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "row",
        marginTop: 16,
        gap: 12,
        alignItems: "center",
        paddingHorizontal: 20,
    },

    footerContent: {
        flex: 1,
    },
});
