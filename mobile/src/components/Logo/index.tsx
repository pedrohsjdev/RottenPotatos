import React from 'react';
import { View, Text, Image } from 'react-native';
import logoImg from '../../assets/logo.png';

import { styles } from './styles';

export function Logo() {
	return (
		<View style={styles.container}>
			<Image
				source={logoImg}
				style={styles.logo}
			/>
			<Text style={styles.title}>
				Rotten Potatos
			</Text>
		</View>
	);
}