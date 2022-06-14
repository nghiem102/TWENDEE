import { CSSProperties } from 'react'

export type TableFieldsType = {
    [key: string]: {
      label?: string
      style?: CSSProperties
      className?: string,
      renderContent?: (item: any) => any
    }
}
