import {View, Text} from 'react-native';

interface cardProps {
    make: string,
    model: string,
    trim: string,
    type: string,
    
}

export default function TruckCard ({make, model, trim, type} : cardProps) {
    return(
    <View>
        <Text>{make}</Text>
        <Text>{model}</Text>
        <Text>{trim}</Text>
        <Text>{type}</Text>
    </View>
    )
    
}