import ExperienceSection from '../ExperienceSection'
import { ThemeProvider } from '../ThemeProvider'

export default function ExperienceSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <ExperienceSection />
      </div>
    </ThemeProvider>
  )
}