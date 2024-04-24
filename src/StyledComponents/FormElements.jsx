import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

// Label
export const Label = styled.label`
  font-size: 14px;
  color: #4a5568;
  margin-bottom: 4px;
`;


// Text Input
export const InputBox = styled.input`
  padding: 10px;
  font-size: 14px;
  color: #1a202c; 
  background-color: #f7fafc; 
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  outline: none;

`;


// Button
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4299e1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce;
  }
`;

// Textarea
export const StyledTextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  color: #1a202c;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  outline: none;
`;


export const StyledListItem = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  list-style-type: disc;
`;