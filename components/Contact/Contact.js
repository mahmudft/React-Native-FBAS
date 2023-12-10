import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native'
import React from 'react'
import JsonList from '../../data/contacts.json'

const EmptyList = () => {
    return (
        <View style={styles.noContent}>
            <Text>No Data Fetched</Text>
        </View>
    )
}

const Product = ({item}) => {
    return (
        <View style={styles.itemStyle}>
            <Text style={styles.textStyle}>{item.title}</Text>
        </View>
    )
}

export default function Contact() {
  return (
    <View>
      <SectionList
      sections={JsonList}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.number}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });