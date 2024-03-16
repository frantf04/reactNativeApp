import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import coc from "../data/tropas";

function TropaList() {
  return (
    <FlatList
      data={coc.tropas}
      renderItem={({ item: tropa }) => (
        <View key={tropa.nombre} style={{padding: 20, margin: 20}}>
          <Text>Name: {tropa.nombre}</Text>
          <Text>Type: {tropa.tipo}</Text>
          <Text>DPS: {tropa.dps}</Text>
          <Image
            style={{ with: 200, height: 400, marginTop: 10 }}
            source={{ uri: tropa.img }}
          />
        </View>
      )}
    ></FlatList>
  );
}

export default TropaList;
