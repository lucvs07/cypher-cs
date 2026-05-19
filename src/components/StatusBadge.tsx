import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius } from '../theme/spacing';

type StatusBadgeProps = {
  status: 'normal' | 'alerta' | 'critico';
};

const STATUS_LABEL: Record<string, string> = {
  normal: 'NORMAL',
  alerta: 'ALERTA',
  critico: 'CRÍTICO',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { colors } = useTheme();

  const badgeStyle = {
    normal: {
      backgroundColor: colors.greenSoft,
      borderColor: colors.green,
      color: colors.green,
    },
    alerta: {
      backgroundColor: colors.yellowSoft,
      borderColor: colors.yellow,
      color: colors.yellow,
    },
    critico: {
      backgroundColor: colors.redSoft,
      borderColor: colors.red,
      color: colors.red,
    },
  }[status];

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: badgeStyle.backgroundColor,
          borderColor: badgeStyle.borderColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: badgeStyle.color }]}>
        {STATUS_LABEL[status]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 22,
    borderRadius: borderRadius.badge,
    paddingHorizontal: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fontFamily.monoSemiBold,
    fontSize: fontSize.monoBadge,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
