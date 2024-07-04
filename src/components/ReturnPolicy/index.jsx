// components/ReturnPolicy.js
import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const ReturnPolicy = () => {
  return (
    <PolicyContainer>
      <Title>Política de Devolução</Title>
      
      <Section>
        <SectionTitle>Introdução</SectionTitle>
        <Paragraph>
          Nós, da Villa Minas Turismo, queremos garantir a sua satisfação com nossos serviços. Se, por algum motivo, você precisar cancelar ou solicitar o reembolso de um passeio ou serviço, por favor, leia nossa política de devolução abaixo.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Cancelamentos</SectionTitle>
        <Paragraph>
          Se você desejar cancelar seu passeio ou serviço, solicitamos que o faça com pelo menos 48 horas de antecedência da data programada. Cancelamentos feitos com menos de 48 horas de antecedência não serão elegíveis para reembolso.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Reembolsos</SectionTitle>
        <Paragraph>
          Reembolsos completos serão emitidos para cancelamentos feitos com pelo menos 48 horas de antecedência. Para cancelamentos feitos entre 24 e 48 horas antes do passeio, será oferecido um crédito para futuros passeios com nossa empresa. Cancelamentos feitos com menos de 24 horas de antecedência não serão reembolsados.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Processo de Reembolso</SectionTitle>
        <Paragraph>
          Para solicitar um reembolso, por favor, entre em contato com nossa equipe de atendimento ao cliente através do e-mail ou telefone fornecidos no nosso site. Inclua o número da sua reserva e o motivo do cancelamento. Processaremos o reembolso dentro de 5 a 10 dias úteis.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Exceções</SectionTitle>
        <Paragraph>
          Em casos de emergências ou circunstâncias imprevistas, faremos o possível para acomodar sua situação. Por favor, entre em contato com nossa equipe para discutir suas opções.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Alterações na Política</SectionTitle>
        <Paragraph>
          Reservamos o direito de alterar esta política de devolução a qualquer momento. As alterações serão publicadas em nosso site e entrarão em vigor imediatamente.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Contato</SectionTitle>
        <Paragraph>
          Se você tiver alguma dúvida ou preocupação sobre nossa política de devolução, por favor, entre em contato conosco pelo e-mail [seu-email@exemplo.com] ou pelo telefone [seu-telefone].
        </Paragraph>
      </Section>
    </PolicyContainer>
  );
}

export default ReturnPolicy;
