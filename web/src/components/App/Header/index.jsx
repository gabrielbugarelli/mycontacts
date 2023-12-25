import logo from '../../../assets/images/logo.svg';
import { Container, InputSearchContainer } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="My Contacts" width="201" />
      <InputSearchContainer>
        <input type="text" placeholder="pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}
