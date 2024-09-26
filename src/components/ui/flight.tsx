import { View } from "react-native";
import { Heading } from "./heading";
import { Text } from "./text";

type flightProps = {
    city: string;
    airplaneLocation: string;
    contentAlignment?: "left" | "right";
}


export function Flight({ city, airplaneLocation, contentAlignment = "left" }: flightProps) {
    return (
        <View style={{
            flex: 1,

            alignItems: contentAlignment === "left" ? "flex-start" : "flex-end",
        }}>

            <Text fonSize='small' color='black'>{city}</Text>
            <Heading fonSize='extraLarge' variant='secondary' style={{ textTransform: "uppercase" }}>{airplaneLocation}</Heading>
        </View>
    )

}

