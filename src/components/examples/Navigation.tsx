import Navigation from '../Navigation'
import { ThemeProvider } from '../ThemeProvider'

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen">
        <Navigation />
        <div className="pt-16 p-4">
          <p>Navigation component with theme toggle and smooth scrolling</p>
        </div>
      </div>
    </ThemeProvider>
  )
}