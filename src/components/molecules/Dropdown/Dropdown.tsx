// React imports
import React from "react"
// Hooks imports
import { useApiContext } from "../../../hooks/useApiContext"
// Atoms imports
import List from "../../atoms/List/List"
import { ApiResponseProps } from "../../../hooks/types"

/**
 * Component to render a dropdown list with auto-suggested items.
 * @param searchTerm The search term used to filter items in the dropdown.
 * @returns JSX element representing the Dropdown component.
 */
const Dropdown = ({ searchTerm }: {searchTerm: string}): JSX.Element => {
  const { state } = useApiContext()

  /**
  * Function to make search characters bold within a title.
  * @param title The full title string.
  * @param searchTitle The substring to be highlighted within the title.
  * @returns JSX elements with the matching substring wrapped in <strong> tag for bold styling.
  */
  const makeSearchCharBold = (title: string, searchTitle: string) => {
    const index = title.toLowerCase().indexOf(searchTitle.toLowerCase())
    if (index === -1) {
      return title
    }
    const prefix = title.substring(0, index)
    const match = title.substring(index, index + searchTitle.length)
    const suffix = title.substring(index + searchTitle.length)
    return (
      <>
        {prefix}
        <strong>{match}</strong>
        {suffix}
      </>
    )
  }

  return (
    <>
      <ul>
        {state.apiData?.map((data: ApiResponseProps) => (
          <List title={makeSearchCharBold(data.title, searchTerm)} key={data.id} />
        ))}
      </ul>
    </>
  )
}

export default Dropdown