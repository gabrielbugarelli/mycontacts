import { Container, Footer, Overlay } from './styles';
import Button from '../Button';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button"> Cancelar</button>
          <Button type="button"> Deletar </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
