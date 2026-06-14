import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { layout, borderRadius, spacing } from '../theme/spacing';

type DockProps = {
  activeRoute: 'Lista' | 'Cadastro';
  onPressLista: () => void;
  onPressCadastro: () => void;
};

export function Dock({ activeRoute, onPressLista, onPressCadastro }: DockProps) {
  const { colors, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  const dockBg = isDark
    ? 'rgba(21,24,31,0.82)'
    : 'rgba(250,249,246,0.88)';
  const dockBorder = isDark
    ? 'rgba(255,255,255,0.09)'
    : 'rgba(20,20,25,0.09)';

  const isListaActive = activeRoute === 'Lista';
  const isCadastroActive = activeRoute === 'Cadastro';

  return (
    <View style={[styles.wrapper, { bottom: insets.bottom + 20 }]}>
      <View
        style={[
          styles.dock,
          {
            backgroundColor: dockBg,
            borderColor: dockBorder,
          },
        ]}
      >
        {/* Lista */}
        <TouchableOpacity
          onPress={onPressLista}
          activeOpacity={0.8}
          style={[
            styles.item,
            isListaActive
              ? { backgroundColor: colors.accentSoft, borderColor: colors.accent }
              : { backgroundColor: colors.surface2, borderColor: 'transparent' },
          ]}
        >
          <Ionicons
            name={isListaActive ? 'list' : 'list-outline'}
            size={22}
            color={isListaActive ? colors.accent : colors.inkGhost}
          />
        </TouchableOpacity>

        {/* Cadastro */}
        <TouchableOpacity
          onPress={onPressCadastro}
          activeOpacity={0.8}
          style={[
            styles.item,
            isCadastroActive
              ? { backgroundColor: colors.accentSoft, borderColor: colors.accent }
              : { backgroundColor: colors.surface2, borderColor: 'transparent' },
          ]}
        >
          <Ionicons
            name={isCadastroActive ? 'add-circle' : 'add-circle-outline'}
            size={22}
            color={isCadastroActive ? colors.accent : colors.inkGhost}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'box-none',
  },
  dock: {
    height: layout.dockHeight,
    borderRadius: layout.dockRadius,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm + 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
  },
  item: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
