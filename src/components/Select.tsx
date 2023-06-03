import { SelectHTMLAttributes } from "react";
import styled from "styled-components";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  isDisabled: boolean;
}

const Select = ({ options, isDisabled, ...props }: SelectProps) => {
  return (
    <StyledSelect {...props}>
      {options.map((option, index) => (
        <option disabled={isDisabled} value={index}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;

const StyledSelect = styled.select`
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #999999;
`;
