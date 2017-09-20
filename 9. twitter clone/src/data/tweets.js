const tweets = [
    {
        _id: "1",
        message: "Hola es mi mensaje 1",
        author: {
            _id: "11",
            name: "Pepito",
            lastname: "Conejo"
        },
        comments: [{
			message: "Hola es mi comentario 1",
	        author: {
	            _id: "11",
	            name: "Pepito",
	            lastname: "Conejo"
	        }	        
        }]
    },
    {
        _id: "2",
        message: "Hola es mi mensaje 2",
        author: {
            _id: "22",
            name: "Jose",
            lastname: "Campanella"
        },
        comments: [{
			message: "Hola es mi comentario 2",
	        author: {
	            _id: "11",
	            name: "Pepito",
	            lastname: "Conejo"
	        }	        
        }]
    }
];
export default tweets;