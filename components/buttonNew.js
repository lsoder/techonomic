import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'

const black = {
  500: '#151515',
  600: '#313131',
  700: '#000000',
}

const ButtonStyleSm = styled('span')`
  font-weight: bold;
  font-size: 0.75rem;
  background-color: ${black[500]};
  padding: 12px 35px;
  border-radius: 7px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${black[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${black[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`

const ButtonStyleLg = styled('span')`
  font-weight: bold;
  font-size: 0.75rem;
  background-color: ${black[500]};
  padding: 16px 130px;
  border-radius: 7px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${black[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${black[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`

function CustomButtonSm(props) {
  return <ButtonUnstyled {...props} component={ButtonStyleSm} />
}
function CustomButtonLg(props) {
  return <ButtonUnstyled {...props} component={ButtonStyleLg} />
}

export default function ButtonSm(props) {
  return <CustomButtonSm>{props.text}</CustomButtonSm>
}
export function ButtonLg(props) {
  return <CustomButtonLg>{props.text}</CustomButtonLg>
}
