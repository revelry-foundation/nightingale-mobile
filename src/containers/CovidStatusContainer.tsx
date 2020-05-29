import {Container} from 'unstated'
import SInfo from 'react-native-sensitive-info'

export interface CovidStatus {
  testedPositiveAt?: Date
  symptomsBeganAt?: Date
  locationsUploadedAt?: Date
}

export interface CovidStatusState {
  isFetching: boolean
  status: CovidStatus
}

const STATUS_KEY = 'nightingale_covid_status'
const SINFO_OPTIONS = {}

/**
 * An unstated container for managing the secure local storage of
 * the user's covid status
 */
export default class CovidStatusContainer extends Container<CovidStatusState> {
  constructor(_props = {}) {
    super()
    this.state = {
      isFetching: false,
      status: {},
    }
    this.init()
  }

  init = async () => {
    await this.setState({
      isFetching: true,
    })

    // TODO: remove me
    const statusEncoded = null
    // const statusEncoded = await SInfo.getItem(STATUS_KEY, SINFO_OPTIONS)
    const status = JSON.parse(statusEncoded || '{}')
    Object.keys(status).forEach(key => {
      if (status[key]) {
        status[key] = new Date(status[key])
      }
    })

    await this.setState({
      isFetching: false,
      status,
    })
    return this.state.status
  }

  clearStatus = async () => {
    await this.setState({status: {}})

    return this.saveStatus()
  }

  recordPositiveStatus = async (
    testedPositiveAt: Date,
    symptomsBeganAt?: Date
  ) => {
    await this.setState({
      status: {testedPositiveAt, symptomsBeganAt},
    })

    return this.saveStatus()
  }

  recordLocationsUploaded = async (locationsUploadedAt: Date) => {
    const {status} = this.state

    await this.setState({
      status: {
        ...status,
        locationsUploadedAt,
      },
    })

    return this.saveStatus()
  }

  private saveStatus = () => {
    const statusEncoded = JSON.stringify(this.state.status)
    return SInfo.setItem(STATUS_KEY, statusEncoded, SINFO_OPTIONS)
  }
}

export {CovidStatusContainer}
