import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { useRegistros } from '../context/RegistrosContext';
import { TopBar } from '../components/TopBar';
import { Dock } from '../components/Dock';
import { RegistroCard } from '../components/RegistroCard';
import { RegistroIndustrial, RootStackParamList } from '../types';
import { fontFamily, fontSize } from '../theme/typography';
import { layout, borderRadius, spacing } from '../theme/spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'Lista'>;

export function ListaScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const { registros } = useRegistros();

  const DOCK_HEIGHT = layout.dockHeight;
  const FAB_BOTTOM = DOCK_HEIGHT + 20 + spacing.base;

  const renderItem = ({ item }: { item: RegistroIndustrial }) => (
    <RegistroCard
      registro={item}
      onPress={() => navigation.navigate('Detalhe', { registro: item })}
    />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyText, { color: colors.inkMute }]}>
        Nenhum registro encontrado
      </Text>
    </View>
  );

  return (
    <View style={[styles.screen, { backgroundColor: colors.bg }]}>
      <TopBar title="Registros" subtitle="MONITORAMENTO INDUSTRIAL" />

      <FlatList
        data={registros}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={[
          styles.listContent,
          registros.length === 0 && styles.listEmpty,
        ]}
        ItemSeparatorComponent={() => <View style={{ height: layout.cardGapSm }} />}
      />

      {/* FAB */}
      <TouchableOpacity
        style={[
          styles.fab,
          { backgroundColor: colors.accent, bottom: FAB_BOTTOM },
        ]}
        onPress={() => navigation.navigate('Cadastro')}
        activeOpacity={0.85}
      >
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <Dock
        activeRoute="Lista"
        onPressLista={() => {}}
        onPressCadastro={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listContent: {
    padding: spacing.lg,
    paddingBottom: layout.dockHeight + 20 + spacing.lg + 56 + spacing.base,
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxxl,
  },
  emptyText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
  },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
