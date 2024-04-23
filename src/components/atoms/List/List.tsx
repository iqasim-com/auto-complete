// React imports
import React from "react"
// Types imports
import { ListProps } from "../AtomsTypes"

const List = ({ title }: ListProps): JSX.Element => {
  return (
    <>
      <li>{title}</li>
    </>
  )
}

export default List