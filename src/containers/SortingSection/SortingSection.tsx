import React, { ChangeEvent, useCallback } from 'react'

import Select from '../../components/Select'
import styles from './SortingSection.module.scss'

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

const SortingSection = () => {
  const dispatch = useAppDispatch()

  const category = useAppSelector(selectCategory)
  const sort = useAppSelector(selectSorting)

  const onCategoryChange = useCallback((option: string) => {
    dispatch(updateCategory(option))
  }, [])

  const onSortingChange = useCallback((option: string) => {
    dispatch(updateSorting(option))
  }, [])

  return (
    <div className={styles.wrapper}>
      <Select data={categories} onClick={onCategoryChange} value={category} />
      <Select data={sorting} onClick={onSortingChange} value={sort} />
    </div>
  )
}

export default SortingSection
