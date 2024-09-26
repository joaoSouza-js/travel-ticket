import type { FontSizeType } from "@/styles/font-size";
import type { FontFamilyType } from "@/styles/font-family";
import {
    Text as ReactNativeBaseText,
    type TextProps as ReactNativeBaseTextProps,
} from "react-native";
import { forwardRef } from "react";
import { theme } from "@/styles/theme";
import type { ColorsType } from "@/styles/colors";

type textType = "primary" | "secondary"

type HeadingProps = ReactNativeBaseTextProps & {
    fontFamily?: FontFamilyType;
    fonSize?: FontSizeType;
    color?: ColorsType;
    variant?: textType
};

export const Heading = forwardRef<ReactNativeBaseText, HeadingProps>((props, ref) => {

    const {
        fontFamily = "bold",
        style,
        fonSize = "large",
        color = "white",
        variant = "primary",
        ...rest
    } = props;
    return (
        <ReactNativeBaseText
            ref={ref}
            style={[
                {
                    fontFamily: theme.fontFamily[fontFamily],
                    fontSize: theme.fontSize[fonSize],
                    color: theme.colors[color],
                },
                variant && {
                    color: variant === "primary" ? theme.colors.white : theme.colors.black
                },
                style,
            ]}
            {...rest}
        />
    );
});
