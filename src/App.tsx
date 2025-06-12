import Navbar from "./components/shared/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import LandingPage from "./page/LandingPage"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="fleet-vision-theme">
        <Navbar/>
        <LandingPage/>
    </ThemeProvider>
  )
}

export default App
