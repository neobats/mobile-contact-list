import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import colors from "../../utils/colors"

type Props = {
  icon: string
  title: string
  subtitle: string
}

export default function DetailListItem({ icon, title, subtitle }: Props) {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              style={{
                color: colors.black,
                marginRight: 20,
              }}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>

            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  )
}

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

DetailListItem.defaultProps = {
  icon: null,
  subtitle: null,
}

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
})
