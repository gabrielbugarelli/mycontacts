import Input from '../../components/Input';
import Select from '../../components/Select';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '../../components/Button';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value={1}> Instagram </option>
        <option value={2}> Tiktok </option>
      </Select>

      <Button type="button"> Salvar alterações </Button>
      <Button type="button" disabled> Salvar alterações </Button>
    </>
  );
}
