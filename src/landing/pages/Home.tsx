import PageIllustration from '../components/page-illustration'
import Hero from '../components/hero-home'
import Workflows from '../components/workflows'
// import Features from '../components/features'
import Services from '../components/Services'
import Cta from '../components/cta'
import Video from '../components/video-grid'

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Cta />
      <Services />
      <Video/>
     
    </>
  )
}
