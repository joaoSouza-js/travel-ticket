
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export function Loader() {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#ccc" />
    </View>
  );
}