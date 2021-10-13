import { Wrapper } from 'components/Input/styles';
import { InputProps } from 'types';

const Input = ({ isHeading, ...rest }: InputProps): React.ReactElement => {
  return (
    <Wrapper isHeading={isHeading}>
      <input {...rest} />
    </Wrapper>
  );
};

export default Input;
