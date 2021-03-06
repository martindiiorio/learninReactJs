import React from 'react';
import Post from './post';

export default class PostList extends React.Component {

	constructor () {
		
		super();
		this.state = {
			posts : []
		}

	}

	componentWillMount() {
		fetch('http://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => {
				this.setState({posts: posts})
			})
	}

	deletePost = (id) => {

		console.log('Borrame ' + id);
		let updatedList = this.state.posts.filter(p  => p.id != id);
		this.setState({ posts: updatedList });
	}

	render () {
		return (

			<div>
	
				{			
					this.state.posts.length ?

							this.state.posts.map( (p, index) => {

								return (

									<Post 
										key={index} 
										id={p.id}
										title={p.title} 
										body={p.body}
										intitialCounter={10}
										deleteFn={this.deletePost}
									/>

								)

							})
					
					: 'Cargando........!!!!'
				}

			</div>
		)
	}

}