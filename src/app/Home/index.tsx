import { Button } from '@/components/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Filter } from '../../components/Filter';
import { Input } from '../../components/Input';
import { FilterStatus } from '../../types/FilterStatus';
import styles from './styles';

const FILTER_STATUS: FilterStatus[] = Object.values(
  FilterStatus
) as FilterStatus[];

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder="Digamos que" />
        <Button title={'Entrar'} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map(s => (
            <Filter key={s} status={s} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
