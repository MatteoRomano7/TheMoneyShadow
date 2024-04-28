import axios from "axios"
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
} from "./company"

interface SearchResponse {
  data: CompanySearch[]
}

const API_KEY = "1ebd55cb9b5cb8bc909543db46c762ea"

//Ricerca di tutte le aziende registrate al NASDAQ
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
    )
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Errore:", error.message)
      return error.message
    } else {
      console.log("Errore:", error)
      return "Si é verificato un errore imprevisto"
    }
  }
}

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}
export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}
export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}
export const getCashFlowStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}

//Creazione ed inserimento dei dati comparativi delle aziende tramite algoritmo
export const getCompData = async (query: string) => {
  try {
    const data = await axios.get<CompanyCompData[]>(
      `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}

//Ottenimento degli indici TenK di ogni azienda
export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log("Errore:", error.message)
  }
}
