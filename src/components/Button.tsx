import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius } from '../theme/spacing';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: 'primary' | 'ghost';
};

export function Button({ label, variant = 'primary', style, ...props }: ButtonProps) {
  const { colors } = useTheme();

  if (variant === 'ghost') {
    return (
      <TouchableOpacity
        style={[
          styles.base,
          styles.ghost,
          { borderColor: colors.line2 },
          style,
        ]}
        activeOpacity={0.7}
        {...props}
      >
        <Text style={[styles.ghostText, { color: colors.ink2 }]}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.base, styles.primary, { backgroundColor: colors.accent }, style]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={styles.primaryText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 44,
    borderRadius: borderRadius.button,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  primary: {
    // backgroundColor set dynamically
  },
  primaryText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.importantLabel,
    color: '#FFFFFF',
  },
  ghost: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  ghostText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
  },
});
