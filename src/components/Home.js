import IndexSongs from "./songs/IndexSongs"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexSongs />
		</>
	)
}

export default Home
