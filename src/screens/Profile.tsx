import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { ContactThumbnail } from "../components/ContactThumbnail"
import DetailListItem from "../components/DetailListItem"
import { ClientContact } from "../types"
import { fetchRandomContact } from "../utils/api"
import colors from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
})

export const Profile: React.FC = () => {
  const [contact, setContact] = useState({} as ClientContact)

  useEffect(() => {
    const fetcher = async () => {
      setContact(await fetchRandomContact())
    }
    fetcher()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail contact={contact} textColor="white" />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={contact.email} />
        <DetailListItem icon="phone" title="Work" subtitle={contact.phone} />
        <DetailListItem
          icon="smartphone"
          title="Personal"
          subtitle={contact.cell}
        />
      </View>
    </View>
  )
}
