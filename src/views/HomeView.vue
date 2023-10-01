<template>
  <Navigation></Navigation>
    <HeroSection></HeroSection>
    <ViewRecentBlogs></ViewRecentBlogs>
    <Donotmissapost></Donotmissapost>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Donotmissapost from '../components/Donotmissapost'
import ViewRecentBlogs from '../components/HomeSectionBlogsPage/ViewRecentBlogs'
import HeroSection from './HeroSection'


export default {
  components: {
    Footer,
    Donotmissapost,
    ViewRecentBlogs, HeroSection , Navigation},
    setup(){
      
    }

}
</script>

<style>

</style>