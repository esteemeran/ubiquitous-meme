const word = "math";

const ANIMATION_DURATION = 4000; //ms
const SPIRAL_NUMBER = 4;

//create spiral divs
for (i=0; i < SPIRAL_NUMBER; i++)
	{
		const div = document.createElement("div");
		div.classList.add("spiral");
		div.id = `spiral${i}`;
		document.body.append(div);
	}

//separate each char into divs
const character = word.split("").forEach((char, i) => 
	{
		function createElement (offset, spiralId)
			{
				const div = document.createElement("div");
				div.innerText = char;//+spiralId;
				//div.title = offset;
				div.classList.add("character");
				div.style.animationDelay = `-${i * (ANIMATION_DURATION/16)-offset}ms`;

				return div;
			}


		for(j=0; j<SPIRAL_NUMBER; j++)
		{
			let deg = (j==0) ? 0 : (360/SPIRAL_NUMBER)*j / (360/SPIRAL_NUMBER);
			document.getElementById(`spiral${j}`).append(createElement(-deg*(ANIMATION_DURATION/SPIRAL_NUMBER), j));
		}

	})
