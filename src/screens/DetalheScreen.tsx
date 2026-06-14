import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { TopBar } from '../components/TopBar';
import { StatusBadge } from '../components/StatusBadge';
import { RootStackParamList } from '../types';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius, spacing } from '../theme/spacing';

type Props = StackScreenProps<RootStackParamList, 'Detalhe'>;

export function DetalheScreen({ route, navigation }: Props) {
  const { registro } = route.params;
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const stripeMap: Record<string, string> = {
    normal: colors.green,
    alerta: colors.yellow,
    critico: colors.red,
  };
  const stripeColor = stripeMap[registro.status];

  return (
    <View style={[styles.screen, { backgroundColor: colors.bg }]}>
      <TopBar
        title={registro.nome}
        subtitle="DETALHE"
        showBack
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: spacing.xxxl + insets.bottom }]}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.line2,
            },
          ]}
        >
          {/* Left stripe */}
          <View style={[styles.stripe, { backgroundColor: stripeColor }]} />

          {/* Fields */}
          <View style={styles.fields}>
            {/* NOME */}
            <View style={styles.field}>
              <Text style={[styles.eyebrow, { color: colors.inkGhost }]}>NOME</Text>
              <Text style={[styles.fieldValue, styles.fieldValueLg, { color: colors.ink }]}>
                {registro.nome}
              </Text>
            </View>

            {/* STATUS */}
            <View style={styles.field}>
              <Text style={[styles.eyebrow, { color: colors.inkGhost }]}>STATUS</Text>
              <StatusBadge status={registro.status} />
            </View>

            {/* DATA */}
            <View style={styles.field}>
              <Text style={[styles.eyebrow, { color: colors.inkGhost }]}>DATA</Text>
              <Text style={[styles.fieldMono, { color: colors.ink2 }]}>
                {registro.data}
              </Text>
            </View>

            {/* DESCRIÇÃO */}
            <View style={styles.field}>
              <Text style={[styles.eyebrow, { color: colors.inkGhost }]}>DESCRIÇÃO</Text>
              <Text style={[styles.fieldBody, { color: colors.ink2 }]}>
                {registro.descricao || '—'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scroll: {
    padding: spacing.lg,
  },
  card: {
    borderRadius: borderRadius.card,
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  stripe: {
    width: 4,
  },
  fields: {
    flex: 1,
    padding: spacing.xl,
    gap: spacing.xl,
  },
  field: {
    gap: spacing.xs,
  },
  eyebrow: {
    fontFamily: fontFamily.monoSemiBold,
    fontSize: fontSize.monoEyebrow,
    letterSpacing: 0.16 * fontSize.monoEyebrow,
  },
  fieldValue: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.importantLabel,
  },
  fieldValueLg: {
    fontSize: fontSize.modalTitle,
  },
  fieldMono: {
    fontFamily: fontFamily.monoRegular,
    fontSize: fontSize.importantLabel,
  },
  fieldBody: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
    lineHeight: fontSize.body * 1.6,
  },
});
