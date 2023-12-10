import { FlatList, StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FAKE_DATA } from '../../constants'

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

export default function ProductList() {
    const [products, setProducts] = useState([])
    const total = 100;

    const pullToRefresh = async () => {
        // let url = new URL(FAKE_DATA)
        // url.searchParams.set("skip", products.length)
        // url.searchParams.set("limit", 30)
        const data = await fetch(`${FAKE_DATA}?skip=${products.length}&limit=${30}`)
        const response = await data.json()
        setProducts((prevProducts) => [...prevProducts, ...response.products])
    }

    useEffect(() => {
        async function fetchData(){
            const data = await fetch(FAKE_DATA)
            const response = await data.json()
            setProducts(response.products)
        }
        setTimeout(() => fetchData(), 4000)
    }, [])
  return (
    <View style={styles.container}>
      {products.length ==0 ?<ActivityIndicator size={"large"} color="black"/> :<FlatList
      horizontal={false}
      extraData={products}
      numColumns={2}
      contentContainerStyle={products?.length == 0 && {flex:1,display:'flex', alignItems: "center"}}
      data={products}
      renderItem={({item}) => <Product item={item}/>}
      keyExtractor={(item, index) => index}
      onEndReached={pullToRefresh}
      onEndReachedThreshold={0.5}
    //   ItemSeparatorComponent={
    //     Platform.OS == 'android' &&
    //     (({highlighted}) => (
    //       <View
    //         style={[styles.separator, highlighted && {marginLeft: 0}]}
    //       />
    //     ))
    //   }
      ListEmptyComponent={EmptyList}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: "#AFC8AD",
        color: "white",
        padding: 5,
        width: "47%",
       margin: 5
    },
    textStyle: {
        fontSize: 20
    },
    container: {
        // flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    separator: {
        width: "100%",
        backgroundColor: "#D1D5DB",
        height: 1,
        marginHorizontal: 16,
        paddingRight: 20
    },
    noContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    flatStyle:{
        // height: "100%",
        // backgroundColor: "red"
    }
})