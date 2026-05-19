import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from './StatusBadge';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius, spacing } from '../theme/spacing';
import { RegistroIndustrial } from '../types';

type RegistroCardProps = {
  registro: RegistroIndustrial;
  onPress: () => void;
};

function getStripeColor(
  status: RegistroIndustrial['status'],
  colors: ReturnType<typeof useTheme>['colors']
): string {
  return {
    normal: colors.green,
    alerta: colors.yellow,
    critico: colors.red,
  }[status];
}

export function RegistroCard({ registro, onPress }: RegistroCardProps) {
  const { colors } = useTheme();

  const stripeColor = getStripeColor(registro.status, colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.line2,
        },
      ]}
    >
      {/* Left colored stripe */}
      <View style={[styles.stripe, { backgroundColor: stripeColor }]} />

      {/* Content */}
      <View style={styles.content}>
        {/* Header row */}
        <View style={styles.header}>
          <Text
            style={[styles.title, { color: colors.ink }]}
            numberOfLines={1}
          >
            {registro.nome}
          </Text>
          <StatusBadge status={registro.status} />
        </View>

        {/* Description */}
        <Text
          style={[styles.description, { color: colors.inkMute }]}
          numberOfLines={2}
        >
          {registro.descricao}
        </Text>

        {/* Date */}
        <Text style={[styles.date, { color: colors.inkGhost }]}>
          {registro.data}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.card,
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  stripe: {
    width: 4,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.xs + 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.cardTitle,
    flex: 1,
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.meta,
    lineHeight: fontSize.meta * 1.5,
  },
  date: {
    fontFamily: fontFamily.monoRegular,
    fontSize: fontSize.monoTimestamp,
    marginTop: spacing.xs,
  },
});
