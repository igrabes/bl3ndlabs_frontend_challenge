import { FormikProps } from "formik";
import styled from "styled-components";

const StyledInput = styled.input`
  /* background-color: white; */
`;

interface Props {
  name: string;
  formik: FormikProps<any>;
}

const TextInput: React.FC<Props> = ({ name, formik }) => (
  <StyledInput name={name} onChange={formik.handleChange} />
);

export default TextInput;
