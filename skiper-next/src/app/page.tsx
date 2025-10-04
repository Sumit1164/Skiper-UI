// import ImageCursorTrail from '@/components/ui/image-cursortrail'
// import React from 'react'

// const page = () => {
//   const images = [
//   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
//   "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
//   "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
//   "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
//   "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
//   "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
// ]
//   return (
//     <div>
//       <ImageCursorTrail items={images}></ImageCursorTrail>
//     </div>
//   )
// }

// export default page













'use client'
import { SkiperCard } from '@/components/ui/skiper-card'
import card1 from '/public/card1.jpeg'
import card2 from '/public/card2.jpeg'
import card3 from '/public/card3.jpeg'
import card4 from '/public/card4.jpeg'
import card5 from '/public/card5.jpg'
import card6 from '/public/card6.jpg'
import card7 from '/public/card7.jpg'
import card8 from '/public/card8.jpg'



import { CardCarousel } from '@/components/ui/card-carousel'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { Twitter, ScanSearch, Linkedin, Github, Instagram } from 'lucide-react'
import FlipLink from '@/components/ui/text-effect-flipper'
import { TextScroll } from '@/components/ui/text-scroll'
import React from 'react'
import { cn } from '@/lib/utils'

const page = () => {
      // ---Card carousel 
      const images = [
          {src: "/download (2).jpeg", alt: "Image 1" },
          {src: "/Life quotes.jpeg", alt: "Image 2" },
          {src: "/Motivation.jpeg", alt: "Image 3" },
          {src: "/download (3).jpeg", alt: "Image 4"}
      ]
  return (
    <div>
      <h1 className='text-white'>Hello Everyone</h1>
      <WrapButton href='https://sumit1164.github.io/'>
        Explore now
        <ScanSearch className='animate-'/>
      </WrapButton>
      <ShareButton links={[{icon:Twitter}, {icon:Linkedin}, {icon:Github}, {icon:Instagram}]}>Share</ShareButton>

      <div className='h-screen'></div>
      <div className='h-screen border-t-2'>
        <TextScroll default_velocity={1} text="I'm Sumit Tripathi, Full-Stack Developer" className='text-7xl font-bold'></TextScroll>
      </div>
      <div className='h-screen border-t-2'></div>

      <CardCarousel images={images} 
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={false} />
      
      <SkiperCard
        title='Sumit tripathi'
        description='Genius billionaire playboy philanthropist.'            //'World reachest person'
        step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
        image={{
              step1dark1: card1,
              step1dark2: card2,
              step1light1: card1,
              step1light2: card2,
              step2dark1: card3,
              step2dark2: card4,
              step2light1: card3,
              step2light2: card4,
              step3dark: card5,
              step3light: card6,
              step4light: card7,
              alt: 'Image was here'
        }}
      
      />

    </div>
  )
}

export default page
