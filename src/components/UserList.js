import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import User from '../api/User';
import { useUserToken } from '../contexts/UserToken';
import { ListItem } from 'react-native-elements';

export default function (props) {
  const { email, headerComponent, onPress } = props;
  const [users, setUsers] = useState([]);
  const { token } = useUserToken();

  useEffect(() => {
    User.search(token, { email }).then(({ data }) => setUsers(data));
  }, [props]);

  return (
    <ScrollView>
      {headerComponent}
      {
        users.map(user =>
          <ListItem key={user._id} onPress={() => onPress(user)}>
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <Text style={styles.description}>{user.email}</Text>
            </ListItem.Content>
          </ListItem>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    paddingLeft: 10,
    color: 'grey'
  }
})