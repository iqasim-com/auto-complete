// React imports
import React from "react"
// Context imports
import { useApiContext } from "../../../context/ApiDataContext"
// Atoms imports
import List from "../../atoms/List/List"

const Dropdown = ({ searchTerm }: any): JSX.Element => {
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
        {state.apiData?.map((data: any) => (
          <List title={makeSearchCharBold(data.title, searchTerm)} key={data.id} />
        ))}
      </ul>
    </>
  )
}

export default Dropdown