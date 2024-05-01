import { TextField } from '@shared/ui';
import { ChangeEvent } from 'react';

type Props = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Search = ({ onSearch, value }: Props) => {
  return (
    <TextField
      placeholder={'search'}
      defaultValue={value}
      onChange={onSearch}
    />
  );
};
