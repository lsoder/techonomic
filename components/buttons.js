import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled, textAlign } from '@mui/system'
import Link from 'next/link'
import React from 'react'

const black = {
  500: '#151515',
  600: '#313131',
  700: '#000000',
}
const blue = {
  500: '#2162f0',
  600: '##205fe8',
  700: '#1a52c9',
}

const ButtonStyleSm = styled('span')`
  font-weight: bold;
  font-size: 0.75rem;
  background-color: ${black[500]};
  padding: 12px 35px;
  border-radius: 12px;
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
const ButtonStyleSmBlue = styled('span')`
  font-weight: bold;
  font-size: 0.75rem;
  background-color: ${blue[500]};
  padding: 12px 35px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
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
  border-radius: 8px;
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

const ButtonStyleLgBlue = styled('span')`
  font-weight: bold;
  font-size: 0.75rem;
  background-color: ${blue[500]};
  padding: 16px 130px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
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
function CustomButtonLgBlue(props) {
  return <ButtonUnstyled {...props} component={ButtonStyleLgBlue} />
}
function CustomButtonSmBlue(props) {
  return <ButtonUnstyled {...props} component={ButtonStyleSmBlue} />
}

export function ButtonSm({ href, text }) {
  return (
    <Link href={href} passHref>
      <a>
        <CustomButtonSm>{text}</CustomButtonSm>
      </a>
    </Link>
  )
}

export function ButtonSmBlue(props) {
  return <CustomButtonSmBlue>{props.text}</CustomButtonSmBlue>
}
export function ButtonLg(props) {
  return <CustomButtonLg>{props.text}</CustomButtonLg>
}
export function ButtonLgBlue(props) {
  return <CustomButtonLgBlue>{props.text}</CustomButtonLgBlue>
}
