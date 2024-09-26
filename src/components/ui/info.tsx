import { View } from "react-native";
import { Text } from "./text";

type infoProps = {
    title: string;
    content: string;
};

export function Info({ title, content }: infoProps) {
    return (
        <View>
            <Text
                color="gray400"
                fontFamily="medium"
                fonSize="extraSmall"
                style={{ textTransform: "uppercase" }}
            >
                {title}
            </Text>
            <Text color="black" fontFamily="bold">
                {content}
            </Text>
        </View>
    );
}
