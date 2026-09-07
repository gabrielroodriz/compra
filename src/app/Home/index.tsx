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

const EMPTY_MESSAGE = 'Lista vazia';
const ITEMS = [
  {
    id: '1',
    status: FilterStatus.DONE,
    description: 'Comprar livro',
  },
  {
    id: '2',
    status: FilterStatus.PENDING,
    description: 'Curso de IA',
  },
  {
    id: '3',
    status: FilterStatus.DONE,
    description: 'Comprar novo teclado',
  },
];

function handlePress() {
  return console.log('pressing....');
}
export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder="O que você quero comprar hoje?" />
        <Button title={'Login'} onPress={handlePress} />
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
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Item
              onStatus={() => console.log('Pressing status button')}
              onRemove={() => console.log('Pressing remove button')}
              data={item}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>{EMPTY_MESSAGE}</Text>
          )}
        />
      </View>
    </View>
  );
}
