import AccountListItem from '@/components/AccountListItem';
import { View, Text, } from 'react-native';

export default function AccountsScreen() {
  return (
    <View>
      <Text>Accounts</Text>
      <AccountListItem />
      <AccountListItem />
      <AccountListItem />
    </View>
  )
}
