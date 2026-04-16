import { StyleSheet, Text, View,  FlatList } from 'react-native';


export default function App() {
  const dados = [
    {
    id: '1',
    nome: 'Ranger Raptor',
    marca: 'Ford',
    motor: "V6 3.0L Nano bi turbo",
    potencia: "397cv @ 5650 RPM",
    torqueMax: "583 Nm @ 3500 RPM",
    transmissao: "AT de 10 velocidades e paddle shifters",
    tracao: "4WD",
    amortecedores: "Live Valve FOX Racing 2.5”",
    zeroACem: "5,8s",
    destaque: "A picape mais rápida do Brasil em qualquer terreno",
    modosConducao: [
      "Normal",
      "Sport",
      "Escorregadio",
      "Lama",
      "Areia",
      "Rock Crawl",
      "Baja"
    ],
    modosVolante: [
      "Normal",
      "Sport",
      "Conforto"
    ],
    modosEscapamento: [
      "Normal",
      "Silencioso",
      "Sport",
      "Baja"
    ],
    modosAmortecedor: [
      "Normal",
      "Sport",
      "Baja"
    ],
    farois: "Matrix LED",
    rodasEPneus: "17” com 285/70 R17 AT",
    preco: "R$499.00"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            {Object.entries(item).map(([chave, valor]) => (
              <Text key={chave}>
                {chave} : {Array.isArray(valor) ? valor.join(', ') : valor}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
