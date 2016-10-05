import React, { PropTypes, Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import Header from './search/Header';
import BackToTrip from './search/BackToTrip';
import SearchTextInput from './search/SearchTextInput';
import MainSection from './search/MainSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from './theme/material_ui_raw_theme_file';

import { selectSearchFilter, fetchLocationsIfNeeded, invalidateSearchFilter } from '../redux/actions';
class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedSearchFilter } = this.props
    dispatch(fetchLocationsIfNeeded(selectedSearchFilter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSearchFilter !== this.props.selectedSearchFilter) {
      const { dispatch, selectedSearchFilter } = nextProps
      dispatch(fetchLocationsIfNeeded(selectedSearchFilter))
    }
  }

  handleChange(nextSearchFilter) {
    this.props.dispatch(selectSearchFilter(nextSearchFilter))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSearchFilter} = this.props
    dispatch(invalidateReddit(selectedSearchFilter))
    dispatch(fetchLocationsIfNeeded(selectedSearchFilter))
  }

  render() {
    const { selectedSearchFilter, locations, isFetching, lastUpdated } = this.props
    const isEmpty =  (locations != null &&  locations.length )=== 0
    return (
         <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
            <section style={style.wrapper}>
                <Header/>
                <section style={style.container}>
                    { /* Render AJAX example */ }
                    <section style={style.column}>
                        <BackToTrip/>
                        <SearchTextInput/>
                    </section>
                    <section style={style.column,{border:'1px solid #202020'}}>
                        { /* Result List */ }
                        <MainSection locations= {this.props.locations} />
                    </section>

                </section>

            </section>
         </MuiThemeProvider>
    )
  }
}


const style = {
    wrapper: {
        width: '100%'
    },
    container: {
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        paddingTop:50,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1000,
        alignItems: 'center'
    },
    panel: {
        width: 800
    },
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
};

App.propTypes = {
  selectedSearchFilter: PropTypes.string.isRequired,
  locations: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSearchFilter, locationsBySearchFilter } = state
  const {
    isFetching,
    lastUpdated,
    items: locations
  } = locationsBySearchFilter[selectedSearchFilter] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSearchFilter,
    locations,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
