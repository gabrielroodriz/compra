import { Button } from '@/components/Button';
import { Image, View } from 'react-native';
import { Filter } from '../../components/Filter';
import { Input } from '../../components/Input';
import { FilterStatus } from '../../types/FilterStatus';
import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      ∏
      <Image style={styles.image} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder="Digamos que" />
        <Button title={'Entrar'} />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive />
        <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
