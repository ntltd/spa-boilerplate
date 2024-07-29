import { cx } from '../../../styled-system/css'

import styled from './Button.styled.tsx'

type Props = {
  className?: string
  label: string
}

const Button = ({ className, label }: Props) => {
  return <button className={cx('button', styled.root, className)}>{label}</button>
}

export default Button
