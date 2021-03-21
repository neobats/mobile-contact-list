import React from 'react';
import {
  Image, StyleSheet,



  Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ClientContact } from '../../types/Contact';

type Props = {
  contact: ClientContact
  textColor: string
  onPress?: null | (() => void)
}

const defaultProps: Props = {
  contact: {
    id: '1',
    name: '',
    avatar: '',
    phone: ''
  },
  textColor: 'white',
  onPress: null
}

export const ContactThumbnail: React.FC<Props> = ({
  contact: { name,
  phone,
  avatar, },
  textColor,
  onPress,
} = defaultProps) => {
  const colorStyle = {
    color: textColor,
  };

  const renderImageComponent = () => {
    const image = <Image source={{ uri: avatar}} style={styles.avatar} />
    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>
          {image}
        </TouchableOpacity>
      )
    }
      return (
        <View>
          {image}
        </View>
      )
  }

  return (
    <View style={styles.container}>
      {renderImageComponent()}
      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
