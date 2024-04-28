import React, { SyntheticEvent } from "react"

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void
  symbol: string
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol}></input>
      <button
        type="submit"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        ADD +
      </button>
    </form>
  )
}

export default AddPortfolio
