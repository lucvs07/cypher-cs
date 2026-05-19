import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius, spacing } from '../theme/spacing';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
  multiline?: boolean;
};

export function Input({ label, error, multiline, style, ...props }: InputProps) {
  const { colors } = useTheme();

  const borderColor = error ? colors.red : colors.line2;

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.label,
          { color: colors.inkGhost },
        ]}
      >
        {label.toUpperCase()}
      </Text>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multiline,
          {
            backgroundColor: colors.surface,
            borderColor,
            color: colors.ink,
          },
          style,
        ]}
        placeholderTextColor={colors.inkGhost}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        {...props}
      />
      {error ? (
        <Text style={[styles.errorText, { color: colors.red }]}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xs,
  },
  label: {
    fontFamily: fontFamily.monoSemiBold,
    fontSize: fontSize.monoEyebrow,
    letterSpacing: 0.14 * fontSize.monoEyebrow,
  },
  input: {
    height: 48,
    borderRadius: borderRadius.input,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
  },
  multiline: {
    height: 100,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  errorText: {
    fontFamily: fontFamily.monoMedium,
    fontSize: fontSize.monoLabel,
  },
});
