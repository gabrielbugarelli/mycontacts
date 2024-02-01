import PropTypes from 'prop-types';

import Select from '../Select';
import Input from '../Input';
import { FormGroup } from '../FormGroup';
import { ButtonContainer, Form } from './styles';
import Button from '../Button';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input type="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="tiktok">TikTok</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
