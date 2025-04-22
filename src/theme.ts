import { defaultConfig, defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
    roboto: {
        value: {
            fontFamily: "Roboto"
        }
    },
    robotoItalic: {
        value: {
            fontFamily: "Roboto Italic",
            fontStyle: "italic"
        }
    },
    montserrat: {
        value: {
            fontFamily: "Montserrat"
        }
    },
    montserratItalic: {
        value: {
            fontFamily: "Montserrat Italic",
            fontStyle: "italic"
        }
    },
    marrieweather: {
        value: {
            fontFamily: "Marrieweather"
        }
    },
    marrieweatherItalic: {
        value: {
            fontFamily: "Marrieweather Italic",
            fontStyle: "italic"
        }
    },
})

import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    textStyles,
  },
})

export default createSystem(defaultConfig, config)