import React from 'react'
import { 
  AboutContainer, 
  Image, 
  ImageContainer ,
  Heading,
  AboutContent,
  GradiantCircle,
  DarkCircle,
  Emoji
} from '../styles/section/aboutsection.styles'
import { CTAButton } from '../styles/commen/CTAButton.styles';
 

const AboutSection = () => {
   

  return (
    <>
      <AboutContainer id='about'>
        
        <ImageContainer>
          <Image src='/images/abiye.jpg' alt='prof-image'  title='Abebe Tizazu'/>
          <DarkCircle />
          <GradiantCircle />
        </ImageContainer>

        <AboutContent>

          <Heading>
            Hello  <Emoji>💝</Emoji>
          </Heading>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Delectus perferendis impedit, consectetur corporis,
            totam velit eius ut illo quaerat fuga, quidem eum! Quas possimus sit quibusdam animi laboriosam minima iure.0
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, qui. Voluptatem ad voluptas placeat.
            Corrupti facere laudantium delectus omnis,
            labore perspiciatis velit officia et eveniet assumenda rem aut temporibus ea.
          </p>
           
          <CTAButton href="#" target="_blank" >
              Download CV
          </CTAButton>

        </AboutContent>
      </AboutContainer>
       <hr />
    

    </>
  )
}

export default AboutSection
