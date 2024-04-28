import React, { SyntheticEvent } from "react"

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void
  portfolioValue: string
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue}></input>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete X
        </button>
      </form>
    </div>
  )
}

export default DeletePortfolio
