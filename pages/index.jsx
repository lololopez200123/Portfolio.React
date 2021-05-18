import Head from 'next/head'
import { Image, VStack, Grid } from "@chakra-ui/react"
import Project from '@/components/project'
import Info from '@/components/info'


export default function Home() {
return (
    <div>
      <Head>
        <title>Lorenzo Lopez Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid placeItems="center"
            p={[3, 3, 0]} 
            templateAreas={['"i" "n" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
            '"i n" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
            '"p1 p2 p3 p4" "p5 i n p6" "p7 p8 p9 p10"',]}
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
            minH="95vh"
            gap="10px"
            mt={[4, 0]}
            >
            <Image 
            placeSelf="center"
            borderRadius="full" 
            boxSize="250px" 
            src="/fotoperfil.jpeg" 
            alt="Lorenzo Lopez"
            gridArea="i" />
           <VStack gridArea="n">
           <Info></Info>
          </VStack>
            <Project text="Proyecto 1" gridArea="p1"></Project> 
            <Project text="Proyecto 2" gridArea="p2"></Project>  
            <Project text="Proyecto 3" gridArea="p3"></Project> 
            <Project text="Proyecto 4" gridArea="p4"></Project>
            <Project text="Proyecto 4" gridArea="p5"></Project> 
            <Project text="Proyecto 4" gridArea="p6"></Project> 
            <Project text="Proyecto 4" gridArea="p7"></Project> 
            <Project text="Proyecto 4" gridArea="p8"></Project>
            <Project text="Proyecto 4" gridArea="p9"></Project> 
            <Project text="Proyecto 4" gridArea="p10"></Project> 
        </Grid>   
        <footer>
            <a 
              href="#"
            >
              Powered by Lorenzo Lopez
            </a>
          </footer>
    </div>
  )
}
