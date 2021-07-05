import styled from "styled-components"

const Container = styled.div`
    max-width: 700px;
    padding:
    margin: 0 auto;
`

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: black;
  line-height: 2.8rem;
  text-align: left;
`

const Paragraph = styled.p`
  font-size: 1rem;
  color: palevioletred;
  max-width: 45ch;
  line-height: 1.7rem;
`

// Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

export default function() {
    return (
        <>
        <Container>
            <Title>Mon super titre qui tient sur plusieurs lignes</Title>
            <Paragraph>
                0123456789 0 0123456789 0123456789
            </Paragraph>

            <Paragraph>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            </Paragraph>
        </Container>
      {/* <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper> */}
    </>
    )
}