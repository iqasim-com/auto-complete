// React imports
import React from "react"
// Types imports
import { ListProps } from "../AtomsTypes"

/**
 * Component to render a single item in a list.
 * @param title The title or text content of the list item.
 * @returns JSX element representing the List component.
 */
const List = ({ title }: ListProps): JSX.Element => (<li>{title}</li>)

export default List