/**
 * Contact
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export interface Contact {
  name: string | { first: string, last: string }
  avatar: string
  phone: string
  cell?: string
  email?: string
  picture?: {
    large: string
  }
}

export interface ClientContact extends Contact {
  name: string
  id: string
  favorite?: boolean
}

export interface ApiContact extends Contact {
  name: {first: string, last: string}
}
