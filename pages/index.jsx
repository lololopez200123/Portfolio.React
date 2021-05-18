import Head from 'next/head'
import { Image, VStack, Heading, Text, Grid } from "@chakra-ui/react"
import Project from '@/components/project'


export default function Home() {
return (
    <div>
      <Head>
        <title>Lorenzo Lopez Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid placeItems="center" p={4}>
          <Image 
          borderRadius="full" 
          boxSize="300px" 
          src="/fotoperfil.jpeg" 
          alt="Lorenzo Lopez" />
           <VStack>
            <Heading>Lorenzo Lopez</Heading>
            <Text>Este es mi Portafolio</Text>
          </VStack>
          <Project text="Proyecto 1"></Project> 
          <Project text="Proyecto 2"></Project>  
          <Project text="Proyecto 3"></Project>     
          <footer>
            <a
              href="#"
            >
              Powered by Lorenzo Lopez
            </a>
          </footer>
        </Grid>   
    </div>
  )
}
