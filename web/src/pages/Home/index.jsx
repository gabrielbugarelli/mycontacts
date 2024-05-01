import { Link } from 'react-router-dom';
import {
  Card,
  Container, Header, InputSearchContainer, ListContainer,
} from './styles';
import arrowImage from '../../assets/images/icons/arrow.svg';
import editImage from '../../assets/images/icons/edit.svg';
import trashImage from '../../assets/images/icons/trash.svg';
import { Modal } from '../../components/Modal';

export function Home() {
  return (
    <Container>
      <Modal />
      <InputSearchContainer>
        <input type="text" placeholder="pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowImage} alt="Arrow icon" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Mendes</strong>
              <small>Instagram</small>
            </div>

            <span>gabriel@dev.com</span>
            <span>(00) 0000-0000</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={editImage} alt="edit" />
            </Link>
            <button type="button">
              <img src={trashImage} alt="delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
