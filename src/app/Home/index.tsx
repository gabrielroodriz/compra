import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Filter } from '../../components/Filter';
import { Input } from '../../components/Input';
import { Item } from '../../components/Item';
import { itemsStorage, ItemStorage } from '../../storage/itemsStorage';
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

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<ItemStorage[]>([]);

  async function handleAdd() {
    if (!description.trim())
      return Alert.alert('Adicionar', 'Informe a descrição para adicionar.');
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };
    await itemsStorage.add(newItem);
    await getItems();
  }

  async function getItems() {
    try {
      const response = await itemsStorage.get();
      setItems(response);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível filtar os itens');
    }
  }
  useEffect(() => {
    getItems();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input
          placeholder="O que você quero comprar hoje?"
          onChangeText={setDescription}
        />
        <Button title={'Adicionar'} onPress={handleAdd} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map(s => (
            <Filter
              key={s}
              status={s}
              isActive={s === filter}
              onPress={() => setFilter(s)}
            />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
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
