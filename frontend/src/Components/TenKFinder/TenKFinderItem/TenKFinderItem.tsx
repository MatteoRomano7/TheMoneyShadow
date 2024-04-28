// Il 10k che include informazioni quali la storia dell'azienda, la struttura organizzativa, il patrimonio netto, le filiali, le holding, gli utili per azione e il bilancio certificato. Esso viene presentato entro 60 giorni dal termine dell'anno fiscale.

import { Link } from "react-router-dom"
import { CompanyTenK } from "../../../company"

type Props = {
  tenK: CompanyTenK
}

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear()
  return (
    <Link
      to={tenK.finalLink}
      target="_blank" // Aggiunto per aprire il link in una nuova scheda
      rel="noopener noreferrer" // Consigliato per motivi di sicurezza
      type="button"
      className="inline-flex items-center px-4 py-2 mx-3 text-sm font-medium text-white bg-lightGreen border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-red-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      10K - {tenK.symbol} - {fillingDate}
    </Link>
  )
}

export default TenKFinderItem
