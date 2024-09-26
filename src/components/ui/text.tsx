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

type TextProps = ReactNativeBaseTextProps & {
    fontFamily?: FontFamilyType;
    fonSize?: FontSizeType;
    color?: ColorsType;
    textColor?: textType,
    variant?: textType

};

export const Text = forwardRef<ReactNativeBaseText, TextProps>((props, ref) => {
    const {
        fontFamily = "base",
        style,
        fonSize = "base",
        color = "white",
        variant,
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
                }, variant && {
                    color: variant === "primary" ? theme.colors.white : theme.colors.black
                },
                style,
            ]}
            {...rest}
        />
    );
});

