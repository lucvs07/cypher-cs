import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { useRegistros } from '../context/RegistrosContext';
import { TopBar } from '../components/TopBar';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { RegistroIndustrial, RootStackParamList } from '../types';
import { fontFamily, fontSize } from '../theme/typography';
import { borderRadius, spacing } from '../theme/spacing';

type Props = StackScreenProps<RootStackParamList, 'Cadastro'>;

type StatusOption = RegistroIndustrial['status'];

const STATUS_OPTIONS: { value: StatusOption; label: string }[] = [
  { value: 'normal', label: 'Normal' },
  { value: 'alerta', label: 'Alerta' },
  { value: 'critico', label: 'Crítico' },
];

export function CadastroScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const { adicionarRegistro } = useRegistros();
  const insets = useSafeAreaInsets();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState<StatusOption>('normal');
  const [nomeError, setNomeError] = useState('');

  const getStatusColors = (value: StatusOption) => ({
    normal: { bg: colors.greenSoft, border: colors.green, text: colors.green },
    alerta: { bg: colors.yellowSoft, border: colors.yellow, text: colors.yellow },
    critico: { bg: colors.redSoft, border: colors.red, text: colors.red },
  }[value]);

  const handleSubmit = () => {
    if (!nome.trim()) {
      setNomeError('Nome é obrigatório');
      return;
    }
    setNomeError('');

    const hoje = new Date().toISOString().split('T')[0];
    const novo: RegistroIndustrial = {
      id: Date.now(),
      nome: nome.trim(),
      descricao: descricao.trim(),
      status,
      data: hoje,
    };

    adicionarRegistro(novo);
    navigation.goBack();
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.bg }]}>
      <TopBar
        title="Novo Registro"
        subtitle="CADASTRO"
        showBack
        onBack={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: spacing.xxxl + insets.bottom }]}
          keyboardShouldPersistTaps="handled"
        >
          {/* NOME */}
          <Input
            label="Nome"
            value={nome}
            onChangeText={(t) => {
              setNome(t);
              if (t.trim()) setNomeError('');
            }}
            placeholder="Ex.: Sensor de Temperatura T-01"
            error={nomeError}
          />

          {/* DESCRIÇÃO */}
          <Input
            label="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Descreva o registro..."
            multiline
          />

          {/* STATUS */}
          <View style={styles.statusSection}>
            <Text style={[styles.statusLabel, { color: colors.inkGhost }]}>
              STATUS
            </Text>
            <View style={styles.statusRow}>
              {STATUS_OPTIONS.map((opt) => {
                const isSelected = status === opt.value;
                const sc = getStatusColors(opt.value);
                return (
                  <TouchableOpacity
                    key={opt.value}
                    onPress={() => setStatus(opt.value)}
                    activeOpacity={0.75}
                    style={[
                      styles.statusBtn,
                      {
                        backgroundColor: isSelected ? sc.bg : colors.surface2,
                        borderColor: isSelected ? sc.border : colors.line2,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusBtnText,
                        {
                          color: isSelected ? sc.text : colors.inkMute,
                          fontFamily: isSelected
                            ? fontFamily.semiBold
                            : fontFamily.medium,
                        },
                      ]}
                    >
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* SUBMIT */}
          <Button label="Salvar Registro" onPress={handleSubmit} style={styles.submitBtn} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  statusSection: {
    gap: spacing.xs,
  },
  statusLabel: {
    fontFamily: fontFamily.monoSemiBold,
    fontSize: fontSize.monoEyebrow,
    letterSpacing: 0.14 * fontSize.monoEyebrow,
  },
  statusRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statusBtn: {
    flex: 1,
    height: 40,
    borderRadius: borderRadius.button,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBtnText: {
    fontSize: fontSize.body,
  },
  submitBtn: {
    marginTop: spacing.xs,
  },
});
