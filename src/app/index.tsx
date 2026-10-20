import { Image } from 'expo-image';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <View style={styles.backdrop}>
          <View style={styles.card}>
            <Image
              source={require('@/assets/images/image.avif')}
              style={styles.image}
              contentFit="contain"
            />
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.message}>This is a simple modal.</Text>
            <Pressable style={styles.button} onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#3c87f7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  card: {
    width: 280,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 232,
    height: 160,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#444444',
  },
});
