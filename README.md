# React LightBox Pack
## Features
- Built from scratch 👨‍💻⚡
- Crafted for react ⚛
- Zero additional dependency ❤
- Customizable 🎨
<hr />

## Example

https://imshines.github.io/react-lightbox-pack/

## Instalation

`npm install react-lightbox-pack`
or
`npm i react-lightbox-pack`

## Usage

### App.js

```javascript
import React from 'react';
import { Lightbox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";
import data from './data.json';

const App = () => {
	// State
	const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};

	return (
		<div>
			// data should be an array of object
			{data.map((item, index) => (
			<>
				<img
					key={item.id}
					src={item.image}
					alt={item.title}
					style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
					onClick={() => {
					lightBoxHandler(true, index);
					}}
				/>
			</>
			))}
			
			//Component
			<LightBox
				state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>
		</div>
	);
}
```

### Sample data.json

```json
[
	{
		"id":  1,
		"image":  "https://picsum.photos/200/800",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  2,
		"image":  "https://picsum.photos/300/200",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  3,
		"image":  "https://picsum.photos/800/200",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  4,
		"image":  "https://picsum.photos/500/800",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  4,
		"image":  "https://picsum.photos/500",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	}
]
```

### Sample data.json (array format)
```json
[
  "https://picsum.photos/200/800",
  "https://picsum.photos/300/200",
  "https://picsum.photos/800/200",
  "https://picsum.photos/500/800",
  "https://picsum.photos/500"
]
```

### Props

|props|type|
|--|--|
|state| accepts state with boolean|
|event| accepts an event with state, selected index argument|
|data| accepts an array of object with image urls, description, title, id|
|dataArr| accepts an array image urls|
|sIndex|accepts a state with number default as 0|
|imageWidth|accepts size as string or number|
|imageHeight|accepts size as string or number|
|thumbnailHeight|accepts size as string or number|
|thumbnailWidth|accepts size as string or number|
