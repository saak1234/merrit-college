import React from 'react'
// import HeroSection from '@/components/MECGFU/mecgfu-hero-section';
import Article from '@/components/MECGFU/mecgfu-article';
import Gallery from '@/components/MECGFU/mecgfu-gallery';
import HeroSection from '@/components/ui/hero-section';
const mecgfu = () => {
  return (
    <div>
        <HeroSection 
        header=" Merit Education Charity Gala for UNICEF"
        description="Since 2011, Merit Education has held Merit Education Charity
              Gala for UNICEF every year, raising funds to help children all
              over the world. This event is supported by Merit Education and
              UNICEF and organized by Merit Student Council."
        image="mecgfu-hero.jpg"
        />
        <Article/>
        <Gallery/>
    </div>
  )
}

export default mecgfu