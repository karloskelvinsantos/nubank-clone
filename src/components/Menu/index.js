import React from 'react';
import QRCode from 'react-native-qrcode-generator';

import { Container, Code } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={200}
          bgColor="#8B10AE"
          fgColor="#FFF"
        />
      </Code>
    </Container>
  );
}
