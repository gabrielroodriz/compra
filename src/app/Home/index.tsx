import { Button } from '@/components/Button';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Filter } from '../../components/Filter';
import { Input } from '../../components/Input';
import { Item } from '../../components/Item';
import { FilterStatus } from '../../types/FilterStatus';
import styles from './styles';

const FILTER_STATUS: FilterStatus[] = Object.values(
  FilterStatus
) as FilterStatus[];
const ITEMS = Array.from({ length: 100 }).map((_, index) => index);

function handlePress() {
  return console.log('pressing....');
}
export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder="Digamos que" />
        <Button title={'Entrar'} onPress={handlePress} />
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
        <FlatList
          data={ITEMS}
          keyExtractor={item => item.toString()}
          renderItem={({ item }) => (
            <Item
              onStatus={() => console.log('Pressing status button')}
              onRemove={() => console.log('Pressing remove button')}
              data={{
                status: FilterStatus.DONE,
                description: `Item ${item}`,
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
