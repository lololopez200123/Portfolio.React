import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Info() {
    return (
        <VStack
        spacing={[6, 3]}
        gridArea="t"
        align={["center", "flex-start"]}
        w="full"
        p={5}
      >
        <Heading fontSize="40px">Lorenzo Lopez</Heading>
        <Text fontSize="lg" textAlign={["center", "left"]}>
          Desarrollador FrontEnd | Emprendedor | Musico
        </Text>
      </VStack>
    )
}
