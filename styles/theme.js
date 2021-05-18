import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: 0,
        minHeight:"100vh",
        background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(165,45,253,1) 100%)",
        color:"white"
      },
      a: {
        color: "white",
      },
      footer: {
        textAlign: "center"
      },
    }),
  },
});
 

export default theme