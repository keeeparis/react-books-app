import React, { ChangeEvent } from 'react'
import Select from '../../components/Select'
import { categories, sorting } from '../../mock'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import {
  updateCategory,
  updateSorting,
} from '../../redux/mainFeature/mainSlice'
import {
  selectCategory,
  selectSorting,
} from '../../redux/mainFeature/selectors'
import styles from './SortingSection.module.scss'

const SortingSection = () => {
  const dispatch = useAppDispatch()
  const category = useAppSelector(selectCategory)
  const sort = useAppSelector(selectSorting)

  const onCategoryChange = (option: string) => {
    dispatch(updateCategory(option))
  }

  const onSortingChange = (option: string) => {
    dispatch(updateSorting(option))
  }

  return (
    <div className={styles.wrapper}>
      <Select data={categories} onClick={onCategoryChange} value={category} />
      <Select data={sorting} onClick={onSortingChange} value={sort} />
    </div>
  )
}

export default SortingSection
