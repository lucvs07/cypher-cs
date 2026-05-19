import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { fontFamily, fontSize } from '../theme/typography';
import { layout, spacing } from '../theme/spacing';

type TopBarProps = {
  title: string;
  subtitle: string;
  showBack?: boolean;
  onBack?: () => void;
};

export function TopBar({ title, subtitle, showBack = false, onBack }: TopBarProps) {
  const { colors, isDark, toggleTheme } = useTheme();

  const bgColor = isDark
    ? 'rgba(13,15,20,0.84)'
    : 'rgba(245,242,236,0.88)';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          borderBottomColor: colors.line,
        },
      ]}
    >
      {/* Left */}
      <View style={styles.side}>
        {showBack && onBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backBtn} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={22} color={colors.ink2} />
          </TouchableOpacity>
        ) : (
          <View style={styles.logo}>
            <Text style={[styles.logoText, { color: colors.ink }]}>CYPHER</Text>
            <Text style={[styles.logoAccent, { color: colors.accent }]}>CS</Text>
          </View>
        )}
      </View>

      {/* Center */}
      <View style={styles.center}>
        <Text
          style={[styles.title, { color: colors.ink }]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: colors.inkMute }]}>{subtitle}</Text>
      </View>

      {/* Right */}
      <View style={[styles.side, styles.sideRight]}>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeBtn} activeOpacity={0.7}>
          <Ionicons
            name={isDark ? 'sunny-outline' : 'moon-outline'}
            size={20}
            color={colors.ink2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: layout.topBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: spacing.base,
  },
  side: {
    width: 72,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: fontFamily.extraBold,
    fontSize: 16,
  },
  logoAccent: {
    fontFamily: fontFamily.extraBold,
    fontSize: 16,
  },
  title: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.topbarTitle,
  },
  subtitle: {
    fontFamily: fontFamily.monoRegular,
    fontSize: fontSize.footnote,
  },
  backBtn: {
    padding: spacing.xs,
    marginLeft: -spacing.xs,
  },
  themeBtn: {
    padding: spacing.xs,
  },
});
