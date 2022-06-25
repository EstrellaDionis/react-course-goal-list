import styled from 'styled-components';

//.button is a method from styled package
const Button = styled.button`
//this will be the default button style
  width: 100%
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px){
    width: auto;
  }

//instead of needing .button:focus... we just do &:focus 
  &:focus {
  outline: none;
}

//instead of .button:hover xx &:hover and etc etc
  &:hover,
  &:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
