import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

function AboutPage(): JSX.Element {
  return (
    <Layout>
      <VStack spacing="8" align="start">
        <Heading as="h1">À propos</Heading>

        <Text>
          {
            "Je suis développeur freelance. J'ai l'habitude de travailler avec Next.js pour créer rapidement des applications complètes en me basant sur les besoins utilisateurs."
          }
        </Text>

        <Text>
          {
            "Ma philosophie est de me focaliser sur le produit. Mes choix technologiques sont donc aussi radicalement simple que possible. Simple sans être simpliste, sachant que dans le milieu du web (ou de l'informatique en général), la complexité arrive toujours avec le temps."
          }
        </Text>
        <Text>
          {
            "J'apprends à utiliser les outils que j'ai choisis de manière approfondie plutôt qu'une connaissance superficielle. Vaut-il mieux apprendre 7 langages en 7 semaines ou bien 1 langage de manière poussée sur 7 semaines qui va répondre à 7 besoins? J'essaie d'adopter le bon modèle mental pour utiliser l'outil ou le lanagage au maximum de ses possibilités."
          }
        </Text>

        <Text>
          {
            "Au delà de cette simplicité recherchée, j'essaie d'avoir les yeux ouverts sur les nouveautés et de voir si un nouvel outil permettrait de mieux répondre à un besoin récurrent ou  de simplifier la stack technologique."
          }
        </Text>

        <Text>
          {
            "Pour mes besoins actuels j'utilise React, Next.js, TypeScript, Chakra UI, Prisma, Postgres. Chakra-UI, Prisma."
          }
        </Text>

        <Text>
          {
            "J'adore travailler en mode agile en construisant des produits de A à Z."
          }
        </Text>

        <Text>Contactez-moi sur Twitter ou LinkedIn!</Text>
      </VStack>
    </Layout>
  );
}

export default AboutPage;
