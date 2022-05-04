import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

export default function ({ value = 0, onChangeValue, ...rest }) {
	return (
		<View style={styles.container}>
			<Text
				style={styles.title}
			>
				Valor
			</Text>
			<CurrencyInput
				{...rest}
				value={value}
				onChangeValue={value => onChangeValue(value || 0)}
				style={styles.input}
				prefix="R$ "
				delimiter="."
				separator=","
				precision={2}
				minValue={0}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		marginHorizontal: 8,
	},
	title: {
		fontSize: 16,
		fontFamily: 'OpenSans-Regular',
	},
	input: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: '#969696',
		paddingHorizontal: 0,
		paddingBottom: 10,
	},
});