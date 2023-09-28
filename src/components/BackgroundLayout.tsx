import { StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Box, useTheme } from "native-base";
export interface Props {
  children: ReactNode;
}
const BackgroundLayout = (props: Props) => {
  const { children } = props;
  const { colors } = useTheme();
  return (
    <Box flex={1}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[colors.gradient.color1, colors.gradient.color2]}
      >
        {children}
      </LinearGradient>
    </Box>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
