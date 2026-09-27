import { SmoothScrollProvider } from './components/SmoothScroll'
import ProgressBar from './components/ProgressBar'
import FloatingNav from './components/FloatingNav'
import Hero from './sections/Hero'
import WhatIsRest from './sections/WhatIsRest'
import Resources from './sections/Resources'
import Representations from './sections/Representations'
import Stateless from './sections/Stateless'
import HttpMethods from './sections/HttpMethods'
import Idempotence from './sections/Idempotence'
import StatusCodes from './sections/StatusCodes'
import ApiDesign from './sections/ApiDesign'
import Interview from './sections/Interview'
import Closing from './sections/Closing'

export default function App() {
  return (
    <SmoothScrollProvider>
      <ProgressBar />
      <FloatingNav />
      <main>
        <Hero />
        <WhatIsRest />
        <Resources />
        <Representations />
        <Stateless />
        <HttpMethods />
        <Idempotence />
        <StatusCodes />
        <ApiDesign />
        <Interview />
        <Closing />
      </main>
    </SmoothScrollProvider>
  )
}
