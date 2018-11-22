class List extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}
	onScroll = () => {
		if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.list.length)
	}
}

const withLoading = (Component) => (props) =>
  <div>
    <Component {...props} />

    <div className="interactions">
      {props.isLoading && <span>Loading...</span>}
    </div>
  </div>

const withPaginated = (Component) => (props) =>
  <div>
    <Component {...props} />

    <div className="interactions">
      {
        (props.page !== null && !props.isLoading) &&
        <button
          type="button"
          onClick={props.onPaginatedSearch}
        >
          More
        </button>
      }
    </div>
  </div>


const ListWithLoadingWithPaginated = compose(
  withPaginated,
  withLoading,
)(List);
