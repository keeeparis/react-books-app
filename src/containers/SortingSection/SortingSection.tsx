import React, { ChangeEvent } from 'react'
import { categories, sorting } from '../../mock'
import { useAppDispatch } from '../../redux/hooks/hooks'
import {
  updateCategory,
  updateSorting,
} from '../../redux/mainFeature/mainSlice'

const SortingSection = () => {
  const dispatch = useAppDispatch()

  const onCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateCategory(e.target.value))
  }

  const onSortingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSorting(e.target.value))
  }

  return (
    <div>
      <select name="category" id="category" onChange={onCategoryChange}>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
      <select name="sorting" id="sorting" onChange={onSortingChange}>
        {sorting.map((sort) => (
          <option value={sort} key={sort}>
            {sort.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortingSection
