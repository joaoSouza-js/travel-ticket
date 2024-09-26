import React from "react";
import { ImageBackground, View } from "react-native";
import CoverImage from "@/assets/images/cover.png";
import { styles } from "./styles";
import QRCode from "react-native-qrcode-svg";
import { useSafeTopInset } from "@/hooks/use-safe-top-inset";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useSafeBottomInset } from "@/hooks/uset-safe-bottom-inset";
import { Flight } from "@/components/ui/flight";
import { Ionicons } from "@expo/vector-icons";
import { Info } from "@/components/ui/info";
import Svg, { Circle, Line } from "react-native-svg";
import { theme } from "@/styles/theme";
export function Home() {
  const { safeTop } = useSafeTopInset();
  const { safeBottom } = useSafeBottomInset();

  return (
    <View style={[styles.container]}>
      <ImageBackground
        resizeMode="cover"
        source={CoverImage}
        style={[
          styles.header,
          {
            paddingTop: safeTop,
          },
        ]}
      >
        <Heading>Cartão de Embarque</Heading>
        <Text color="gray300">Falta 45 dias para o seu embarque</Text>
      </ImageBackground>
      <View style={[styles.ticket, { paddingBottom: safeBottom }]}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight airplaneLocation="TAP" city="São Paulo" />
            <View style={styles.flyingTime}>
              <Ionicons name="airplane" size={24} color="black" />
              <Text fonSize="small" color="gray800">
                9 h 15 min
              </Text>
            </View>
            <Flight
              contentAlignment="right"
              city="Rio de Janeiro"
              airplaneLocation="gru"
            />
          </View>
          <Text style={{ marginTop: 24 }} color="gray400" fonSize="small">
            PASSAGEIRO
          </Text>
          <Text color="black" fontFamily="bold" fonSize="medium">
            JOÃO DA SILVA
          </Text>

          <View style={styles.details}>
            <Info title="Data" content="10/10/2022" />

            <Info title="Embarque" content="10:00" />
          </View>
        </View>
        <View>
          <Svg height={30} width={"100%"}>
            <Line
              x1={"0%"}
              x2={"100%"}
              y2={"50%"}
              y1={"50%"}
              stroke={theme.colors.gray400}
              strokeWidth={1}
              strokeDasharray={[5, 5]}
            />
            <Circle cx={"0%"} cy={"50%"} r={"8"} fill={theme.colors.black} />
            <Circle cx={"100%"} cy={"50%"} r={"8"} fill={theme.colors.black} />
          </Svg>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Info title="Voo" content="TAP-GRU" />
            <Info title="Assento" content="10A" />

            <Info title="Terminal" content="3" />
            <Info title="Portão" content="232" />
          </View>
          <QRCode
            value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            size={150}
          />
        </View>
      </View>
    </View>
  );
}
