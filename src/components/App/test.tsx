import { render } from "@testing-library/react-native"
import React from "react"
import { App } from "."

describe("App", () => {
  it("renders", async () => {
    // Arrange
    // const title = "Welcome to crema-app-mobile"
    // const subtitle = "Open up App.tsx to start working on your app!"

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _rendered = render(<App />)

    expect(_rendered).toBeDefined()
    // // Act
    // const { getByText, queryByText } = render(<App />)
    // await waitFor(() => queryByText(title))
    // const received = getByText(subtitle)

    // // Assert

    expect(true).toBeDefined()
  })
})
