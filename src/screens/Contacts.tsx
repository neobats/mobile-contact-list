import React, { useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { ContactListItem } from "../components/ContactListItem"
import { ClientContact } from "../types"
import { fetchContacts } from "../utils/api"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
})

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<ClientContact[]>([])
  const [contactsSorted, setContactsSorted] = useState<ClientContact[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const keyExtractor = ({ phone }: ClientContact) => phone
  useEffect(() => {
    ;(async () => {
      try {
        setContacts(await fetchContacts())
        setLoading(false)
        setError(false)
      } catch {
        setLoading(false)
        setError(true)
      }
    })()
  }, [])

  useEffect(() => {
    setContactsSorted(contacts.sort((a, b) => a.name.localeCompare(b.name)))
  }, [contacts])

  const renderContact = ({ item }: { item: ClientContact }) => {
    return (
      <ContactListItem
        {...item}
        onPress={() => {
          return
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      )}
    </View>
  )
}

export default Contacts
