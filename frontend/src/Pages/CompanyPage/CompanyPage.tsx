import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { CompanyProfile } from "../../company"
import { getCompanyProfile } from "../../api"
import Sidebar from "../../Components/Sidebar/Sidebar"
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard"
import Tile from "../../Components/Tile/Tile"
import Spinner from "../../Components/Spinner/Spinner"
import CompFinder from "../../Components/CompFinder/CompFinder"
import TenKFinder from "../../Components/TenKFinder/TenKFinder"

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="COMPANY NAME" subTitle={company.companyName}></Tile>
            <Tile
              title="PRICE"
              subTitle={"$" + company.price.toString()}
            ></Tile>
            <Tile title="DFC" subTitle={"$" + company.dcf.toString()}></Tile>
            <Tile title="SECTOR" subTitle={company.sector}></Tile>
            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4  ">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default CompanyPage
