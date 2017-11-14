
		var Observable = require("FuseJS/Observable");

			var title = Observable("Spider-Man:Homecoming");
			var pg = Observable("PG-13");
			var rating = Observable("7.9/10 IMDb - 2h13m");
			var image = Observable("Assets/images/man.jpg");
			var body = Observable("Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.")
	
		module.exports = {

				title: title,
				pg: pg,
				rating: rating,
				image: image,
				body: body
			};