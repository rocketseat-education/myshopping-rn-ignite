import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { styles } from './styles';
import { Product, ProductProps } from '../Product';

export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as ProductProps[];

        setProducts(data);
      });

    return () => subscribe();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
