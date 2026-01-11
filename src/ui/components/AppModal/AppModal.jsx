import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button';
import styles from './styles';

const AppModal = ({ visible, onClose, children}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
      >
        <Pressable style={styles.overlay} onPress={onClose}>
          <Pressable style={styles.modal}>
            {children}

            <Button text="Close" onPress={onClose} variant="danger" />
          </Pressable>
        </Pressable>
      </Modal>
    );
}



export default AppModal;
